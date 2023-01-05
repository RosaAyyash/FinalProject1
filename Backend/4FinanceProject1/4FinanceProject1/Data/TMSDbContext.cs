using _4FinanceProject1.Models;
using Microsoft.EntityFrameworkCore;

namespace _4FinanceProject1.Data
{
    public class TMSDbContext : DbContext
    {
        public TMSDbContext(DbContextOptions<TMSDbContext> options) : base(options)
        {

        }
    //if table doesn't exist, it creates it
    public DbSet<Teacher> Teachers { get; set; }
    public DbSet<Student> Students { get; set; }
    public DbSet<Course> Courses { get; set; }
    public DbSet<User> Users { get; set; }

}

}
