using _4FinanceProject1.Models;

namespace _4FinanceProject1.Repositeries
{
    public interface ITeacherRepositery
    {
        Task<IEnumerable<Teacher>> GetAllAsync();

        Task<Teacher> GetAsync(Guid id);

        Task<Teacher> CreateTeacherAsync(Teacher teacher);

        Task<Teacher> DeleteTeacherAsync(Guid id);

        Task<Teacher> UpdateTeacherAsync(Guid id, Teacher teacher);
    }
}
