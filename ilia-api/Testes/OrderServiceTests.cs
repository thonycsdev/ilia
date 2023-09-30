using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoFixture;
using AutoFixture.AutoMoq;
using AutoMapper;
using Moq;
using Services.AutoMapper;
using Services.DTOs.Request;
using Services.Entities;
using Services.Interfaces.Repositories;
using Services.Services;
using Xunit;

namespace Testes
{
    public class OrderServiceTests
    {
        public Mock<IOrderRepository> mockRepository;
        public IMapper mapper;
        public Fixture fixture = new Fixture();
        public OrderServiceTests()
        {
            fixture = new Fixture();
            fixture.Customize(new AutoMoqCustomization());

            mockRepository = fixture.Create<Mock<IOrderRepository>>();

            var mappingConfig = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile(new AutoMapperConfig());
            });
            mapper = mappingConfig.CreateMapper();
        }
        [Fact]
        public async void Should_Throw_An_Error_If_CustomerId_Is_Null_Or_Zero()
        {
            var request = fixture.Create<OrderRequest>();
            request.CustomerId = 0;
            mockRepository.Setup(x => x.Create(It.IsAny<Order>())).ReturnsAsync(It.IsAny<Order>());
            var service = new OrderService(mockRepository.Object, mapper);

            await Assert.ThrowsAsync<Exception>(async () => await service.CreateOrder(request));
        }

        [Fact]
        public async void Should_Return_A_Response()
        {

            var request = fixture.Create<OrderRequest>();
            var entity = mapper.Map<Order>(request);
            mockRepository.Setup(x => x.Create(entity)).ReturnsAsync(entity);
            var service = new OrderService(mockRepository.Object, mapper);

            var result = await service.CreateOrder(request);

            Assert.NotNull(result);
        }
    }
}