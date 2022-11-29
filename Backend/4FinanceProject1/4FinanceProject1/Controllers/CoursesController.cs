using _4FinanceProject1.InputModels;
using _4FinanceProject1.Repositeries;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace _4FinanceProject1.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CoursesController : ControllerBase
    {
        private readonly ICourseRepositery courseRepositery;

        public CoursesController(ICourseRepositery courseRepositery)
        {
            this.courseRepositery = courseRepositery;
        }

        [HttpGet]

        public async Task<IActionResult> GetAllCourses()
        {
            var courses = await courseRepositery.GetAllAsync();
            var coursesDto = new List<Dtos.CourseDto>();

            courses.ToList().ForEach(course =>
            {
                var courseDto = new Dtos.CourseDto()
                {
                    CourseId = course.Id,
                    Name = course.Name,
                    CreditNumber = course.CreditNumber,
                    Description = course.Description,
                };

                coursesDto.Add(courseDto);
            });

            return Ok(coursesDto);
        }

        [HttpGet("{id:guid}")]
        [ActionName("GetCourseAsync")]

        public async Task<IActionResult> GetCourse(Guid id)
        {
            var course = await courseRepositery.GetAsync(id);
            if (course == null)
            {
                return NotFound();
            }

            var courseDto = new Dtos.CourseDto()
            {
                CourseId = course.Id,
                Name = course.Name,
                CreditNumber = course.CreditNumber,
                Description = course.Description,
            };
            return Ok(courseDto);
        }

        [HttpPost]

        public async Task<IActionResult> CreateCourse(CreateCourseInputModel createCourseInputModel)
        {
            var course = new Models.Course()
            {
                Name = createCourseInputModel.Name,
                CreditNumber = createCourseInputModel.CreditNumber,
                Description = createCourseInputModel.Description,
            };

            course = await courseRepositery.CreateCourseAsync(course);

            var courseDto = new Dtos.CourseDto()
            {
                CourseId = course.Id,
                Name = course.Name,
                CreditNumber = course.CreditNumber,
                Description = course.Description,
            };

            return CreatedAtAction(nameof(GetCourse), new { id = courseDto.CourseId }, courseDto);
        }

        [HttpDelete("{id:guid}")]

        public async Task<IActionResult> DeleteCourse(Guid id)
        {
            var course = await courseRepositery.DeleteCourseAsync(id);
            if (course == null)
            {
                return NotFound();
            }

            var courseDto = new Dtos.CourseDto()
            {
                Name = course.Name,
                CreditNumber = course.CreditNumber,
                Description = course.Description,
            };

            return Ok(courseDto);
        }
    }
}
