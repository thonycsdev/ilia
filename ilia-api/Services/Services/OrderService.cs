using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.EntityFrameworkCore.Query;
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
        private readonly IProductRepository _productRepository;
        private readonly IMapper _mapper;
        public OrderService(IOrderRepository orderRepository, IMapper mapper, IProductRepository productRepository)
        {
            _mapper = mapper;
            _orderRepository = orderRepository;
            _productRepository = productRepository;
        }
        public async Task<OrderResponse> CreateOrder(OrderRequest order)
        {
            if (order.CustomerId <= 0)
                throw new Exception();
            var productsEntity = new List<Product>();
            foreach (var item in order.Products)
            {
                var result = await _productRepository.GetSingleOrDefault(x => x.Id == item.Id);
                if (result is not null)
                {
                    productsEntity.Add(result);
                    continue;
                }
                var newEntity = await _productRepository.Create(_mapper.Map<Product>(item));
                productsEntity.Add(newEntity);

            }
            var entity = new Order();
            entity.Products = productsEntity;
            entity.CustomerId = order.CustomerId;
            entity.CreatedAt = DateTime.Now;
            await _orderRepository.Create(entity);
            return _mapper.Map<OrderResponse>(entity);
        }

        public async Task DeleteOrder(int id)
        {
            var entityToDelete = await _orderRepository.GetSingleOrDefault(x => x.Id == id);

            await _orderRepository.Delete(entityToDelete);
            return;
        }

        public async Task<IEnumerable<OrderResponse>> GetAllOrders()
        {
            var results = await _orderRepository.GetOrdersWithProducts(x => x.Id != null);
            return _mapper.Map<List<OrderResponse>>(results);
        }

        public async Task<OrderResponse> GetOrderById(int id)
        {
            var results = await _orderRepository.GetSingleOrDefault(x => x.Id == id);
            return _mapper.Map<OrderResponse>(results);
        }

        public async Task<IEnumerable<OrderResponse>> GetOrdersByCostumerId(int costumerId)
        {
            var results = await _orderRepository.GetOrdersWithProducts(x => x.CustomerId == costumerId);
            return _mapper.Map<List<OrderResponse>>(results);
        }

        public async Task<OrderResponse> UpdateOrder(OrderRequest orderRequest, int id)
        {
            var entityToUpdate = await _orderRepository.GetSingleOrDefault(x => x.Id == id);
            entityToUpdate.CustomerId = orderRequest.CustomerId;
            await _orderRepository.Update(entityToUpdate);

            return _mapper.Map<OrderResponse>(entityToUpdate);
        }
    }
}