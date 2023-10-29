namespace Services.Entities
{
    public class Product : BaseEntity
    {
        public string Title { get; set; }
        public float Price { get; set; }
        public string Image { get; set; }
        public string Description { get; set; }
        public float Rating { get; set; }
        public List<Order> Orders { get; set; }
    }
}