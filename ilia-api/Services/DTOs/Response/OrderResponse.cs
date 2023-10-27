using Services.Entities;

namespace Services.DTOs.Response
{
    public class OrderResponse : BaseResponse
    {
        public int CustomerId { get; set; }
        public List<Product> Products { get; set; }
    }
}
