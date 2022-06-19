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

        //START THÔNG TIN NGƯỜI DÙNG

        /// <summary>
        ///API Load thông tin người dùng
        /// </summary>
        /// <returns></returns>

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

        /// <summary>
        /// Load thông tin người dùng theo ID
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
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

        /// <summary>
        /// Thêm/Sửa thông tin người dùng
        /// </summary>
        /// <param name="saveParam"></param>
        /// <returns></returns>
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

        /// <summary>
        /// Xóa thông tin người dùng
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
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

        //----------END THÔNG TIN NGƯỜI DÙNG----

        //----------START CÂU HỎI--------------

        /// <summary>
        /// Lấy dữ liệu câu hỏi
        /// </summary>
        /// <returns></returns>
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
        /// <summary>
        /// thêm/sửa câu hỏi
        /// </summary>
        /// <param name="saveParam"></param>
        /// <returns></returns>
        [HttpPost("SaveCauHoi")]
        public async Task<ServiceResult> SaveCauHoi([FromBody] SaveParam saveParam)
        {
            var res = new ServiceResult();

            try
            {
                res.Data = await BLFactory.CreateAs<DictionaryBL>(_service).SaveCauHoi(saveParam);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }
        /// <summary>
        /// xóa câu hỏi
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("DeleteCauHoi")]
        public async Task<ServiceResult> DeleteCauHoi(int id)
        {
            var res = new ServiceResult();

            try
            {
                res.Data = await BLFactory.CreateAs<DictionaryBL>(_service).DeleteCauHoi(id);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }


        [HttpPost("DeleteImg")]
        public async Task<ServiceResult> DeleteImg(string name)
        {
            var res = new ServiceResult();

            try
            {
                if (!string.IsNullOrEmpty(name.ToString()))
                {
                    name = name.ToString().Split("/").LastOrDefault();
                    await _service.StorageService.DeleteFileAsync(name);
                }

                res.Data = true;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }
        /// <summary>
        /// lấy dữ liệu theo id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("GetCauHoiID")]
        public async Task<ServiceResult> GetCauHoiID(int id)
        {
            var res = new ServiceResult();

            try
            {
                res.Data = await BLFactory.CreateAs<DictionaryBL>(_service).GetCauHoiID(id);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }

        //----------END CÂU HỎI----------

        //----------START BÁO LỖI--------------
        /// <summary>
        /// Lấy dữ liệu báo lỗi
        /// </summary>
        /// <returns></returns>
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




        [HttpGet("UpdateBaoLoi")]
        public async Task<ServiceResult> UpdateBaoLoi(int id)
        {
            var res = new ServiceResult();

            try
            {
                res.Data = await BLFactory.CreateAs<DictionaryBL>(_service).UpdateBaoLoi(id);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }

        [HttpGet("DeleteBaoLoi")]
        public async Task<ServiceResult> DeleteBaoLoi(int id)
        {
            var res = new ServiceResult();

            try
            {
                res.Data = await BLFactory.CreateAs<DictionaryBL>(_service).DeleteBaoLoi(id);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }

        /// <summary>
        /// Lấy dữ liệu cho item báo lỗi
        /// </summary>
        /// <returns></returns>
        [HttpGet("LoadItemBaoLoi")]
        public async Task<ServiceResult> LoadItemBaoLoi()
        {
            var res = new ServiceResult();

            try
            {
                res.Data = await BLFactory.CreateAs<DictionaryBL>(_service).LoadItemBaoLoi();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }



        [HttpGet("LoadTrangThaiBL")]
        public async Task<ServiceResult> LoadTrangThaiBL(int status)
        {
            var res = new ServiceResult();

            try
            {
                res.Data = await BLFactory.CreateAs<DictionaryBL>(_service).LoadTrangThaiBL(status);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }
        //----------END BÁO LỖI----------

        //----------START MÓN ĂN--------------

        /// <summary>
        /// Đếm tổng số món ăn
        /// </summary>
        /// <returns></returns>
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

        /// <summary>
        /// Lấy dữ liệu món ăn
        /// </summary>
        /// <returns></returns>
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

        /// <summary>
        /// Lấy dữ liệu toàn bộ món ăn và chi tiết món ăn
        /// </summary>
        /// <returns></returns>
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

        /// <summary>
        /// Lấy dữ liệu món ăn theo ID món ăn
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
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

        /// <summary>
        /// Lấy tên loại món ăn
        /// </summary>
        /// <returns></returns>
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

        /// <summary>
        /// Thêm/Sửa thông tin món ăn
        /// </summary>
        /// <param name="saveParam"></param>
        /// <returns></returns>
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

        /// <summary>
        /// Xóa món ăn theo ID
        /// </summary>
        /// <param name="idMonan"></param>
        /// <returns></returns>
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
        //----------END MÓN ĂN----------


        //----------START TÀI KHOẢN --------------
        /// <summary>
        /// Lấy dữ liệu tài khoản
        /// </summary>
        /// <returns></returns>
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

        /// <summary>
        /// Lấy tài khoản theo tên tài khoản
        /// </summary>
        /// <param name="tentaikhoan"></param>
        /// <returns></returns>
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

        /// <summary>
        /// Lấy dữ liệu toàn bộ của tài khoản
        /// </summary>
        /// <returns></returns>
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

        /// <summary>
        /// Thêm/Sửa thông tin tài khoản
        /// </summary>
        /// <param name="saveParam"></param>
        /// <returns></returns>
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

        
        /// <summary>
        /// Xóa tài khoản theo tên tài khoản
        /// </summary>
        /// <param name="tentaikhoan"></param>
        /// <returns></returns>
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

        //----------END TÀI KHOẢN ----------


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



        //----------START THÔNG KÊ --------------
        /// <summary>
        /// Lấy dữ liệu thống kê : tên món ăn và tổng số tim của món ăn được nhiều người thả tim
        /// </summary>
        /// <returns></returns>
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


        [HttpGet("LoadCountDanhGia")]
        public async Task<ServiceResult> LoadCountDanhGiav()
        {
            var res = new ServiceResult();

            try
            {
                res.Data = await BLFactory.CreateAs<DictionaryBL>(_service).LoadCountDanhGia();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }

        //----------END THÔNG KÊ ----------


        /// <summary>
        /// Lấy dữ liệu cho item menu
        /// </summary>
        /// <returns></returns>
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

        /// <summary>
        /// Lấy tổng số báo lỗi khi chưa xử lý
        /// </summary>
        /// <returns></returns>
        [HttpGet("LoadThongBao")]
        public async Task<ServiceResult> LoadThongBao()
        {
            var res = new ServiceResult();

            try
            {
                res.Data = await BLFactory.CreateAs<DictionaryBL>(_service).LoadThongBao();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }

        //----------START ĐÁNH DẤU/THẢ TIM --------------

        /// <summary>
        /// Xóa dữ liệu đánh dấu theo id món ăn và tên tài khoản
        /// </summary>
        /// <param name="idmonan"></param>
        /// <param name="tentaikhoan"></param>
        /// <returns></returns>
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

        /// <summary>
        /// Thêm mới đánh dấu/thả tim
        /// </summary>
        /// <param name="d"></param>
        /// <returns></returns>

        [HttpPost("InsertDanhDau")]
        public async Task<ServiceResult> InsertDanhDau([FromBody] Dictionary<string, object> pr)
        {
            var res = new ServiceResult();

            try
            {

                var a = new object[] { };
                foreach (var key in pr.Keys)
                {
                    a = a.Append(pr[key]).ToArray();
                }

                res.Data = await BLFactory.CreateAs<DictionaryBL>(_service).InsertDanhDau(a);



            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }
        //----------END ĐÁNH DẤU/THẢ TIM ----------v







        /// <summary>
        /// Lưu ảnh lên server
        /// </summary>
        /// <param name="file"></param>
        /// <returns></returns>
        [HttpPost("SaveImage")]
        public async Task<ServiceResult> SaveImageDish(IFormFile file)
        {
            var res = new ServiceResult();

            try
            {
                var formData = HttpContext.Request.Form;
                var oldFile = formData["oldFile"];
                if (!string.IsNullOrEmpty(oldFile.ToString()))
                {
                    oldFile = oldFile.ToString().Split("/").LastOrDefault();
                    await _service.StorageService.DeleteFileAsync(oldFile);
                }

                if (file != null)
                {
                    var originalFileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    string fileName = Guid.NewGuid().ToString() + Path.GetExtension(originalFileName);
                    await _service.StorageService.SaveFileAsync(file.OpenReadStream(), fileName);
                    res.Data = "/saveimage/" + fileName;
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


        //----------------API ANDROID ----------------

        // API Bảo
        [HttpPost("CheckAcc")]
        public async Task<ServiceResult> CheckAcc([FromBody] Dictionary<string, object> pr)
        {
            var res = new ServiceResult();

            try
            {

                var a = new object[] { };
                foreach (var key in pr.Keys)
                {
                    a = a.Append(pr[key]).ToArray();
                }

                res.Data = await BLFactory.CreateAs<DictionaryBL>(_service).CheckAcc(a);



            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return res;
        }


    }
}
