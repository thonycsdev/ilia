using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Services.DTOs.Request;
using Services.DTOs.Response;
using Services.Entities;
using Services.Interfaces.Repositories;
using Services.Interfaces.Services;

namespace Services.Services
{
    public class OrderService : IOrderService
    {
        private readonly IOrderRepository _orderRepository;
        private readonly IMapper _mapper;
        public OrderService(IOrderRepository orderRepository, IMapper mapper)
        {
            _mapper = mapper;
            _orderRepository = orderRepository;
        }
        public async Task<OrderResponse> CreateOrder(OrderRequest order)
        {
            if (order.CustomerId <= 0)
            {
                throw new Exception();
            }
            var entity = _mapper.Map<Order>(order);
            entity.CreatedAt = DateTime.Now;
            var result = await _orderRepository.Create(entity);
            return _mapper.Map<OrderResponse>(result);
        }

        public Task<OrderResponse> GetOrderById(int id)
        {
            throw new NotImplementedException();
        }
    }
}