using System;
using System.Collections.Generic;
using System.Text;

namespace QLApp.Core.Entities.Dictionary
{
    public class User
    {
        public String UserID { get; set; } = Guid.NewGuid().ToString();
        public int UserCode { get; set; }
        public String UserName { get; set; }
        public String Password { get; set; }
        public String Email { get; set; }
        public String PhoneNumber { get; set; }
        public String FullName { get; set; }
        public String Image { get; set; }
        public String CMT { get; set; }
        public DateTime Birthday { get; set; }
      
    }
}
