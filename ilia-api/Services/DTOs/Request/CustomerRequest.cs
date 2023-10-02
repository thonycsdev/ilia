namespace Services.DTOs.Request
{
    public class CustomerRequest
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public DateTime? CreatedAt { get; set; }
        public IEnumerable<OrderRequest>? Orders { get; set; }
    }
}
