using _4FinanceProject1.Data;
using _4FinanceProject1.Models;
using Microsoft.EntityFrameworkCore;

namespace _4FinanceProject1.Repositeries
{
    public class TeacherRepositery : ITeacherRepositery
    {
        //instance from the TMSDbContext to communicate with the database
        private readonly TMSDbContext _TMSDbContext;

        //Constructor that injects the _TMSDbContext in the class
        public TeacherRepositery(TMSDbContext tmsDbContext)
        {
            this._TMSDbContext = tmsDbContext;
        }

        public async Task<Teacher> CreateTeacherAsync(Teacher teacher)
        {
            //this will generate a guid for the teacher
            teacher.Id = new Guid();
            await _TMSDbContext.Teachers.AddAsync(teacher);
            await _TMSDbContext.SaveChangesAsync();
            return teacher;
        }

        public async Task<Teacher> DeleteTeacherAsync(Guid id)
        {
           var teacher = await _TMSDbContext.Teachers.FirstOrDefaultAsync(x => x.Id == id);
            if (teacher == null)
            {
                return null;
            }
            _TMSDbContext.Teachers.Remove(teacher);
            await _TMSDbContext.SaveChangesAsync(); 
            return teacher;
        }

        public async Task<IEnumerable<Teacher>> GetAllAsync()
        {
            return await _TMSDbContext.Teachers.ToListAsync();
        }

        public async Task<Teacher> GetAsync(Guid id)
        {
            return await _TMSDbContext.Teachers.FirstOrDefaultAsync(t => t.Id == id);
        }

        public async Task<Teacher> UpdateTeacherAsync(Guid id, Teacher teacher)
        {
            var existingteacher = await _TMSDbContext.Teachers.FirstOrDefaultAsync(t => t.Id == id);

            if (existingteacher == null)
            {
                return null;
            }

            existingteacher.Name = teacher.Name;
            existingteacher.Email = existingteacher.Email;
            existingteacher.Speciality = teacher.Speciality;

            await _TMSDbContext.SaveChangesAsync();
            return existingteacher;
        }
    }
}
