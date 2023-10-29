using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Services.Interfaces.Repositories;

namespace Infra.Data.Repositories
{
    public class BaseRepository<T> : IBaseRepository<T> where T : class
    {
        private DbContext _context { get; set; }
        private DbSet<T> _dbSet { get; set; }
        public BaseRepository(DbContext context)
        {
            this._context = context;
            this._dbSet = context.Set<T>();
        }
        public async Task<T> Create(T TEntity)
        {
            await _dbSet.AddAsync(TEntity);
            await _context.SaveChangesAsync();
            return TEntity;
        }

        public async Task<T> Delete(T TEntity)
        {
            _dbSet.Remove(TEntity);
            await _context.SaveChangesAsync();
            return TEntity;
        }

        public async Task<IEnumerable<T>> GetAll(Expression<Func<T, bool>>? expression)
        {
            if (expression != null)
            {
                var resultsQuery = await _dbSet.Where(expression).ToListAsync();
                return resultsQuery;

            }
            var results = await _dbSet.ToListAsync();
            return results;

        }

        public async Task<T> GetSingleOrDefault(Expression<Func<T, bool>> expression)
        {
            var result = await _dbSet.Where(expression).FirstOrDefaultAsync();

            return result;
        }

        public async Task<T> Update(T TEntity)
        {
            _dbSet.Update(TEntity);
            await _context.SaveChangesAsync();
            return TEntity;
        }
    }
}