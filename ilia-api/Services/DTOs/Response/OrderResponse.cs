using Services.Entities;

namespace Services.DTOs.Response
{
    public class OrderResponse : BaseResponse
    {
        public CustomerResponse Customer { get; set; }
        public int CustomerId { get; set; }
        public List<Product> Products { get; set; }
    }
}
