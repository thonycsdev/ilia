﻿using Microsoft.AspNetCore.Mvc;
using Services.DTOs.Request;
using Services.DTOs.Response;
using Services.Interfaces.Services;

namespace ilia_api.Controllers
{
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

        [HttpDelete]
        public async Task<ActionResult<OrderResponse>> DeleteOrder(int id)
        {
            await _orderService.DeleteOrder(id);
            return Ok();
        }
        [HttpPut]
        public async Task<ActionResult<OrderResponse>> GetAll(int id, OrderRequest viewModel)
        {
            var result = await _orderService.UpdateOrder(viewModel, id);
            return Ok(result);
        }
    }
}