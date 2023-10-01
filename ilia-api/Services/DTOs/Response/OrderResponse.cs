namespace Services.DTOs.Response
{
    public class OrderResponse : BaseResponse
    {
        public int CustomerId { get; set; }
        public int ProductId { get; set; }
    }
}
