using System;
using System.Collections.Generic;
using System.Text;

namespace QLApp.Core.Entities.Dictionary.Data
{
   public class people : User
    {
        public int id { get; set; }
        public string tendaydu { get; set; }
        public string anhdaidien { get; set; }
        public DateTime ngaysinh { get; set; }
        public string email { get; set; }
        public int gioitinh { get; set; }
        public string sdt { get; set; }
    }
}
