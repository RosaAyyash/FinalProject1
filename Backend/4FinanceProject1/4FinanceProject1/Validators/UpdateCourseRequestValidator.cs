using _4FinanceProject1.InputModels;
using FluentValidation;

namespace _4FinanceProject1.Validators
{
    public class UpdateCourseRequestValidator: AbstractValidator<UpdateCourseInputModel>
    {
        public UpdateCourseRequestValidator() { 
            RuleFor(x => x.Name).NotEmpty();
            RuleFor(x => x.Description).NotEmpty();
            RuleFor(x => x.CreditNumber).NotEmpty();
        }
        
}
}
