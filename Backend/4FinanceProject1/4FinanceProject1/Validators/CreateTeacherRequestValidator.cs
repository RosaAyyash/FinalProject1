using _4FinanceProject1.InputModels;
using FluentValidation;

namespace _4FinanceProject1.Validators
{
    public class CreateTeacherRequestValidator: AbstractValidator<CreateTeacherInputModel>
    {
        public CreateTeacherRequestValidator()
        {
            RuleFor(x => x.Name).NotEmpty();
            RuleFor(x => x.Email).EmailAddress();
            RuleFor(x => x.Speciality).NotEmpty();
        }
        
    }
}
