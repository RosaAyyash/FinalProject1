using _4FinanceProject1.Models;
using System.Reflection.Metadata;

namespace _4FinanceProject1.Repositeries
{
    public interface IUserRepositery
    {
        Task<IEnumerable<User>> GetUsersAsync();

        Task<User> CreateUserAsync(User user);


    }
}
