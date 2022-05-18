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
            return await _service.DataService.GetDataAsync<User>("Proc_Get_User", new object[] {  });
        }
        public async Task<IList<khachhang>> LoadKhachHang()
        {
            return await _service.DataService.GetDataAsync<khachhang>("Proc_Get_KH", new object[] { });
        }
        public async Task<IList<ItemMenu>> LoadMenuDh()
        {
            return await _service.DataService.GetDataAsync<ItemMenu>("Proc_Get_CountDh", new object[] { });
        }
        public async Task<IList<chitietsanpham>> Load_DS_sanpham()
        {
            return await _service.DataService.GetDataAsync<chitietsanpham>("Proc_Get_SP", new object[] { });
        }
        public async Task<IList<chitietsanpham>> Load_DS_sanpham_info()
        {
            return await _service.DataService.GetDataAsync<chitietsanpham>("Proc_Get_SP_Info", new object[] { });
        }
        public async Task<IList<itemDanhGia>> Load_DanhGia(string Id_sp)
        {
            var ids = await _service.DataService.GetDataAsync<itemDanhGia>("Proc_Get_Count_DG", new object[] { Id_sp });
            if (ids != null && ids.Count > 0)
            {
                return ids;
            }
            else
            {
                return null;
            }

        }
        public async Task<IList<chitietsanpham>> Load_ALL_DS_sanpham()
        {
            return await _service.DataService.GetDataAsync<chitietsanpham>("Proc_GetALL_SP", new object[] { });
        }
        public async Task<IList<chitietsanpham>> Load_Loai_SP(string Id_sp)
        {
            var ids = await _service.DataService.GetDataAsync<chitietsanpham>("Proc_Get_Loai_SP", new object[] { Id_sp });
            if (ids != null && ids.Count > 0)
            {
                return ids;
            }
            else
            {
                return null;
            }

        }
        public async Task<IList<chitietsanpham>> Load_Swatch_Color_SP(string Id_sp, int Internal_Memorys)
        {
            var ids = await _service.DataService.GetDataAsync<chitietsanpham>("Proc_Get_Swatch_Color_SP", new object[] { Id_sp, Internal_Memorys });
            if (ids != null && ids.Count > 0)
            {
                return ids;
            }
            else
            {
                return null;
            }

        }
        public async Task<IList<chitietsanpham>> Load_Color_Image(string Id_sp)
        {
            var ids = await _service.DataService.GetDataAsync<chitietsanpham>("Proc_Get_Color_Image", new object[] { Id_sp });
            if (ids != null && ids.Count > 0)
            {
                return ids;
            }
            else
            {
                return null;
            }

        }
    }
}
