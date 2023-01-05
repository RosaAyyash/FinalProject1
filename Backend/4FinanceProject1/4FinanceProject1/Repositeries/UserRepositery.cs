using _4FinanceProject1.Data;
using _4FinanceProject1.Models;
using Microsoft.EntityFrameworkCore;

namespace _4FinanceProject1.Repositeries
{
    public class UserRepositery: IUserRepositery
    {
        private readonly TMSDbContext _TMSDbContext;
        
        public UserRepositery(TMSDbContext tmsDbcontext)
        {
            this._TMSDbContext = tmsDbcontext;
        }

        public async Task<User> CreateUserAsync(User user)
        {
            user.Id = new Guid();
            await _TMSDbContext.Users.AddAsync(user);
            await _TMSDbContext.SaveChangesAsync();
            return user;
        }

        public async Task<IEnumerable<User>> GetUsersAsync()
        {
            return await _TMSDbContext.Users.ToListAsync();
        }
    }
}
