using System;
using System.Collections.Generic;
using System.Text;

namespace QLApp.Core.Entities.Dictionary.Data
{
   public class chitietdonhang : dondathang
    {
        public string Id_ct_hd { get; set; }
       
        public string Id_sp { get; set; }
        public int Number_amount { get; set; }
        public float unit_price { get; set; }

    }
}
