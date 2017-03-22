using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using WebApi.Models;

namespace WebApi.services
{
    public class UserService
    {
        private readonly List<User> _users;


        public UserService()
        {
            _users = new List<User>()
            {
                new User(1, "Sami", "Anttonen","",""),
                new User(2, "Joku", "Toinen","","")
            };
            
        }

        public List<User> FindAllUsers()
        {
            return _users;
        }

        public User FindUserById(int id)
        {
            return _users.FirstOrDefault(u => u.Id == id);
        }

        public void AddUser([FromBody]User user)
        {
            _users.Add(user);
        }

        public void UpdateUser([FromBody]User user)
        {
            _users.Insert(user.Id,user);
        }

        public void DeleteUser(int id)
        {
            _users.RemoveAt(id);
        }
    }
}