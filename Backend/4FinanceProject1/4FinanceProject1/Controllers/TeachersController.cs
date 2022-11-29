using _4FinanceProject1.Data;
using _4FinanceProject1.InputModels;
using _4FinanceProject1.Models;
using _4FinanceProject1.Repositeries;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http.Headers;

namespace _4FinanceProject1.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class TeachersController : ControllerBase
    {

        private readonly ITeacherRepositery teacherRepositery;

        //dependency injection: constructor 
        public TeachersController(ITeacherRepositery teacherRepositery)
        {
            this.teacherRepositery = teacherRepositery;
        }

        [HttpGet] //decoration
        public async Task<IActionResult> GetAllTeachers()
        {
            var teachers = await teacherRepositery.GetAllAsync();
            var teachersDto = new List<Dtos.TeacherDto>();

            //loop over the teacher model
            teachers.ToList().ForEach(teacher =>
            {
                //create a teacher dto and fill it from the teacher model
                var teacherDto = new Dtos.TeacherDto()
                {
                    id = teacher.Id,
                    Name = teacher.Name,
                    Email = teacher.Email,
                    Speciality = teacher.Speciality,
                };
                //add each teacher dto to the teacherDto list
                teachersDto.Add(teacherDto);
            });
            return Ok(teachersDto);
        }

        [HttpGet("{id:guid}")]
        [ActionName("GetTeacherAsync")]
        public async Task<IActionResult> GetTeacherAsync(Guid id)
        {
            //use the repositery
            var teacher = await teacherRepositery.GetAsync(id);

            if (teacher == null)
            {
                return NotFound();
            }

            //mapping: copying the database to a dto
            var teacherDto = new Dtos.TeacherDto()
            {
                id = teacher.Id,
                Name = teacher.Name,
                Email = teacher.Email,
                Speciality = teacher.Speciality,
            };
            return Ok(teacherDto);
        }
   

        [HttpPost]
        public async Task<IActionResult> CreateTeacher(CreateTeacherInputModel createTeacherInputModel)
        {
            var teacher = new Models.Teacher()
            {
                Name = createTeacherInputModel.Name,
                Email = createTeacherInputModel.Email,
                Speciality = createTeacherInputModel.Speciality,
            };

            teacher = await teacherRepositery.CreateTeacherAsync(teacher);

            var teacherDto = new Dtos.TeacherDto
            {
                id = teacher.Id,
                Name = teacher.Name,
                Email = teacher.Email,
                Speciality = teacher.Speciality,
            };
            return CreatedAtAction(nameof(GetTeacherAsync), new { id = teacherDto.id }, teacherDto);
        }

        [HttpDelete("{id:guid}")]
        public async Task<IActionResult> DeleteTeacherAsync(Guid id)
        {
            var teacher = await teacherRepositery.DeleteTeacherAsync(id);

            if (teacher == null)
            {
                return NotFound();
            }

            var teacherDto = new Dtos.TeacherDto()
            {
                id  = teacher.Id,
                Name = teacher.Name,
                Email = teacher.Email,
                Speciality = teacher.Speciality,
            };

            return Ok(teacherDto);

        }

        [HttpPut("{id:guid}")]
        public async Task<IActionResult> UpdateTeacherAsync([FromRoute] Guid id, [FromBody] UpdateTeacherInputModel updateTeacherInputModel)
        {
            // convert from dto to model
            var teacher = new Models.Teacher()
            {
                Name = updateTeacherInputModel.Name,
                Speciality = updateTeacherInputModel.Speciality, //no email cause it is not defined in the class
            };

            // update Teacher using teacher repository
            teacher = await teacherRepositery.UpdateTeacherAsync(id, teacher);

            // if null return NotFound
            if (teacher == null)
            {
                return NotFound();
            }

            // Convert from model back to dto
            var teacherDto = new Dtos.TeacherDto()
            {
                id = teacher.Id,
                Name = teacher.Name,
                Email = teacher.Email,
                Speciality = teacher.Speciality,
            };

            // return ok response
            return Ok(teacherDto);

           
        }
    } 
}
