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

        /// <summary>
        /// Lấy dữ liệu tài khoản
        /// </summary>
        /// <returns></returns>
        public async Task<IList<User>> LoadUser()
        {
            return await _service.DataService.GetDataAsync<User>("Proc_Get_User", new object[] { });
        }
        public async Task<IList<User>> LoadALLTaiKhoan()
        {
            return await _service.DataService.GetDataAsync<User>("Proc_GetALL_TK", new object[] { });
        }
        public async Task<IList<people>> LoadNguoiDung()
        {
            return await _service.DataService.GetDataAsync<people>("Proc_Get_ND", new object[] { });
        }
        public async Task<IList<baoloi>> loadLoi()
        {
            return await _service.DataService.GetDataAsync<baoloi>("Pro_Get_Baoloi", new object[] { });
        }

        public async Task<bool> UpdateBaoLoi(int id)
        {
            return await _service.DataService.ExcuteDeteteAsync("Proc_update_BaoLoi", new object[] { id });
        }

        public async Task<bool> DeleteBaoLoi(int id)
        {
            return await _service.DataService.ExcuteDeteteAsync("Proc_Delete_BaoLoi", new object[] { id });
        }

        public async Task<IList<thongke>> LoadThongKe()
        {
            return await _service.DataService.GetDataAsync<thongke>("Proc_Count_ThongKe", new object[] { });
        }
        public async Task<IList<itemMenuBL>> LoadItemBaoLoi()
        {
            return await _service.DataService.GetDataAsync<itemMenuBL>("Proc_Count_Item_BL", new object[] { });
        }
        public async Task<IList<item>> LoadItemMenu()
        {
            return await _service.DataService.GetDataAsync<item>("Proc_Get_DemItemMenu", new object[] { });
        }
        public async Task<IList<thongke>> LoadThongBao()
        {
            return await _service.DataService.GetDataAsync<thongke>("Proc_Count_BaoLoi", new object[] { });
        }
     
        public async Task<IList<cauHoi>> LoadCauHoi()
        {
            return await _service.DataService.GetDataAsync<cauHoi>("Proc_Get_Cauhoi", new object[] { });
        }
        
        public async Task<IList<thongke>> CountMonAn()
        {
            return await _service.DataService.GetDataAsync<thongke>("Proc_Count_Monan", new object[] { });
        }
        public async Task<IList<thongke>> LoadCountDanhGia()
        {
            return await _service.DataService.GetDataAsync<thongke>("Proc_Get_DanhGiaMA", new object[] { });
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

        public async Task<IList<baoloi>> LoadTrangThaiBL(int status)
        {

            return await _service.DataService.GetDataAsync<baoloi>("Proc_Get_BL", new object[] { status });
        }

        public async Task<IList<people>> LoadNguoiDungID(int id)
        {

            return await _service.DataService.GetDataAsync<people>("Proc_Get_NguoiDung_ID", new object[] { id });
        }
        public async Task<IList<loaimonan>> LoadLoaiMonAnIDs(int id)
        {

            return await _service.DataService.GetDataAsync<loaimonan>("Proc_Get_LoaiMonAnID", new object[] { id });
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

        public async Task<bool> SaveTypeFood(SaveParam saveParam)
        {
            var obj = JsonSerializer.Deserialize<loaimonan>(saveParam.FormData.ToString());
            if (saveParam.Mode == Mode.Add)
            {
                return await _service.DataService.ExcuteSaveAsync("Proc_Insert_TypeFood", obj);
            }
            else
            {
                return await _service.DataService.ExcuteSaveAsync("Proc_Update_TypeFood", obj);
            }

        }

        public async Task<bool> SaveCauHoi(SaveParam saveParam)
        {
            var obj = JsonSerializer.Deserialize<cauHoi>(saveParam.FormData.ToString());
            if (saveParam.Mode == Mode.Add)
            {
                return await _service.DataService.ExcuteSaveAsync("Proc_Insert_CH", obj);
            }
            else
            {
                return await _service.DataService.ExcuteSaveAsync("Proc_Update_CH", obj);
            }

        }

        public async Task<bool> DeleteCauHoi(int id)
        {
            return await _service.DataService.ExcuteDeteteAsync("Proc_Delete_CH", new object[] { id });
        }

        public async Task<IList<cauHoi>> GetCauHoiID(int id)
        {
            return await _service.DataService.GetDataAsync<cauHoi>("Proc_Get_CH_ID", new object[] { id });
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
        public async Task<bool> DeleteTypeFood(int ids)
        {
            return await _service.DataService.ExcuteDeteteAsync("Proc_Delete_TypeFood", new object[] { ids });
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
        public async Task<IList<User>> CheckAcc(object[] a)
        {
            var us =  await _service.DataService.GetDataAsync<User>("Proc_Check_Acc", a );


            if (us != null)
            {
                return us;
            }
            else { 
            
            return null;
            }
        }
        public async Task<int> CheckAccount(object[] a)
        {
          
            var su = await _service.DataService.GetDataAsync<User>("Proc_Check_Account1", a);
            var kq = 0;
            if (su.Count != 0)
            {

                var us = await _service.DataService.GetDataAsync<User>("Proc_Check_Account", a);
                if (us.Count != 0)
                {
                    kq = 2;
                  
                }
                else
                {

                    kq = 1;
                }

            }
            else {
                kq = 0;
            }
            return kq;
           
        }

        public async Task<bool> DeleteMonAn(int idMonan)
        {

            return await _service.DataService.ExcuteDeteteAsync("Proc_Delete_MonAn", new object[] { idMonan });

        }
        public async Task<bool> InsertDanhDau(object[] a)
        {
            return await _service.DataService.ExcuteSaveAsync("Proc_Insert_DanhDau", a);
        }
        public async Task<IList<User>> GetUsers(object[] a)
        {
            return await _service.DataService.GetDataAsync<User>("Proc_Get_User", a);
        }
        public async Task<User> RegisterAcc(object[] a)
        {
            return await _service.DataService.GetObjectAsync<User>("Proc_Insert_RegisterAcc", a);
        }

        /// <summary>
        /// Thêm/Sửa thông tin món ăn
        /// </summary>
        /// <param name="saveParam"></param>
        /// <returns></returns>
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

        public async Task<IList<User>> GetHoSo(object[] a)
        {
            return await _service.DataService.GetDataAsync<User>("Proc_Get_TK_ID", a);
        }
        public async Task<bool> DeleteDanhDau(object[] a)
        {

            return await _service.DataService.ExcuteDeteteAsync("Proc_Delete_DanhDau", a);

        }
        public async Task<IList<monan>> GetFoodID(object[] a)
        {
            return await _service.DataService.GetDataAsync<monan>("Proc_Get_Food_ID", a);
        }
        public async Task<IList<monan>> GetMonAnHome()
        {
            return await _service.DataService.GetDataAsync<monan>("Proc_Get_MonAn_Home", new object[] { });
        }


        public async Task<IList<User>> UpdatePassWord(object[] a)
        {
            return await _service.DataService.GetDataAsync<User>("Proc_Update_PassWord", a);
        }
        public async Task<IList<User>> GetUserID(object[] a)
        {
            return await _service.DataService.GetDataAsync<User>("Proc_Get_TK_ID", a);
        }
        public async Task<IList<danhgiaMA>> GetRating(object[] a)
        {
            return await _service.DataService.GetDataAsync<danhgiaMA>("Proc_Get_Rating", a);
        }
        public async Task<IList<rate>> GetAllRate(object[] a)
        {
            return await _service.DataService.GetDataAsync<rate>("Proc_GetALL_Rate", a);
        }


        public async Task<bool> UpdateHoSo(object[] a)
        {
            return await _service.DataService.ExcuteSaveAsync("Proc_Update_HoSo", a);
        }

        //Ninh
        public async Task<IList<danhdau>> LoadALLDanhDau(object[] a)
        {
            return await _service.DataService.GetDataAsync<danhdau>("Proc_GetALL_DanhDau", a);
        }

        ///Manh
        public async Task<IList<review>> GetAllReview(object[] a)
        {
            return await _service.DataService.GetDataAsync<review>("Proc_Get_Review", a);
        }
        public async Task<IList<quests>> GetAllQuestID(object[] a)
        {
            return await _service.DataService.GetDataAsync<quests>("Proc_GetALL_Quest",a);
        }
        public async Task<bool> DeleteQuest(object[] a)
        {

            return await _service.DataService.ExcuteDeteteAsync("Proc_Delete_Quest", a);

        }
        public async Task<bool> DeleteReview(object[] a)
        {

            return await _service.DataService.ExcuteDeteteAsync("Proc_Delete_Review", a);

        }
        public async Task<bool> InsertQuest(object[] a)
        {
            return await _service.DataService.ExcuteSaveAsync("Proc_Insert_Quest", a);
        }
        public async Task<bool> InsertRepost(object[] a)
        {
            return await _service.DataService.ExcuteSaveAsync("Proc_Insert_Repost", a);
        }
        public async Task<bool> UpdateReview(object[] a)
        {
            return await _service.DataService.ExcuteSaveAsync("Proc_UpdateReview", a);
        }
        public async Task<bool> InsertReview(object[] a)
        {
            return await _service.DataService.ExcuteSaveAsync("Proc_Insert_Review", a);
        }
        public async Task<bool> InsertRating(object[] a)
        {
            return await _service.DataService.ExcuteSaveAsync("Proc_Insert_Rating", a);
        }
        public async Task<IList<loaimonan>> GetLoaiMonAnID(object[] a)
        {
            return await _service.DataService.GetDataAsync<loaimonan>("Proc_Get_CateID", a);
        }
        public async Task<IList<User>> InsertUserFacebook(object[] a)
        {
            return await _service.DataService.GetDataAsync<User>("Proc_Insert_UserFacebook", a);
        }
    }
}
