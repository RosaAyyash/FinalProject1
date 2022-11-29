namespace _4FinanceProject1.Models
{
    public class Student
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;

        public string Email { get; set; } = string.Empty;

        public string Major { get; set; } = string.Empty;

        public IEnumerable<Course> Courses { get; set; }
    }
}
