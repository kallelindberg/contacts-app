using WebApi.Models;
using WebApi.Repositories;

namespace WebApi.Services
{
    public class LoginService: ILoginService
    {

        private readonly ILoginRepository _loginRepository;

        public LoginService(ILoginRepository loginRepository)
        {
            _loginRepository = loginRepository;

        }

        public Login FindByUsernameAndPassword(Login login)
        {
            return _loginRepository.FindByUsernameAndPassword(login);
        }

        public Login FindByUsername(string userName)
        {
            return _loginRepository.FindByUsername(userName);
        }
    }
}
