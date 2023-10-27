using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Services.Entities;

namespace Services.DTOs.Request
{
    public class OrderRequest
    {
        public int CustomerId { get; set; }
        public List<Product> ProductsIds { get; set; }
    }
}
