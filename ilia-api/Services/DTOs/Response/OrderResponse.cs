namespace Services.DTOs.Response
{
    public class OrderResponse : BaseResponse
    {
        public CustomerResponse Customer { get; set; }
    }
}
