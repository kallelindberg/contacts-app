using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using WebApi.Config;
using WebApi.Controllers.Communication;
using WebApi.Models;
using WebApi.Services;

namespace WebApi.Controllers
{
    [Route("api/authenticate")]
    [EnableCors("MyPolicy")]

    public class AuthenticationController : Controller
    {

        private readonly ILoginService _loginService;

        public AuthenticationController(ILoginService loginService)
        {
            _loginService = loginService;
        }

        [HttpPost]
        public IActionResult Authenticate([FromBody] Login login)
        {
            var user = _loginService.FindByUsernameAndPassword(login);
            if (user == null) return Unauthorized();
            var token = TokenBuilder.Build(user);
            return new JsonResult(new AuthResponse(user.Id.ToString(),token));
        }

    }
}
