namespace _4FinanceProject1.Dtos
{
    public class StudentDto
    {
        public Guid StudentId { get; set; }
        public string Name { get; set; } = string.Empty;

        public string Email { get; set; } = string.Empty;

        public string Major { get; set; } = string.Empty;
    }
}
