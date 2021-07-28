using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;
using System.Xml.Schema;
using NUnit.Framework;

namespace XmlTests
{
    [TestFixture]
    public class StaticXmlFileTests
    {

        
        //Baddies
        [TestCase(@"\Xml\BadAgainstSchema\OrdersBADExampleFileNoOrderSummary.xml", false)]
        [TestCase(@"\Xml\BadAgainstSchema\OrdersBADExampleFile_AddressLineTooLong.xml", false)]


        //Goodies
        [TestCase(@"\Xml\Good\OrdersGOODExampleFile_FullFeatureSet.xml", true)]
        [TestCase(@"\Xml\Good\OrdersGOODExampleFile_MultipleOrderLines.xml", true)]
        [TestCase(@"\Xml\Good\OrdersGOODExampleFile_MultipleOrders.xml", true)]
        [TestCase(@"\Xml\Good\OrdersGOODExampleFile_SingleOrder.xml", true)]
        [TestCase(@"\Xml\Good\OrdersGOODExampleFile_SingleOrderLine.xml", true)]
        public void TestFileProducesExpectedSchemaValidationResult(string filename, bool exepectedValidationResult)
        {


            var xmlFile = ObtainFullFilePath(filename);
            var xsdFile = ObtainFullFilePath(@"\Xml\OrdersExampleFile.xsd");

            //VALIDATE XML AGAINST SCHEMA C#
            var xdoc = XDocument.Load(xmlFile);
            var schemas = new XmlSchemaSet();
            using (FileStream stream = File.OpenRead(xsdFile))
            {
                schemas.Add(XmlSchema.Read(stream, (s, e) =>
                {
                    var x = e.Message;
                }));
            }

            bool isvalid = true;
            StringBuilder sb = new StringBuilder();
            try
            {
                xdoc.Validate(schemas, (s, e) => 
                    {
                        isvalid = false;
                        sb.AppendLine(string.Format("Line : {0}, Message : {1} ", 
                            e.Exception.LineNumber, e.Exception.Message));
                    });
            }
            catch (XmlSchemaValidationException)
            {
                isvalid = false;
            }

            var validationErrors = sb.ToString();
            Assert.AreEqual(exepectedValidationResult, isvalid);
            if (exepectedValidationResult)
            {
                Assert.AreEqual(string.Empty, validationErrors);
            }
            else
            {
                Assert.AreNotEqual(string.Empty, validationErrors);
            }

        }



        private string ObtainFullFilePath(string fileName)
        {
            var path = TestContext.CurrentContext.TestDirectory;
            return string.Format("{0}{1}", path, fileName);
        }
    }
}
