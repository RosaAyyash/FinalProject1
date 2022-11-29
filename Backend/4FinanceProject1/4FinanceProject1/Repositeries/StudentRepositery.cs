using _4FinanceProject1.Data;
using _4FinanceProject1.Models;
using Microsoft.EntityFrameworkCore;

namespace _4FinanceProject1.Repositeries
{
    public class StudentRepositery : IStudentRepositery
    {
        private readonly TMSDbContext _TMSDbContext;

        public StudentRepositery(TMSDbContext tmsDbContext)
        {
            this._TMSDbContext = tmsDbContext;
        }

        public async Task<Student> CreateAsync(Student student)
        {
            student.Id = new Guid();
            await _TMSDbContext.Students.AddAsync(student);
            await _TMSDbContext.SaveChangesAsync();
            return student;
        }

        public async Task<Student> DeleteAsync(Guid id)
        {
            var student = await _TMSDbContext.Students.FirstOrDefaultAsync(t => t.Id == id);
            if (student == null)
            {
                return null;
            }
            _TMSDbContext.Students.Remove(student);
            await _TMSDbContext.SaveChangesAsync();
            return student;
        }

        public async Task<IEnumerable<Student>> GetAllAsync()
        {
            return await _TMSDbContext.Students.ToListAsync();
        }

        public async Task<Student> GetAsync(Guid id)
        {
            return await _TMSDbContext.Students.FirstOrDefaultAsync(x => x.Id == id);
        }
    }
}
