using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Data;
using WebApi.Models;

namespace WebApi.Repositories
{
    public class LoginRepository: ILoginRepository
    {
        private readonly ContactContext _context;

        public LoginRepository(ContactContext context)
        {
            _context = context;
            var login = new Login("1","2");
            if (FindByUsername(login) == null)
            {
                _context.Login.Add(login);
                _context.SaveChanges();
            }
        }

        public Login Login(Login login)
        {
            var result = _context.Login.FirstOrDefault(l => l.UserName == login.UserName);
            return login;
        }

        public Login FindByUsername(Login login)
        {
            return _context.Login.FirstOrDefault(u => u.UserName == login.UserName);
        }

        public Login FindByUsernameAndPassword(Login login)
        {
            return _context.Login.FirstOrDefault(u => u.UserName == login.UserName && u.Password == login.Password);
        }

    }
}
