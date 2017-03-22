using System.Collections.Generic;
using System.Dynamic;

namespace WebApi.Models
{
    public class User
    {

        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Phone { get; set; }

        public string Address { get; set; }

        public User(int id, string firstName, string lastName, string phone, string address)
        {
            Id = id;
            FirstName = firstName;
            LastName = lastName;
            Phone = phone;
            Address = address;
        }

        //public List<User> MasterList { get; set; }

    }
}