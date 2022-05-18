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
        
    }
}
