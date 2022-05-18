using System;
using System.Collections.Generic;
using System.Text;

namespace QLApp.Core.Entities.Dictionary.Data
{
  public class dondathang 
    {
        public string Id_hd { get; set; }
        public string Id_kh { get; set; }
        public string Id_tinhtrang { get; set; }
        public string Id_nvgh { get; set; }
        public DateTime date_foundeds { get; set; }
        public float Sum_price { get; set; }
        public string adress_receive { get; set; }
        public string note { get; set; }
        public DateTime date_successful { get; set; }
        public DateTime date_delivery { get; set; }

        public chitietdonhang chitietdonhang { get; set; }
        public nhanviengh nhanviengh { get;set; }

    }
}
