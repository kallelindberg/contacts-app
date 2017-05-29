using System;
using System.Collections.Generic;
using System.Linq;
using WebApi.Data;
using WebApi.Models;

namespace WebApi.Repositories
{
    public class ContactsRepository : IContactsRepository
    {
        private readonly ContactContext _context;

        public ContactsRepository(ContactContext context)
        {
            _context = context;
        }

        public List<Contact> FindAllUsers()
        {
            var contacts = _context.Contact.ToList();
            return contacts;
        }

        public Contact FindUserById(int id)
        {
            var contacts = _context.Contact.FirstOrDefault(contact => contact.Id == id);
            return contacts;
        }

        public List<Contact> AddUser(Contact contact)
        {
            _context.Contact.Add(contact);
            _context.SaveChanges();
            var contacts = _context.Contact.ToList();
            return contacts;
        }

        public List<Contact> UpdateUser(Contact contact)
        {
            _context.Contact.Update(contact);
            _context.SaveChanges();
            var contacts = _context.Contact.ToList();
            return contacts;
        }

        public List<Contact> DeleteUser(int id)
        {
            var contact = _context.Contact.FirstOrDefault(c => c.Id == id);
            if (contact != null)
            {
                _context.Contact.Remove(contact);
                _context.SaveChanges();
            }
            var contacts = _context.Contact.ToList();
            return contacts;
        }

        public void DeleteAll()
        {
            _context.Contact.ToList().Clear();
            _context.SaveChanges();
        }

        public int GetId()
        {
           var lastSaved = _context.Contact.ToList().OrderByDescending(contact => contact.Id).FirstOrDefault();
           if (lastSaved != null)
           {
               return lastSaved.Id + 1;
           }
           else
           {
               return 0;
           }  
        }

    }
}
