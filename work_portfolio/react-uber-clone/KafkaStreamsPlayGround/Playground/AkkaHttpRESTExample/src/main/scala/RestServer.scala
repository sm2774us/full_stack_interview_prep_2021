import akka.actor.ActorSystem
import akka.http.scaladsl.Http
import akka.http.scaladsl.model._
import akka.http.scaladsl.server.Directives._
import akka.stream.ActorMaterializer

import scala.io.StdIn
import akka.http.scaladsl.marshallers.sprayjson.SprayJsonSupport._
import spray.json.DefaultJsonProtocol._
import Entities.DomainEntitiesJsonFormats._
import Entities._
import scala.concurrent.{ExecutionContext, Future, Await}
import scala.concurrent.duration._


object RestServer extends App {



  run()


  def run() {
    val itemNameRegexPattern =  """\w+""".r
    implicit val system = ActorSystem("my-system")
    implicit val materializer = ActorMaterializer()
    implicit val executionContext = system.dispatcher

    val route =
      path("hello") {
        get {
          complete(HttpEntity(ContentTypes.`text/html(UTF-8)`,
            "<h1>Say hello to akka-http</h1>"))
        }
      }~
        path("order" / itemNameRegexPattern) { itemName =>
          get {

            //TODO : Why does this moving this to top level scope create hell
            //implicit val ec = ExecutionContext.global


            complete(getOrder(false))


//            val f = getOrder(true)
//            try {
//              val order = Await.result(f, 10 seconds)
//              complete(order)
//            }
//            catch {
//              case (ex: Exception) => {
//                complete(new Order(List[Item]()))
//              }
//            }
//


            //complete(Order(List[Item](Item(itemName, 1))))
          }
        }

    val bindingFuture = Http().bindAndHandle(route, "localhost", 8080)
    println(s"Server online at http://localhost:8080/\nPress RETURN to stop...")

    Runtime.getRuntime.addShutdownHook(new Thread(() => {
      bindingFuture
        .flatMap(_.unbind()) // trigger unbinding from the port
        .onComplete(_ => system.terminate()) // and shutdown when done
    }))

    StdIn.readLine() // let it run until user presses return
  }



  def getOrder(shouldFail: Boolean) : Future[Order] = {
    if(shouldFail) {
      Future.failed(new Exception("Bad stuff"))
    }
    else {
      Future.successful(Order(List[Item](Item("its fine", 1))))
    }
  }

}


//import akka.actor.ActorSystem
//import akka.http.scaladsl.Http
//import akka.http.scaladsl.model._
//import akka.http.scaladsl.server.Directives._
//import akka.stream.ActorMaterializer
//import scala.io.StdIn
//import akka.http.scaladsl.marshallers.sprayjson.SprayJsonSupport._
//import spray.json.DefaultJsonProtocol._
//import Entities.DomainEntitiesJsonFormats._
//import Entities._
//import scala.util.{Failure, Success}
//import scala.concurrent.{ExecutionContext, Future}
//import scala.concurrent._
//import scala.concurrent.duration._
//
//
//
//object RestServer extends App {
//
//  implicit val ec = ExecutionContext.global
//
//  run()
//
//
//  def run() {
//    val itemNameRegexPattern =  """\w+""".r
//    implicit val system = ActorSystem("my-system")
//    implicit val materializer = ActorMaterializer()
//    implicit val executionContext = system.dispatcher
//
//    val route =
//      path("hello") {
//        get {
//          complete(HttpEntity(ContentTypes.`text/html(UTF-8)`,
//            "<h1>Say hello to akka-http</h1>"))
//        }
//      }~
//      path("order" / itemNameRegexPattern) { itemName =>
//        get {
//          complete(new Order(List[Item]()))
////          val f = getOrder(false)
////          try {
////            val order = Await.result(f, 10 seconds)
////            complete(order)
////          }
////          catch {
////            case (ex: Exception) => {
////              complete(new Order(List[Item]()))
////            }
////          }
//        }
//      }
//
//    val bindingFuture = Http().bindAndHandle(route, "localhost", 8080)
//    println(s"Server online at http://localhost:8080/\nPress RETURN to stop...")
//
//    Runtime.getRuntime.addShutdownHook(new Thread(() => {
//      bindingFuture
//        .flatMap(_.unbind()) // trigger unbinding from the port
//        .onComplete(_ => system.terminate()) // and shutdown when done
//    }))
//
//    //StdIn.readLine() // let it run until user presses return
//  }
//
//
//  def getOrder(shouldFail: Boolean) : Future[Order] = {
//    if(shouldFail) {
//      Future.failed(new Exception("Bad stuff"))
//    }
//    else {
//      Future.successful(Order(List[Item](Item("its fine", 1))))
//    }
//  }
//
//
//}