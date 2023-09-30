using AutoFixture;
using ilia_api.Controllers;
using Microsoft.AspNetCore.Mvc;
using Moq;
using Services.DTOs.Response;
using Services.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace Testes
{
    public class OrderControllerTest
    {
        public Fixture fixture = new Fixture();
        public Mock<IOrderService> moqService;
        public OrderControllerTest()
        {
            moqService = fixture.Create<Mock<IOrderService>>();

            fixture.Behaviors.OfType<ThrowingRecursionBehavior>().ToList()
                .ForEach(b => fixture.Behaviors.Remove(b));
            fixture.Behaviors.Add(new OmitOnRecursionBehavior());
        }

        [Fact]
        public async void Should_Return_200_When_Get()
        {

            var controller = new OrderController(moqService.Object);

            var result = await controller.Get(It.IsAny<int>());
            var objectResult = result.Result as OkObjectResult;
            Assert.NotNull(objectResult);
            Assert.Equal(200, objectResult.StatusCode);

        }

        [Fact]
        public async void Should_Return_A_Response_Not_Null()
        {

            var controller = new OrderController(moqService.Object);
            var response = fixture.Create<OrderResponse>();
            moqService.Setup(x => x.GetOrderById(It.IsAny<int>())).ReturnsAsync(response);

            var result = await controller.Get(It.IsAny<int>());
            var objectResult = result.Result as OkObjectResult;
            Assert.NotNull(objectResult);
            Assert.NotNull(objectResult.Value as OrderResponse);

        }


    }
}
