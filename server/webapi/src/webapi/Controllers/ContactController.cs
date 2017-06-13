using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using WebApi.Services;
using WebApi.Models;


namespace WebApi.Controllers
{
    [Authorize("Bearer")]
    //[Route("api/contacts")]
    [EnableCors("MyPolicy")]

    public class ContactController : Controller
    {

        private readonly IContactService _contactService;
       

        public ContactController(IContactService contactService)
        {
            _contactService = contactService;
        }
        

        [HttpGet]
        [Route("api/contacts")]
        public List<Contact> GetAll()
        {
            return _contactService.FindAllUsers();
        }

        [HttpGet]
        [Route("api/contacts/{id}")]
        public Contact Get(int id)
        {
            return _contactService.FindUserById(id);
        }

        [HttpPost]
        [Route("api/contacts/add")]
        public List<Contact> AddContact([FromBody] Contact contact)
        {
            return _contactService.AddUser(contact);
        }

        [HttpPut]
        [Route("api/contacts/update")]
        public List<Contact> UpdateContact([FromBody]Contact contact)
        {
            return _contactService.UpdateUser(contact);
        }

        [HttpDelete]
        [Route("api/contacts/{id}")]
        public List<Contact> DeleteContact(int id)
        {
            return _contactService.DeleteUser(id);
        }

        [HttpDelete]
        [Route("api/contacts/")]
        public void DeleteAll()
        {
            _contactService.DeleteAll();
        }
    }
}
