using System.ComponentModel.DataAnnotations;

namespace WebApi.Models
{
    public class Login
    {
        [Key]
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }

        public Login() { }

        public Login(int id, string userName, string password)
        {
            Id = id;
            UserName = userName;
            Password = password;
        }

        public Login(string userName, string password)
        {
            UserName = userName;
            Password = password;
        }
    }
}