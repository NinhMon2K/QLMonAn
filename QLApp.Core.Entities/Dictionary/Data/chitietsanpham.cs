using System;
using System.Collections.Generic;
using System.Text;

namespace QLApp.Core.Entities.Dictionary.Data
{
    public class chitietsanpham : sanpham
    {
        public string Id_ct_sp { get; set; }
        public string Image { get; set; }
        public string Firm { get; set; }
        public string Price { get; set; }
        public string Amount { get; set; }
        public string Size { get; set; }
        public string Weight { get; set; }
        public string Color { get; set; }
        public string Sound { get; set; }
        public string Ram { get; set; }
        public string Operating_system { get; set; }
        public string internal_Memory { get; set; }
        public string Memory_stick { get; set; }
        public string Camera { get; set; }
        public string Pin { get; set; }
        public string Insurance { get; set; }
        public string Connection { get; set; }
      
        public string Price_km { get; set; }
        public string Start_km { get; set; }
        public string End_km { get; set; }
        public string Description { get; set; }
    }
}
