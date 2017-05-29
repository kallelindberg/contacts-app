﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Controllers.Communication
{
    public class AuthResponse
    {
        public string UserId { get; set; }
        public string Token { get; set; }

        public AuthResponse(string userId, string token)
        {
            UserId = userId;
            Token = token;
        }
    }
}
