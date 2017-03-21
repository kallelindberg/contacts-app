using System.Collections.Generic;
using System.Web.Http;
using WebApi.Models;
using WebApi.services;

namespace WebApi.Controllers
{
    [RoutePrefix("api/users")]
    public class UserController : ApiController
    {
        private readonly UserService _userService = new UserService();

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
        [Route("{id}")]
        public List<User> Post(User user)
        {
            return _userService.AddUser(user);
        }

        [HttpPut]
        [Route("{id}")]
        public List<User> Put(User user)
        {
            return _userService.UpdateUser(user);
        }

        [HttpDelete]
        [Route("{id}")]
        public List<User> Delete(int id)
        {
            return _userService.DeleteUser(id);
        }
    }
}
