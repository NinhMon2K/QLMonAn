using System;
using System.Collections.Generic;
using System.Text;

namespace QLApp.Core.Entities.Dictionary.Data
{
   public class monan : loaimonan 
    {
        public int id { get; set; }

        public string tenmonan { get; set; }
        public string anh { get; set; }
        public string video { get; set; }
        public string mota { get; set; }
        public string cachlam { get; set; }
        public string noiban { get; set; }
        public Paginator Paginator { get; set; }
    }
}
