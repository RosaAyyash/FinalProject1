using _4FinanceProject1.Dtos;
using _4FinanceProject1.InputModels;
using _4FinanceProject1.Models;
using _4FinanceProject1.Repositeries;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace _4FinanceProject1.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private readonly IStudentRepositery studentRepositery;

        //dependency injection: constructor 
        public StudentsController(IStudentRepositery studentRepositery)
        {
            this.studentRepositery = studentRepositery;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllStudents()
        {
            var students = await studentRepositery.GetAllAsync();
            var studentsDto = new List<Dtos.StudentDto>();

            students.ToList().ForEach(student =>
            {
                var studentDto = new Dtos.StudentDto()
                {
                    StudentId = student.Id,
                    Name = student.Name,
                    Email = student.Email,
                    Major = student.Major,
                };
                studentsDto.Add(studentDto);
            });
            return Ok(studentsDto);
        }


        [HttpGet("{id:guid}")]
        [ActionName("GetStudentAsync")]

        public async Task<IActionResult> GetStudentAsync(Guid id)
        {
            var student = await studentRepositery.GetAsync(id);

            if (student == null)
            {
                return NotFound();
            }

            var studentDto = new Dtos.StudentDto()
            {
                StudentId = student.Id,
                Name = student.Name,
                Email = student.Email,
                Major = student.Major,
            };

            return Ok(studentDto);
        }

        [HttpPost]

        public async Task<IActionResult> CreateStudent(CreateStudentInputModel createStudentInputModel)
        {
            var student = new Models.Student()
            {
                Name = createStudentInputModel.Name,
                Email = createStudentInputModel.Email,
                Major = createStudentInputModel.Major,
            };

            await studentRepositery.CreateAsync(student);

            var studentDto = new Dtos.StudentDto()
            {
                StudentId = student.Id,
                Name = student.Name,
                Email = student.Email,
                Major = student.Major,
            };

            return CreatedAtAction(nameof(GetStudentAsync), new { id = studentDto.StudentId }, studentDto);
        }

        [HttpDelete("{id:guid}")]

        public async Task<IActionResult> DeleteStudent(Guid id)
        {
            var student = await studentRepositery.DeleteAsync(id);
            if (student == null) {
                return NotFound();
            };

            var studentDto = new Dtos.StudentDto()
            {
                StudentId = student.Id,
                Name = student.Name,
                Email = student.Email,
                Major = student.Major,
            };

            return Ok(studentDto);
        }

        }
}
