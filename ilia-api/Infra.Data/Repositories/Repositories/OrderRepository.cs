using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using Services.Entities;
using Services.Interfaces.Repositories;

namespace Infra.Data.Repositories
{
    public class OrderRepository : BaseRepository<Order>, IOrderRepository
    {
        private readonly DbContext _dbContext;
        public OrderRepository(DbContext context) : base(context)
        {
            _dbContext = context;
        }

        public async Task<IEnumerable<Order>> GetOrdersWithProducts(Expression<Func<Order, bool>> expression)
        {
            var result = await _dbContext.Set<Order>().Include(x => x.Products).Include(x => x.Customer).Where(expression).ToListAsync();
            return result;
        }
    }
}