using AutoFixture;
using ilia_api.Controllers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Moq;
using Services.DTOs.Request;
using Services.DTOs.Response;
using Services.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Testes
{
    public class CustomerControllerTest
    {
        public Fixture fixture = new Fixture();
        public Mock<ICustomerService> serviceMock;
        public CustomerControllerTest()
        {
            serviceMock = fixture.Create<Mock<ICustomerService>>();
            fixture.Behaviors.OfType<ThrowingRecursionBehavior>().ToList()
               .ForEach(b => fixture.Behaviors.Remove(b));
            fixture.Behaviors.Add(new OmitOnRecursionBehavior());
        }

        [Fact]
        public async void Should_Return_200_Get()
        {
            serviceMock.Setup(x => x.GetCustomerById(It.IsAny<int>())).ReturnsAsync(fixture.Create<CustomerResponse>());
            var controller = new CustomerController(serviceMock.Object);
            var result = await controller.Get(It.IsAny<int>()) as OkObjectResult;
            Assert.NotNull(result);
            var customer = result.Value as CustomerResponse;

            Assert.NotNull(customer);
            Assert.Equal(200, result.StatusCode);
        }

        [Fact]
        public async void Should_Return_200_Post()
        {
            var request = fixture.Create<CustomerRequest>();
            var response = fixture.Create<CustomerResponse>();

            serviceMock.Setup(x => x.CreateCustomer(request)).ReturnsAsync(response);

            var controller = new CustomerController(serviceMock.Object);
            var result = await controller.Create(request);

            var objectResult = result.Result as OkObjectResult;
            Assert.NotNull(objectResult);
            Assert.Equal(StatusCodes.Status200OK, objectResult.StatusCode);

            var customerResponse = objectResult.Value as CustomerResponse;
            Assert.NotNull(customerResponse);
        }
    }
}
