namespace _4FinanceProject1.Dtos
{
    public class CourseDto
    {
        public Guid CourseId { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public int CreditNumber { get; set; }
    }
}
