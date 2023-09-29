using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Services.DTOs.Request;
using Services.DTOs.Response;
using Services.Entities;

namespace Services.AutoMapper
{
    public class AutoMapperConfig : Profile
    {
        public AutoMapperConfig()
        {
            CreateMap<OrderRequest, Order>();
            CreateMap<Order, OrderResponse>();
            CreateMap<Customer, CustomerResponse>();
            CreateMap<CustomerRequest, Customer>();
        }
    }
}