using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Services.DTOs.Request;
using Services.DTOs.Response;

namespace Services.Interfaces.Services
{
    public interface IOrderService
    {
        Task<OrderResponse> GetOrderById(int id);
        Task<OrderResponse> CreateOrder(OrderRequest customer);
        Task<IEnumerable<OrderResponse>> GetAllOrders();
        Task<IEnumerable<OrderResponse>> GetOrdersByCostumerId(int costumerId);
        Task DeleteOrder(int id);
        Task<OrderResponse> UpdateOrder(OrderRequest orderRequest, int id);
    }
}