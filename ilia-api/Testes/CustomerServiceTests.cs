using AutoFixture;
using Moq;
using Services.Entities;
using Services.Interfaces.Repositories;
using Services.Services;

namespace Testes
{
    public class CustomerServiceTests
    {
        public Fixture fixture;
        public Mock<ICustomerRepository> customerRepository;
        public CustomerServiceTests()
        {
            fixture = new Fixture();

            fixture.Behaviors.OfType<ThrowingRecursionBehavior>().ToList()
                .ForEach(b => fixture.Behaviors.Remove(b));
            fixture.Behaviors.Add(new OmitOnRecursionBehavior());

            customerRepository = new Mock<ICustomerRepository>();
        }
        [Fact]
        public async void Need_To_Return_Somethin_Not_Null()
        {

            var value = fixture.Create<int>();
            var customer = fixture.Create<Customer>();
            var moqRepo =
            customerRepository.Setup(x => x.GetSingleOrDefault(x => x.Id == value)).ReturnsAsync(customer);


            var service = new CustomerServices(customerRepository.Object);
            var result = await service.GetCustomerById(value);


            Assert.NotNull(result);

        }
    }
}