using Services.DTOs.Response;
using Services.Interfaces.Repositories;
using Services.Interfaces.Services;

namespace Services.Services
{
    public class CustomerServices : ICustomerService
    {
        private readonly ICustomerRepository _customerRepository;
        public CustomerServices(ICustomerRepository customerRepository)
        {
            _customerRepository = customerRepository;
        }
        public async Task<CustomerResponse> GetCustomerById(int id)
        {
            var result = await _customerRepository.GetSingleOrDefault(x => x.Id == id);
            return new CustomerResponse() { Id = result.Id, CreatedAt = result.CreatedAt, Email = result.Email, Name = result.Name };
        }
    }
}