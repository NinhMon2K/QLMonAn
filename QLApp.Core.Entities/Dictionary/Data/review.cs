using System;
using System.Collections.Generic;
using System.Text;

namespace QLApp.Core.Entities.Dictionary.Data
{
    public class review : people
    {
        public int keyRV { get; set; }
        public string account { get; set; }
        public int keyFood { get; set; }
        public string content { get; set; }
        public string timeRV { get; set; }
        public string img { get; set; }
        public string tentaikhoan { get; set; }
        public string matkhau { get; set; }
        public int idnguoidung { get; set; }
        public int quyen { get; set; }
       
    }
}
