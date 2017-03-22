using System;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApi.Models;
using WebApi.services;


namespace WebApi.Controllers
{
    [RoutePrefix("api/users")]
    
    public class UserController : ApiController
    {
        private readonly  UserService _userService = new UserService();

        [HttpGet]
        [Route("")]
        public List<User> GetAll()
        {
            return _userService.FindAllUsers();
        }

        [HttpGet]
        [Route("{id}")]
        public User Get(int id)
        {
            return _userService.FindUserById(id);
        }

        [HttpPost]
        [Route("")]
        public void AddUser(User user)
        {
            _userService.AddUser(user);
        }

        [HttpPut]
        [Route("{id}")]
        public void UpdateUser(User user)
        {
            _userService.UpdateUser(user);
        }

        [HttpDelete]
        [Route("{id}")]
        public void Delete(int id)
        {
            _userService.DeleteUser(id);
        }
    }
}
