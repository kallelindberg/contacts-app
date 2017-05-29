using System.Collections.Generic;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using WebApi.Services;
using WebApi.Models;


namespace WebApi.Controllers
{
    [Route("api/contacts")]
    [EnableCors("MyPolicy")]

    public class ContactController : Controller
    {

        private readonly IContactService _contactService;
       

        public ContactController(IContactService contactService)
        {
            _contactService = contactService;
        }
        

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
        [Route("/add")]
        public List<Contact> AddContact([FromBody] Contact contact)
        {
            return _contactService.AddUser(contact);
        }

        [HttpPut]
        [Route("/update")]
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
