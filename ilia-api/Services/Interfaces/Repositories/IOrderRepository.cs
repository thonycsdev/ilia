using System.Linq.Expressions;
using Services.Entities;

namespace Services.Interfaces.Repositories
{
    public interface IOrderRepository : IBaseRepository<Order>
    {
        Task<IEnumerable<Order>> GetOrdersWithProducts(Expression<Func<Order, bool>> expression);
    }
}