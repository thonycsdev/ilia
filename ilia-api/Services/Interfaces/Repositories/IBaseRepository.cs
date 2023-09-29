using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Services.Interfaces.Repositories
{
    public interface IBaseRepository<T> where T : class
    {
        Task<IEnumerable<T>> GetAll(Expression<Func<T, bool>>? expression);
        Task<T> GetSingleOrDefault(Expression<Func<T, bool>>? expression);
        Task<T> Create(T TEntity);
        Task<T> Delete(T TEntity);
        Task<T> Update(T TEntity);

    }
}