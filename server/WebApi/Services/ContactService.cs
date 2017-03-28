using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using WebApi.Models;

namespace WebApi.services
{
    public class ContactService
    {
        private readonly List<Contact> _contacts;


        public ContactService()
        {
            _contacts = new List<Contact>();

        }

        public List<Contact> FindAllUsers()
        {
            return _contacts;
        }

        public Contact FindUserById(int id)
        {
            return _contacts.FirstOrDefault(contact => contact.Id == id);
        }

        public List<Contact> AddUser(Contact contact)
        {
            _contacts.Add(new Contact(GetId(), contact.FirstName,contact.LastName,contact.Phone,contact.Address));
            return _contacts;
        }

        public List<Contact> UpdateUser(Contact contact)
        {
            _contacts.RemoveAt(contact.Id);
            _contacts.Insert(contact.Id,contact);
            return _contacts;
        }

        public List<Contact> DeleteUser(int id)
        {
            var delId = _contacts.FindIndex(contact => contact.Id == id);
            _contacts.RemoveAt(delId);
            return _contacts;
        }

        public void DeleteAll()
        {
            _contacts.Clear();
        }

        public int GetId()
        {
            var lastSaved = _contacts.OrderByDescending(contact => contact.Id).FirstOrDefault();
            if (lastSaved != null)
            {
                return lastSaved.Id +1;
            }
            else
            {
                return 0;
            }
        }
    }
}