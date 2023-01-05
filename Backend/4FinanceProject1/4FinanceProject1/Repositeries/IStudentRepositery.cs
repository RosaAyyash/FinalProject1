using _4FinanceProject1.Models;

namespace _4FinanceProject1.Repositeries
{
    public interface IStudentRepositery
    {
        Task<IEnumerable<Student>> GetAllStudentsAsync();

        Task<Student> GetStudentAsync(Guid id);

        Task<Student> CreateStudentAsync(Student student);

        Task<Student> DeleteStudentAsync(Guid id);

        Task<Student> UpdateStudentAsync(Guid id, Student student);
    }
}
