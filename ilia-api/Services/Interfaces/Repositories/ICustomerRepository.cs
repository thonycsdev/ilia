using System.Linq.Expressions;
using Services.Entities;

namespace Services.Interfaces.Repositories
{
    public interface ICustomerRepository : IBaseRepository<Customer>
    {
        Task<IEnumerable<Customer>> GetAllCustomersWithOrders();
        Task<Customer> GetAllSingleCustomerWithOrders(Expression<Func<Customer, bool>> expression);
    }
}