using _4FinanceProject1.Models;

namespace _4FinanceProject1.Repositeries
{
    public interface IStudentRepositery
    {
        Task<IEnumerable<Student>> GetAllAsync();

        Task<Student> GetAsync(Guid id);

        Task<Student> CreateAsync(Student student);

        Task<Student> DeleteAsync(Guid id);
    }
}
