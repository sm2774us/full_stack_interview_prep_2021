package utils

import java.lang.reflect.{ParameterizedType, Type}

import org.apache.kafka.streams.errors.BrokerNotFoundException

import scala.concurrent._
import scala.concurrent.duration._
import scala.reflect.ClassTag
import scala.util.{Failure, Success, Try}
import scala.reflect.runtime.universe._

object Retry {

  @annotation.tailrec
  def whileSeeingExpectedException[A, T : TypeTag](backoff: Duration = 5 seconds)(f: => A): Option[A] = {

    Try(f) match {
      case Success(x) => Some(x)
      case Failure(e) =>
        val want = typeToClassTag[T]
        val have = ClassTag(e.getClass)
        if (want == have) {
          Thread.sleep(backoff.toMillis)
          println(s"Retrying due to Exception of type ${want.getClass.getName}")
          Retry.whileSeeingExpectedException[A,T](backoff)(f)
        } else {
          println("Un expected Exception type seen, quiting")
          None
        }
    }
  }

  def typeToClassTag[T: TypeTag]: ClassTag[T] = {
    ClassTag[T]( typeTag[T].mirror.runtimeClass( typeTag[T].tpe ) )
  }

  /**
    * exponential back off for retry
    */
  def exponentialBackoff(r: Int): Duration = scala.math.pow(2, r).round * 500 milliseconds

  def noIgnore(t: Throwable): Boolean = false

  /**
    * retry a particular block that can fail
    *
    * @param maxRetry  how many times to retry before to giveup
    * @param deadline	how long to retry before giving up; default None
    * @param backoff		a back-off function that returns a Duration after which to retry. default is an exponential backoff at 100 milliseconds steps
    * @param ignoreThrowable		if you want to stop retrying on a particular exception
    * @param block	a block of code to retry
    * @param ctx	an execution context where to execute the block
    * @returns	an eventual Future succeeded with the value computed or failed with one of:
    *   `TooManyRetriesException`	if there were too many retries without an exception being caught. Probably impossible if you pass decent parameters
    *   `DeadlineExceededException` if the retry didn't succeed before the provided deadline
    *   `TimeoutException`	if you provide a deadline and the block takes too long to execute
    *   `Throwable`	the last encountered exception
    */
  def retry[T](maxRetry: Int,
               deadline: Option[Deadline] = None,
               backoff: (Int) => Duration = exponentialBackoff,
               ignoreThrowable: Throwable => Boolean = noIgnore)(block: => T)(implicit ctx: ExecutionContext): Future[T] = {

    class TooManyRetriesException extends Exception("too many retries without exception")
    class DeadlineExceededException extends Exception("deadline exceded")

    val p = Promise[T]

    def recursiveRetry(retryCnt: Int, exception: Option[Throwable])(f: () => T): Option[T] = {
      if (maxRetry == retryCnt
        || deadline.isDefined && deadline.get.isOverdue) {
        exception match {
          case Some(t) =>
            p failure t
          case None if deadline.isDefined && deadline.get.isOverdue =>
            p failure (new DeadlineExceededException)
          case None =>
            p failure (new TooManyRetriesException)
        }
        None
      } else {
        val success = try {
          val rez = if (deadline.isDefined) {
            Await.result(future(f()), deadline.get.timeLeft)
          } else {
            f()
          }
          Some(rez)
        } catch {
          case t: Throwable if !ignoreThrowable(t) =>
            blocking {
              val interval = backoff(retryCnt).toMillis
              Thread.sleep(interval)
            }
            recursiveRetry(retryCnt + 1, Some(t))(f)
          case t: Throwable =>
            p failure t
            None
        }
        success match {
          case Some(v) =>
            p success v
            Some(v)
          case None => None
        }
      }
    }

    def doBlock() = block

    Future {
      recursiveRetry(0, None)(doBlock)
    }

    p.future
  }

}
