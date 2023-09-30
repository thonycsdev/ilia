using System.Text.Json.Serialization;

namespace Services.Entities
{
    public class Customer : BaseEntity
    {
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public IEnumerable<Order> Orders { get; set; }

    }
}