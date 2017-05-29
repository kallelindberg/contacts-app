using System.Collections.Generic;
using System.Linq;
using WebApi.Models;
using WebApi.Repositories;

namespace WebApi.Services
{
    public class ContactService : IContactService
    {
        //private readonly List<Contact> _contacts;

        private readonly IContactsRepository _contactsRepository;

        public ContactService(IContactsRepository contactsRepository)
        {
            _contactsRepository = contactsRepository;
            //_contacts = new List<Contact>()
            //{
              //  new Contact(0,"seppo","sukunimi","2341234234","osoite", "lepra"),
              //  new Contact(1,"sergtergergo","syeryeryerymi","234","eryeryerye", "herhter")
            //};

        }

        public List<Contact> FindAllUsers()
        {
            return _contactsRepository.FindAllUsers();
        }

        public Contact FindUserById(int id)
        {
            return _contactsRepository.FindUserById(id);
        }

        public List<Contact> AddUser(Contact contact)
        {
           return _contactsRepository.AddUser(contact);
        }

        public List<Contact> UpdateUser(Contact contact)
        {
            return _contactsRepository.UpdateUser(contact);
        }

        public List<Contact> DeleteUser(int id)
        {
            return _contactsRepository.DeleteUser(id);
        }

        public void DeleteAll()
        {
            _contactsRepository.DeleteAll();
        }

    }
}