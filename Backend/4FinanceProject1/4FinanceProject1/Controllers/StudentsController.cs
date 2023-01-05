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
            var students = await studentRepositery.GetAllStudentsAsync();
            var studentsDto = new List<Dtos.StudentDto>();

            students.ToList().ForEach(student =>
            {
                var studentDto = new Dtos.StudentDto()
                {
                    id = student.Id,
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
            var student = await studentRepositery.GetStudentAsync(id);

            if (student == null)
            {
                return NotFound();
            }

            var studentDto = new Dtos.StudentDto()
            {
                id = student.Id,
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

            await studentRepositery.CreateStudentAsync(student);

            var studentDto = new Dtos.StudentDto()
            {
                id = student.Id,
                Name = student.Name,
                Email = student.Email,
                Major = student.Major,
            };

            return CreatedAtAction(nameof(GetStudentAsync), new { id = studentDto.id }, studentDto);
        }

        [HttpDelete("{id:guid}")]

        public async Task<IActionResult> DeleteStudent(Guid id)
        {
            var student = await studentRepositery.DeleteStudentAsync(id);
            if (student == null) {
                return NotFound();
            };

            var studentDto = new Dtos.StudentDto()
            {
                id = student.Id,
                Name = student.Name,
                Email = student.Email,
                Major = student.Major,
            };

            return Ok(studentDto);
        }

        [HttpPut("{id:guid}")]
        public async Task<IActionResult> UpdateStudent([FromRoute]Guid id, [FromBody] UpdateStudentInputModel updateStudentInputModel)
        {
            var student = new Models.Student()
            {
                Name = updateStudentInputModel.Name,
                Email = updateStudentInputModel.Email,
                Major = updateStudentInputModel.Major,
            };

            student = await studentRepositery.UpdateStudentAsync(id, student);
            if (student == null)
            {
                return NotFound();
            }

            var studentDto = new Dtos.StudentDto()
            {
                id = student.Id,
                Name = student.Name,
                Email = student.Email,
                Major = student.Major,
            };

            return Ok(studentDto);

        }

    }
}
