using AutoMapper;
using Services.DTOs.Request;
using Services.DTOs.Response;
using Services.Entities;
using Services.Helpers.Extensions;
using Services.Interfaces.Repositories;
using Services.Interfaces.Services;

namespace Services.Services
{
    public class CustomerServices : ICustomerService
    {
        private readonly ICustomerRepository _customerRepository;
        private readonly IOrderService _orderService;
        private readonly IMapper _mapper;
        public CustomerServices(ICustomerRepository customerRepository, IMapper mapper, IOrderService orderService)
        {
            _customerRepository = customerRepository;
            _orderService = orderService;

            _mapper = mapper;
        }

        public async Task<OrderResponse> AddOrderToCustomer(OrderRequest orderRequest)
        {
            var order = await _orderService.CreateOrder(orderRequest);
            return _mapper.Map<OrderResponse>(order);
        }

        public async Task<CustomerResponse> CreateCustomer(CustomerRequest customer)
        {
            customer.CheckIsCustomerEmailAndNameAreWhiteSpacesOrNull();
            customer.CheckIsCustomerEmailAndNameAreEmpty();


            var entity = _mapper.Map<Customer>(customer);
            entity.CreatedAt = DateTime.Now;
            await _customerRepository.Create(entity);
            return _mapper.Map<CustomerResponse>(entity);
        }

        public async Task DeleteCustomer(int id)
        {
            var entityToDelete = await _customerRepository.GetSingleOrDefault(x => x.Id == id);

            await _customerRepository.Delete(entityToDelete);
            return;
        }

        public async Task<IEnumerable<CustomerResponse>> GetAllCustomers()
        {
            var results = await _customerRepository.GetAll(null);
            return _mapper.Map<List<CustomerResponse>>(results);
        }

        public async Task<CustomerResponse> GetCustomerById(int id)
        {
            var result = await _customerRepository.GetSingleOrDefault(x => x.Id == id);
            return _mapper.Map<CustomerResponse>(result);
        }

        public async Task<CustomerResponse> UpdateCustomer(CustomerRequest customerRequest, int id)
        {
            var entityToUpdate = await _customerRepository.GetSingleOrDefault(x => x.Id == id);
            entityToUpdate.Email = customerRequest.Email;
            entityToUpdate.Name = customerRequest.Name;
            await _customerRepository.Update(entityToUpdate);

            return _mapper.Map<CustomerResponse>(entityToUpdate);
        }
    }
}