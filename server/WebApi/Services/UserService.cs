using System.Collections.Generic;
using System.Linq;
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
                new User(0, "Sami", "Anttonen","",""),
                new User(1, "Joku", "Toinen","","")
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

        public List<User> AddUser(User user)
        {
            _users.Add(user);
            return _users;
        }

        public List<User> UpdateUser(User user)
        {
            _users.Insert(user.Id,user);
            return _users;
        }

        public List<User> DeleteUser(int id)
        {
            _users.RemoveAt(id);
            return _users;
        }
    }
}