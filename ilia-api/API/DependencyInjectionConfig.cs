using Infra.Data.Repositories;
using Infra.Data.Repositories.Repositories;
using Services.Interfaces.Repositories;
using Services.Interfaces.Services;
using Services.Services;

namespace ilia_api
{
    public static class DependencyInjectionConfig
    {
        public static void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped<ICustomerRepository, CustomerRepository>();
            services.AddScoped<ICustomerService, CustomerServices>();
            services.AddScoped<IOrderRepository, OrderRepository>();
            services.AddScoped<IOrderService, OrderService>();
            services.AddScoped<IProductRepository, ProductRepository>();
        }
    }
}
