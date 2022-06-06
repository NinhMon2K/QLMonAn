using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QLApp.Core.UI.Controllers.Dictionary
{
    public class DictionaryController : Controller
    {
        
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Home()
        {
            return View("_Home");
        }
       

        public IActionResult khachhang()
        {
            return View("khachhang");
        }
        public IActionResult monan()
        {
            return View("monan");
        }
        public IActionResult taikhoan()
        {
            return View("taikhoan");
        }




    }
}
