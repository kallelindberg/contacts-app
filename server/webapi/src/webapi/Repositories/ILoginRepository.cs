using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Repositories
{
    public interface ILoginRepository
    {
        Login FindByUsername(Login login);
        Login FindByUsernameAndPassword(Login login);
    }
}
