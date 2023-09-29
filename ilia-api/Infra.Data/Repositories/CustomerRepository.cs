using Microsoft.EntityFrameworkCore;
using Services.Entities;
using Services.Interfaces.Repositories;

namespace Infra.Data.Repositories
{
    public class CustomerRepository : BaseRepository<Customer>, ICustomerRepository
    {
        public CustomerRepository(DbContext context) : base(context)
        {
        }
    }
}