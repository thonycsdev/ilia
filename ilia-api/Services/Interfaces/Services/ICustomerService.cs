using Services.DTOs.Request;
using Services.DTOs.Response;


namespace Services.Interfaces.Services
{
    public interface ICustomerService
    {
        Task<CustomerResponse> GetCustomerById(int id);
        Task<CustomerResponse> CreateCustomer(CustomerRequest customer);
        Task<IEnumerable<CustomerResponse>> GetAllCustomers();
        Task DeleteCustomer(int id);
        Task<CustomerResponse> UpdateCustomer(CustomerRequest customerRequest, int id);
    }
}