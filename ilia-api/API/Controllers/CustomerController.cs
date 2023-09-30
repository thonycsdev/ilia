using Microsoft.AspNetCore.Mvc;
using Services.DTOs.Request;
using Services.DTOs.Response;
using Services.Interfaces.Services;

namespace ilia_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerService _customerService;
        public CustomerController(ICustomerService customerService)
        {
            _customerService = customerService;
        }

        [HttpGet]
        public async Task<ActionResult> Get(int id)
        {
            var result = await _customerService.GetCustomerById(id);
            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult<CustomerResponse>> Create(CustomerRequest viewModel)
        {
            var result = await _customerService.CreateCustomer(viewModel);
            return Ok(result);
        }

        [HttpGet("/getAllCustomers")]
        public async Task<ActionResult<CustomerResponse>> GetAll()
        {
            var result = await _customerService.GetAllCustomers();
            return Ok(result);
        }

        [HttpDelete]
        public async Task<ActionResult<CustomerResponse>> DeleteOrder(int id)
        {
            await _customerService.DeleteCustomer(id);
            return Ok();
        }
        [HttpPut]
        public async Task<ActionResult<CustomerResponse>> GetAll(int id, CustomerRequest viewModel)
        {
            var result = await _customerService.UpdateCustomer(viewModel, id);
            return Ok(result);
        }
    }
}
