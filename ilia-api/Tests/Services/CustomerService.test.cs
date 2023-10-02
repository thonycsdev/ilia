using AutoFixture;
using AutoMapper;
using Moq;
using Services.AutoMapper;
using Services.DTOs.Request;
using Services.Entities;
using Services.Interfaces.Repositories;
using Services.Services;

namespace Testes
{
    public class CustomerServiceTests
    {
        public Fixture fixture = new Fixture();
        public Mock<ICustomerRepository> customerRepository;
        public IMapper mapper;
        public CustomerServiceTests()
        {
            var mappingConfig = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile(new AutoMapperConfig());
            });
            mapper = mappingConfig.CreateMapper();

            fixture.Behaviors.OfType<ThrowingRecursionBehavior>().ToList()
                .ForEach(b => fixture.Behaviors.Remove(b));
            fixture.Behaviors.Add(new OmitOnRecursionBehavior());

            customerRepository = new Mock<ICustomerRepository>();
        }
        [Fact]
        public async void Need_To_Return_Something_Not_Null()
        {

            var value = fixture.Create<int>();
            var customer = fixture.Create<Customer>();
            var moqRepo =
            customerRepository.Setup(x => x.GetAllSingleCustomerWithOrders(x => x.Id == value)).ReturnsAsync(customer);


            var service = new CustomerServices(customerRepository.Object, mapper);
            var result = await service.GetCustomerById(value);

            Assert.NotNull(result);

        }

        [Fact]
        public async void Should_Throw_An_Error_When_Customer_Has_No_Email()
        {

            var customerRequest = fixture.Create<CustomerRequest>();
            var customerEntity = fixture.Create<Customer>();
            customerRequest.Email = string.Empty;
            customerRepository.Setup(x => x.Create(customerEntity)).ReturnsAsync(customerEntity);


            var service = new CustomerServices(customerRepository.Object, mapper);
            await Assert.ThrowsAsync<Exception>(async () => await service.CreateCustomer(customerRequest));

        }
        [Fact]
        public async void Should_Throw_An_Error_When_Customer_Has_No_Name()
        {

            var customerRequest = fixture.Create<CustomerRequest>();
            var customerEntity = fixture.Create<Customer>();
            customerRequest.Name = string.Empty;
            customerRepository.Setup(x => x.Create(customerEntity)).ReturnsAsync(customerEntity);


            var service = new CustomerServices(customerRepository.Object, mapper);
            await Assert.ThrowsAsync<Exception>(async () => await service.CreateCustomer(customerRequest));

        }
        [Fact]
        public async void Should_Throw_An_Error_When_Customer_Has_Only_White_Spaces_Email()
        {

            var customerRequest = fixture.Create<CustomerRequest>();
            var customerEntity = fixture.Create<Customer>();
            customerRequest.Email = "  ";
            customerRepository.Setup(x => x.Create(customerEntity)).ReturnsAsync(customerEntity);


            var service = new CustomerServices(customerRepository.Object, mapper);
            await Assert.ThrowsAsync<Exception>(async () => await service.CreateCustomer(customerRequest));

        }
        [Fact]
        public async void Should_Throw_An_Error_When_Customer_Has_Only_White_Spaces_Name()
        {

            var customerRequest = fixture.Create<CustomerRequest>();
            var customerEntity = fixture.Create<Customer>();
            customerRequest.Name = " ";
            customerRepository.Setup(x => x.Create(customerEntity)).ReturnsAsync(customerEntity);


            var service = new CustomerServices(customerRepository.Object, mapper);
            await Assert.ThrowsAsync<Exception>(async () => await service.CreateCustomer(customerRequest));

        }

        [Fact]
        public async void Should_Have_A_CreationTime()
        {

            var customerRequest = fixture.Create<CustomerRequest>();

            var entity = mapper.Map<Customer>(customerRequest);
            customerRepository.Setup(x => x.Create(entity)).ReturnsAsync(entity);


            var service = new CustomerServices(customerRepository.Object, mapper);
            var result = await service.CreateCustomer(customerRequest);
            Assert.NotNull(result.CreatedAt);
            Assert.NotEqual(DateTime.MinValue, result.CreatedAt);
        }
    }

}