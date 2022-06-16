﻿using Microsoft.AspNetCore.Authorization;
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



        [HttpGet("LoadNguoiDung")]
        public async Task<ServiceResult> LoadNguoiDung()
        {
            var res = new ServiceResult();

            try
            {
                res.Data = await BLFactory.CreateAs<DictionaryBL>(_service).LoadNguoiDung();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }

        [HttpGet("LoadCauHoi")]
        public async Task<ServiceResult> LoadCauHoi()
        {
            var res = new ServiceResult();

            try
            {
                res.Data = await BLFactory.CreateAs<DictionaryBL>(_service).LoadCauHoi();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }

        [HttpGet("loadLoi")]
        public async Task<ServiceResult> loadLoi()
        {
            var res = new ServiceResult();

            try
            {
                res.Data = await BLFactory.CreateAs<DictionaryBL>(_service).loadLoi();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }

        [HttpGet("CountMonAn")]
        public async Task<ServiceResult> CountMonAn()
        {
            var res = new ServiceResult();

            try
            {
                res.Data = await BLFactory.CreateAs<DictionaryBL>(_service).CountMonAn();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }
        [HttpGet("LoadMonAn")]
        public async Task<ServiceResult> LoadMonAn()
        {
            var res = new ServiceResult();

            try
            {
                res.Data = await BLFactory.CreateAs<DictionaryBL>(_service).LoadMonAn();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }

        [HttpGet("LoadALLMonAn")]
        public async Task<ServiceResult> LoadALLMonAn()
        {
            var res = new ServiceResult();

            try
            {
                res.Data = await BLFactory.CreateAs<DictionaryBL>(_service).LoadALLMonAn();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }
        [HttpGet("LoadMonAnID")]
        public async Task<ServiceResult> LoadMonAnID(int id)
        {
            var res = new ServiceResult();

            try
            {
                res.Data = await BLFactory.CreateAs<DictionaryBL>(_service).LoadMonAnID(id);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }

        [HttpGet("LoadNguoiDungID")]
        public async Task<ServiceResult> LoadNguoiDungID(int id)
        {
            var res = new ServiceResult();

            try
            {
                res.Data = await BLFactory.CreateAs<DictionaryBL>(_service).LoadNguoiDungID(id);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }
        [HttpPost("LoadCheckedDanhDau")]
        public async Task<ServiceResult> LoadCheckedDanhDau([FromBody] Dictionary<string, object> pr)
        {
            var res = new ServiceResult();

            try
            {

                var a = new object[] { };
                foreach (var key in pr.Keys)
                {
                    a = a.Append(pr[key]).ToArray();
                }

                res.Data = await BLFactory.CreateAs<DictionaryBL>(_service).LoadCheckedDanhDau(a);



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
        [HttpGet("LoadThongKe")]
        public async Task<ServiceResult> LoadThongKe()
        {
            var res = new ServiceResult();

            try
            {
                res.Data = await BLFactory.CreateAs<DictionaryBL>(_service).LoadThongKe();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }
        [HttpGet("LoadItemMenu")]
        public async Task<ServiceResult> LoadItemMenu()
        {
            var res = new ServiceResult();

            try
            {
                res.Data = await BLFactory.CreateAs<DictionaryBL>(_service).LoadItemMenu();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }

        [HttpGet("GetTaiKhoanID")]
        public async Task<ServiceResult> GetTaiKhoanID(string tentaikhoan)
        {
            var res = new ServiceResult();

            try
            {
                res.Data = await BLFactory.CreateAs<DictionaryBL>(_service).GetTaiKhoanID(tentaikhoan);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }

        [HttpGet("LoadALLTaiKhoan")]
        public async Task<ServiceResult> LoadALLTaiKhoan()
        {
            var res = new ServiceResult();

            try
            {
                res.Data = await BLFactory.CreateAs<DictionaryBL>(_service).LoadALLTaiKhoan();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }

        [HttpPost("SaveNguoiDung")]
        public async Task<ServiceResult> SaveNguoiDung([FromBody] SaveParam saveParam)
        {
            var res = new ServiceResult();

            try
            {
                res.Data = await BLFactory.CreateAs<DictionaryBL>(_service).SaveNguoiDung(saveParam);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }

        [HttpPost("SaveTaiKhoan")]
        public async Task<ServiceResult> SaveTaiKhoan([FromBody] SaveParam saveParam)
        {
            var res = new ServiceResult();

            try
            {
                res.Data = await BLFactory.CreateAs<DictionaryBL>(_service).SaveTaiKhoan(saveParam);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }
        [HttpGet("LoadLoaiMonAn")]
        public async Task<ServiceResult> LoadLoaiMonAn()
        {
            var res = new ServiceResult();

            try
            {
                res.Data = await BLFactory.CreateAs<DictionaryBL>(_service).LoadLoaiMonAn();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }

        [HttpPost("InsertDanhDau")]
        public async Task<ServiceResult> InsertDanhDau([FromForm] danhdau d)
        {
            var res = new ServiceResult();

            try
            {
                res.Data = await BLFactory.CreateAs<DictionaryBL>(_service).InsertDanhDau(d);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }
        [HttpPost("SaveFood")]
        public async Task<ServiceResult> SaveFood([FromBody] SaveParam saveParam)
        {
            var res = new ServiceResult();

            try
            {
                res.Data = await BLFactory.CreateAs<DictionaryBL>(_service).SaveFood(saveParam);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }
        [HttpPost("SaveImage")]
        public async Task<ServiceResult> SaveImageDish(IFormFile file)
        {
            var res = new ServiceResult();

            try
            {
                var formData = HttpContext.Request.Form;

                if (file != null)
                {
                    var originalFileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    string fileName = Guid.NewGuid().ToString() + Path.GetExtension(originalFileName);
                    await _service.StorageService.SaveFileAsync(file.OpenReadStream(), fileName);
                    res.Data = "uploads/" + fileName;
                }

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }

        [HttpPost("SaveImageND")]
        public async Task<ServiceResult> SaveImageNDDish(IFormFile file)
        {
            var res = new ServiceResult();

            try
            {
                var formData = HttpContext.Request.Form;

                if (file != null)
                {
                    var originalFileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    string fileName = Guid.NewGuid().ToString() + Path.GetExtension(originalFileName);
                    await _service.StorageService.SaveFileAsync(file.OpenReadStream(), fileName);
                    res.Data = "/saveimage/imgpeople/" + fileName;
                }

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }

        [HttpGet("DeleteND")]
        public async Task<ServiceResult> DeleteND(int id)
        {
            var res = new ServiceResult();

            try
            {
                res.Data = await BLFactory.CreateAs<DictionaryBL>(_service).DeleteND(id);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }
        [HttpPost("DeleteDanhDau")]
        public async Task<ServiceResult> DeleteDanhDau(int idmonan, string tentaikhoan)
        {
            var res = new ServiceResult();

            try
            {
                res.Data = await BLFactory.CreateAs<DictionaryBL>(_service).DeleteDanhDau(idmonan, tentaikhoan);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }

        [HttpGet("DeleteTaiKhoan")]
        public async Task<ServiceResult> DeleteTaiKhoan(string tentaikhoan)
        {
            var res = new ServiceResult();

            try
            {
                res.Data = await BLFactory.CreateAs<DictionaryBL>(_service).DeleteTaiKhoan(tentaikhoan);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }

        [HttpGet("DeleteMonAn")]
        public async Task<ServiceResult> DeleteMonAn(int idMonan)
        {
            var res = new ServiceResult();

            try
            {
                res.Data = await BLFactory.CreateAs<DictionaryBL>(_service).DeleteMonAn(idMonan);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }







    }
}
