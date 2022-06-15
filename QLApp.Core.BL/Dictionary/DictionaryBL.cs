using QLApp.Core.BL.Base;
using QLApp.Core.Entities.Data;
using QLApp.Core.Entities.Dictionary;
using QLApp.Core.Entities.Dictionary.Data;
using QLApp.Core.Entities.Enum;
using QLApp.Library.Collection;
using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace QLApp.Core.BL.Dictionary
{
    public class DictionaryBL : BaseBL
    {

        public DictionaryBL(AppCollection service) : base(service)
        {
        }


        public async Task<IList<User>> LoadUser()
        {
            return await _service.DataService.GetDataAsync<User>("Proc_Get_User", new object[] { });
        }
        public async Task<IList<thongke>> LoadThongKe()
        {
            return await _service.DataService.GetDataAsync<thongke>("Proc_Count_ThongKe", new object[] { });
        }

        public async Task<IList<User>> LoadALLTaiKhoan()
        {
            return await _service.DataService.GetDataAsync<User>("Proc_GetALL_TK", new object[] { });
        }
        public async Task<IList<people>> LoadNguoiDung()
        {
            return await _service.DataService.GetDataAsync<people>("Proc_Get_ND", new object[] { });
        }
        public async Task<IList<Pagezing>> CountMonAn()
        {
            return await _service.DataService.GetDataAsync<Pagezing>("Proc_Count_Monan", new object[] { });
        }
        public async Task<IList<monan>> LoadMonAn()
        {
            return await _service.DataService.GetDataAsync<monan>("Proc_GetALL_Food", new object[] { });
        }
        public async Task<IList<monan>> LoadALLMonAn()
        {

            return await _service.DataService.GetDataAsync<monan>("Proc_GetALL_MonAn", new object[] { });
        }
        public async Task<IList<monan>> LoadMonAnID(int id)
        {

            return await _service.DataService.GetDataAsync<monan>("Proc_Get_MonAn_ID", new object[] { id });
        }
        public async Task<IList<loaimonan>> LoadLoaiMonAn()
        {
            return await _service.DataService.GetDataAsync<loaimonan>("Proc_GetALL_TypeFood", new object[] { });
        }
        public async Task<IList<danhdau>> LoadCheckedDanhDau(object[] a)
        {
            return await _service.DataService.GetDataAsync<danhdau>("Proc_Get_Checked_DanhDau", a);
        }
        public async Task<IList<people>> LoadHoSo(string tentaikhoan)
        {
            return await _service.DataService.GetDataAsync<people>("Proc_Get_HoSo", new object[] { tentaikhoan });
        }

        public async Task<bool> SaveNguoiDung(SaveParam saveParam)
        {
            var obj = JsonSerializer.Deserialize<people>(saveParam.FormData.ToString());
            if (saveParam.Mode == Mode.Add)
            {
                return await _service.DataService.ExcuteSaveAsync("Proc_Insert_ND", obj);
            }
            else
            {
                return await _service.DataService.ExcuteSaveAsync("Proc_Update_ND", obj);
            }

        }

        public async Task<bool> SaveTaiKhoan(SaveParam saveParam)
        {
            var obj = JsonSerializer.Deserialize<User>(saveParam.FormData.ToString());
            if (saveParam.Mode == Mode.Add)
            {
                return await _service.DataService.ExcuteSaveAsync("Proc_Save_TK", obj);
            }
            else
            {
                return await _service.DataService.ExcuteSaveAsync("Proc_Update_TK", obj);
            }

        }

        public async Task<bool> DeleteND(int ids)
        {
            return await _service.DataService.ExcuteDeteteAsync("Proc_Delete_ND", new object[] { ids });
        }
        public async Task<bool> DeleteDanhDau(int idmonans, string tentaikhoans)
        {
            var ID = tentaikhoans.Split(",");
            var rs = false;

            foreach (var DishID in ID)
            {
                rs = await _service.DataService.ExcuteDeteteAsync("Proc_Delete_DanhDau", new object[] { idmonans, tentaikhoans });
            }

            return rs;

        }
        public async Task<bool> DeleteTaiKhoan(string tentaikhoans)
        {
            var ID = tentaikhoans.Split(",");
            var rs = false;

            foreach (var DishID in ID)
            {
                rs = await _service.DataService.ExcuteDeteteAsync("Proc_Delete_TK", new object[] { tentaikhoans });
            }

            return rs;

        }

        public async Task<IList<User>> GetTaiKhoanID(string tentaikhoan)
        {
            return await _service.DataService.GetDataAsync<User>("Proc_Get_TK_ID", new object[] { tentaikhoan });
        }


        public async Task<bool> DeleteMonAn(int idMonan)
        {

            return await _service.DataService.ExcuteDeteteAsync("Proc_Delete_MonAn", new object[] { idMonan });

        }
        public async Task<bool> InsertDanhDau(danhdau d)
        {
            return await _service.DataService.ExcuteSaveAsync("Proc_Insert_DanhDau", d);
        }
        public async Task<bool> SaveFood(SaveParam saveParam)
        {
            var obj = JsonSerializer.Deserialize<monan>(saveParam.FormData.ToString());
            if (saveParam.Mode == Mode.Add)
            {
                return await _service.DataService.ExcuteSaveAsync("Proc_Insert_Food", obj);
            }
            else
            {
                return await _service.DataService.ExcuteSaveAsync("Proc_Update_Food", obj);
            }

        }

        //public async Task<bool> InsertDanhDau(Dictionary<string, object> pr)
        //{

        //    return await _service.DataService.ExcuteSaveAsync("Proc_Insert_ND", pr);
        //}




    }
}
