using Services.DTOs.Request;
using Services.DTOs.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Services.Interfaces.Services
{
    public interface ICustomerService
    {
        Task<CustomerResponse> GetCustomerById(int id);
        Task<CustomerResponse> CreateCustomer(CustomerRequest customer);
    }
}