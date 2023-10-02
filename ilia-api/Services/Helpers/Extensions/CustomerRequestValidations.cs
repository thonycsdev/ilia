using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.NetworkInformation;
using System.Threading.Tasks;
using Services.DTOs.Request;

namespace Services.Helpers.Extensions
{
    public static class CustomerRequestValidations
    {
        public static void CheckIsCustomerEmailAndNameAreEmpty(this CustomerRequest customer)
        {
            if (string.IsNullOrEmpty(customer.Email) || string.IsNullOrEmpty(customer.Name))
                throw new Exception();
            return;
        }

        public static void CheckIsCustomerEmailAndNameAreWhiteSpacesOrNull(this CustomerRequest customer)
        {
            if (string.IsNullOrWhiteSpace(customer.Email) || string.IsNullOrWhiteSpace(customer.Name))
                throw new Exception();
            return;
        }

        public static void CheckIfRequestAlreadyHaveADate(this CustomerRequest customer)
        {
            if (customer.CreatedAt.Equals(DateTime.MinValue))
                customer.CreatedAt = DateTime.Now;
        }

    }
}