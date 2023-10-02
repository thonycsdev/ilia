using Microsoft.EntityFrameworkCore;
using Services.Entities;
using Services.Interfaces.Repositories;

namespace Infra.Data.Repositories
{
    public class OrderRepository : BaseRepository<Order>, IOrderRepository
    {
        public OrderRepository(DbContext context) : base(context)
        {
        }
    }
}