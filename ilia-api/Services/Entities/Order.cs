namespace Services.Entities
{
    public class Order : BaseEntity
    {
        public Customer Customer { get; set; }
        public int CustomerId { get; set; }
        public List<Product> Products { get; set; }
    }
}