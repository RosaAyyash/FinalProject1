using _4FinanceProject1.Models;
using _4FinanceProject1.Repositeries;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace _4FinanceProject1.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserRepositery userRepositery;

        public UsersController(IUserRepositery userRepositery)
        {
            this.userRepositery = userRepositery;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllUsers()
        {
            var users = await userRepositery.GetUsersAsync();
            var usersDto = new List<Dtos.UserDto>();
     
            users.ToList().ForEach(user =>
            {
                var userDto = new Dtos.UserDto()
                {
                    userId = user.Id,
                    username = user.username,
                    password = user.password,
                };
                usersDto.Add(userDto);
            });
            return Ok(usersDto);
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser(User user)
        {
            var newuser = await userRepositery.CreateUserAsync(user);
            return Ok(newuser);
        }


    }
}
