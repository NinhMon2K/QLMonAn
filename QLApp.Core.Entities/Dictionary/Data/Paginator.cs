using System;
using System.Collections.Generic;
using System.Text;

namespace QLApp.Core.Entities.Dictionary.Data
{
    public class Paginator
    {
        public int perPage { get; set; }
        public int currentPage { get; set; }
        public Paginator () {
            this.perPage = 3;
            this.currentPage = 1;
        }
        public Paginator(int perPage,int currentPage)
        {
            this.perPage = perPage > 5 ? 5 : perPage ;
            this.currentPage = currentPage < 1 ? 1 : currentPage;
        }

    }
}
