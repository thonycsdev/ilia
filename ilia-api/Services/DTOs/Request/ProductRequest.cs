using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Services.DTOs.Request
{
    public class ProductRequest
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public float Price { get; set; }
        public string Image { get; set; }
        public string Description { get; set; }
        public float Rating { get; set; }
    }
}