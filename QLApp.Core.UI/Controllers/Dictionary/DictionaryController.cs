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
            return View("Home");
        }
        public IActionResult TrangChu()
        {
            return View("TrangChu");
        }

        public IActionResult khachhang()
        {
            return View("khachhang");
        }
        public IActionResult donhang()
        {
            return View("donhang");
        }
        public IActionResult TrangChuInfo()
        {
            return View("TrangChuInfo");
        }


        public IActionResult RR()
        {
            return View("khachhang");
        }

    }
}
