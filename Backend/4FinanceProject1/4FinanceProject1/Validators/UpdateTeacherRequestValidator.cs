using _4FinanceProject1.InputModels;
using FluentValidation;

namespace _4FinanceProject1.Validators
{
    public class UpdateTeacherRequestValidator: AbstractValidator<UpdateTeacherInputModel>
    {
        public UpdateTeacherRequestValidator()
        {
            RuleFor(x => x.Name).NotEmpty();
            RuleFor(x => x.Speciality).NotEmpty();

        }
    }
}
