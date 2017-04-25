using System.Collections.Generic;
using System.Dynamic;
using Newtonsoft.Json;

namespace WebApi.Models
{
    public class Contact
    {
       // [JsonProperty("_muuttuja")]
       // private string muuttuja;


        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Phone { get; set; }

        public string Address { get; set; }

        public string City { get; set; }

        public Contact(int id, string firstName, string lastName, string phone, string address, string city)
        {
            Id = id;
            FirstName = firstName;
            LastName = lastName;
            Phone = phone;
            Address = address;
            City = city;
        }

        //public List<User> MasterList { get; set; }

    }
}