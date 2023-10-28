using Microsoft.AspNetCore.Mvc;
using Services.DTOs.Request;
using Services.DTOs.Response;
using Services.Interfaces.Services;

namespace ilia_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _orderService;
        public OrderController(IOrderService orderService)
        {
            _orderService = orderService;
        }
        [HttpGet]
        public async Task<ActionResult<OrderResponse>> Get(int id)
        {
            var result = await _orderService.GetOrderById(id);
            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult<OrderResponse>> CreateOrder(OrderRequest viewModel)
        {
            var result = await _orderService.CreateOrder(viewModel);
            return Ok(result);
        }

        [HttpGet("/getAllOrders")]
        public async Task<ActionResult<OrderResponse>> GetAll()
        {
            var result = await _orderService.GetAllOrders();
            return Ok(result);
        }

        [HttpGet("/byCostumer")]
        public async Task<ActionResult<OrderResponse>> GetAllByCostumers(int costumerId, OrderRequest viewModel)
        {
            var result = await _orderService.GetOrdersByCostumerId(costumerId);
            return Ok(result);
        }

        [HttpDelete]
        public async Task<ActionResult<OrderResponse>> DeleteOrder(int orderId)
        {
            await _orderService.DeleteOrder(orderId);
            return Ok();
        }
        // [HttpPut]
        // public async Task<ActionResult<OrderResponse>> UpdateOrder(int id, OrderRequest viewModel)
        // {
        //     var result = await _orderService.UpdateOrder(viewModel, id);
        //     return Ok(result);
        // }
    }
}
