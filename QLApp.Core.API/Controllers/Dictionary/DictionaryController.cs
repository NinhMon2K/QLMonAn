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
        [HttpGet("DeleteND")]
        public async Task<ServiceResult> DeleteND(string id)
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








    }
}
