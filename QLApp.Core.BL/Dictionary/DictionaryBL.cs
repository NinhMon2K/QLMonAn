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
        public async Task<IList<people>> LoadNguoiDung()
        {
            return await _service.DataService.GetDataAsync<people>("Proc_Get_ND", new object[] { });
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
        public async Task<bool> DeleteND(string ids)
        {
            var ID = ids.Split(",");
            var rs = false;

            foreach (var DishID in ID)
            {
                rs = await _service.DataService.ExcuteDeteteAsync("Proc_Delete_ND", new object[] { ids });
            }

            return rs;

        }

    }
}
