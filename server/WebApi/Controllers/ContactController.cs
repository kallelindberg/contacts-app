using System;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApi.Models;
using WebApi.services;


namespace WebApi.Controllers
{
    [RoutePrefix("api/contacts")]
    
    public class ContactController : ApiController
    {
        private static ContactService _contactService = new ContactService();

        [HttpGet]
        [Route("")]
        public List<Contact> GetAll()
        {
            return _contactService.FindAllUsers();
        }

        [HttpGet]
        [Route("{id}")]
        public Contact Get(int id)
        {
            return _contactService.FindUserById(id);
        }

        [HttpPost]
        [Route("")]
        public List<Contact> AddContact([FromBody] Contact contact)
        {
            return _contactService.AddUser(contact);
        }

        [HttpPut]
        [Route("")]
        public List<Contact> UpdateContact([FromBody]Contact contact)
        {
            return _contactService.UpdateUser(contact);
        }

        [HttpDelete]
        [Route("{id}")]
        public List<Contact> DeleteContact(int id)
        {
            return _contactService.DeleteUser(id);
        }

        [HttpDelete]
        [Route("")]
        public void DeleteAll()
        {
            _contactService.DeleteAll();
        }
    }
}
