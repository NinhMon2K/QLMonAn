using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using QLApp.Core.API.Base;
using QLApp.Core.BL.Base;
using QLApp.Core.BL.Dictionary;
using QLApp.Core.Entities.Data;
using QLApp.Core.Entities.Dictionary;
using QLApp.Core.Entities.Dictionary.Data;
using QLApp.Library.Collection;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Text.Json;
using System.Threading.Tasks;

namespace QLApp.Core.API.Controllers.Dictionary
{
    [Route("api/[controller]")]
    [ApiController]
    public class DictionaryController : BaseController
    {
        public DictionaryController(AppCollection service) : base(service)
        {

        }
        
       

        [HttpGet("LoadKhachHang")]
        public async Task<ServiceResult> LoawKhachHang()
        {
            var res = new ServiceResult();

            try
            {
                res.Data = await BLFactory.CreateAs<DictionaryBL>(_service).LoadKhachHang();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }
        [HttpGet("LoadMenuDh")]
        public async Task<ServiceResult> LoadMenuDh()
        {
            var res = new ServiceResult();

            try
            {
                res.Data = await BLFactory.CreateAs<DictionaryBL>(_service).LoadMenuDh();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }

        [HttpGet("LoadUser")]
        public async Task<ServiceResult> LoadUser()
        {
            var res = new ServiceResult();

            try
            {
                res.Data = await BLFactory.CreateAs<DictionaryBL>(_service).LoadUser();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }


        [HttpGet("Load_DS_sanpham")]
        public async Task<ServiceResult> Load_DS_sanpham()
        {
            var res = new ServiceResult();

            try
            {
                res.Data = await BLFactory.CreateAs<DictionaryBL>(_service).Load_DS_sanpham();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }
        [HttpGet("Load_DS_sanpham_info")]
        public async Task<ServiceResult> Load_DS_sanpham_info()
        {
            var res = new ServiceResult();

            try
            {
                res.Data = await BLFactory.CreateAs<DictionaryBL>(_service).Load_DS_sanpham_info();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }
        [HttpGet("Load_DanhGia")]
        public async Task<ServiceResult> Load_DanhGia(string Id_sp)
        {
            var res = new ServiceResult();

            try
            {
                var dg = await BLFactory.CreateAs<DictionaryBL>(_service).Load_DanhGia(Id_sp);

                if (dg != null)
                {
                    res.Data = dg;
              
                }
                else
                {
                    res.Data = false;
                }

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }
        [HttpGet("Load_ALL_DS_sanpham")]
        public async Task<ServiceResult> Load_ALL_DS_sanpham()
        {
            var res = new ServiceResult();

            try
            {
                res.Data = await BLFactory.CreateAs<DictionaryBL>(_service).Load_ALL_DS_sanpham();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }
        [HttpGet("Load_Loai_SP")]
        public async Task<ServiceResult> Load_Loai_SP(string Id_sp)
        {
            var res = new ServiceResult();

            try
            {
                var dg = await BLFactory.CreateAs<DictionaryBL>(_service).Load_Loai_SP(Id_sp);

               
                    res.Data = dg;

              

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }
        [HttpGet("Load_Swatch_Color_SP")]
        public async Task<ServiceResult> Load_Swatch_Color_SP(string Id_SP,int Internal_Memorys)
        {
            var res = new ServiceResult();

            try
            {
                var dg = await BLFactory.CreateAs<DictionaryBL>(_service).Load_Swatch_Color_SP(Id_SP,Internal_Memorys);


                res.Data = dg;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }
        [HttpGet("Load_Color_Image")]
        public async Task<ServiceResult> Load_Color_Image(string Id_sp)
        {
            var res = new ServiceResult();

            try
            {
                var dg = await BLFactory.CreateAs<DictionaryBL>(_service).Load_Color_Image(Id_sp);


                res.Data = dg;



            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }


    }
}
