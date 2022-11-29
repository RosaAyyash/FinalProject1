using _4FinanceProject1.Models;

namespace _4FinanceProject1.Repositeries
{
    public interface ICourseRepositery
    {
        Task<IEnumerable<Course>> GetAllAsync();

        Task<Course> GetAsync(Guid id);

        Task<Course> CreateCourseAsync(Course course);

        Task<Course> DeleteCourseAsync(Guid id);
    }
}
