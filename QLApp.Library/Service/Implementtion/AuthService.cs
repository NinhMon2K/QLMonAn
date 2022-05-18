using Microsoft.AspNetCore.Http;
using QLApp.Core.Entities.Dictionary;
using QLApp.Core.Entities.Enum;
using QLApp.Library.Service.Interface;
using System;
using System.Collections.Generic;
using System.Text;

namespace QLApp.Library.Service.Implementtion
{
    public class AuthService : IAuthService
    {
        private User _userInfo;
        public static IList<Dictionary<string, User>> users;
        public static User current;

        public AuthService()
        {

        }

        public User UserInfo
        {
            get
            {
                if (_userInfo == null)
                {
                    _userInfo = GetCurrentUser();
                }
                return _userInfo;
            }
        }

        public User GetCurrentUser()
        {
            return current;
        }

        public void SetUser(User user)
        {
            _userInfo = user;
            current = user;
        }


    }
}
