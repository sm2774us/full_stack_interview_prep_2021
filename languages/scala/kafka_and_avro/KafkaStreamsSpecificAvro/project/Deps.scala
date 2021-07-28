import sbt._

object Deps {
  lazy val kafka = "org.apache.kafka" % "kafka_2.11" % "1.1.0"
  lazy val avro =  "org.apache.avro" % "avro" % "1.8.2"
  lazy val avroSerializer = "io.confluent" % "kafka-avro-serializer" % "3.2.1"
  lazy val kafkaClients = "org.apache.kafka" % "kafka-clients" % "1.1.0"
  lazy val kafkaStreams = "org.apache.kafka" % "kafka-streams" % "1.1.0"
  lazy val kafkaStreamsAvroSerializer = "io.confluent" % "kafka-streams-avro-serde" % "4.1.0"  
  lazy val logBack = "ch.qos.logback" %  "logback-classic" % "1.1.7"
}