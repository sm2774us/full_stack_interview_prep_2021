using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Schema;
using System.Xml.Serialization;

namespace XmlTests
{
    public class XmlUtils
    {


        public static void CreateXmlFile(string filename)
        {
            Address add = new Address()
            {
                AddressLine1 = "AddressLine1",
                AddressLine2 = "AddressLine2",
                AddressLine3 = "AddressLine3",
                City = "City",
                County = "County",
                PostCode = "PostCode"
            };

            Customer cust = new Customer()
            {
                Email = "Email",
                FirstName = "John",
                LastName = "Barnes",
                Phone = "13311",
                Title = "Mr"
            };


            OrderList orders = new OrderList();


            var orderSummary = new OrderSummary()
            {
                DeliveryAddress = add,
                DeliveryDate = DateTime.Now,
                OrderLines = new List<OrderLine>()
                {
                    new OrderLine() {ItemQuanity = 150, ItemName = "TestItem1" },
                    new OrderLine() {ItemQuanity = 250, ItemName = "TestItem2" },
                    new OrderLine() {ItemQuanity = 4, ItemName = "TestItem3" },
                },
            };


            //order1
            Order order1 = new Order();
            order1.Customer = cust;
            order1.OrderSummary = orderSummary;
            orders.Orders.Add(order1);


            //order2
            Order order2 = new Order();
            order2.Customer = cust;
            order2.OrderSummary = orderSummary;
            orders.Orders.Add(order1);

            XmlSerializer xmlSerializer = new XmlSerializer(typeof(OrderList));

            using (FileStream stream = File.OpenWrite(filename))
            {
                xmlSerializer.Serialize(stream, orders);
            }
        }


        public static void CreateSchemaFromXml(string fileName)
        {

            //CREATE SCHEMA FROM XML

            XmlSerializer xmlSerializer = new XmlSerializer(typeof(OrderList));

            XmlSchemas schemas = new XmlSchemas();
            XmlSchemaExporter exporter = new XmlSchemaExporter(schemas);

            XmlTypeMapping mapping = new XmlReflectionImporter()
                .ImportTypeMapping(typeof(OrderList));
            exporter.ExportTypeMapping(mapping);
            var schemasData = TrimSchema(schemas);

            using (FileStream stream = File.OpenWrite(fileName))
            {
                schemasData.First().Write(stream);
            }
        }

        private static List<XmlSchema> TrimSchema(XmlSchemas schemas)
        {
            List<XmlSchema> schemasData = new List<XmlSchema>(
                schemas.Where(s => s.TargetNamespace != "http://www.w3.org/2001/XMLSchema" &&
                s.TargetNamespace != "http://microsoft.com/wsdl/types/"));

            return schemasData;
        }
    }
}
