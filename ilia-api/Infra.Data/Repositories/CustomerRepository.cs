using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;
using Services.Entities;
using Services.Interfaces.Repositories;

namespace Infra.Data.Repositories
{
    public class CustomerRepository : BaseRepository<Customer>, ICustomerRepository
    {
        private readonly DbContext dbContext;
        public CustomerRepository(DbContext context) : base(context)
        {
            dbContext = context;
        }

        public async Task<Customer> GetAllSingleCustomerWithOrders(Expression<Func<Customer, bool>> expression)
        {
            var results = await dbContext.Set<Customer>().Where(expression).Include(x => x.Orders).FirstOrDefaultAsync();
            if (results is null)
                throw new Exception();
            return results;
        }

        async Task<IEnumerable<Customer>> ICustomerRepository.GetAllCustomersWithOrders()
        {
            var results = await dbContext.Set<Customer>().Include(x => x.Orders).ToListAsync();
            return results;
        }
    }
}