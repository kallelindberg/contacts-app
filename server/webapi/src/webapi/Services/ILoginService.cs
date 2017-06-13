﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Services
{
    public interface ILoginService
    {
        //bool Login(Login login);
        Login FindByUsernameAndPassword(Login login);
        Login FindByUsername(string userName);
    }
}
