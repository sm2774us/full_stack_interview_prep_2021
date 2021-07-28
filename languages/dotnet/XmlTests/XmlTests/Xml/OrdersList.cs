using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.AccessControl;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace XmlTests
{
    public class OrderList
    {
        public OrderList()
        {
            Orders = new List<Order>();
        }

        public List<Order> Orders { get; set; }
    }

    public class Order
    {

        public OrderSummary OrderSummary { get; set; }
        public Customer Customer { get; set; }
    }


    public class Address
    {
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string AddressLine3 { get; set; }
        public string City { get; set; }
        public string County { get; set; }
        public string PostCode { get; set; }
    }

    public class Customer
    {
        public string Title { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }

    }


    public class OrderSummary
    {
        public OrderSummary()
        {
            OrderLines = new List<OrderLine>();
        }

        public List<OrderLine> OrderLines { get; set; }
        public Address DeliveryAddress { get; set; }
        public DateTime DeliveryDate { get; set; }

    }

    public class OrderLine
    {
        public decimal ItemQuanity { get; set; }
        public string ItemName { get; set; }
    }


}
