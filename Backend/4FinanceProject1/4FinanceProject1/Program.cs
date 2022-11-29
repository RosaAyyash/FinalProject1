using _4FinanceProject1.Data;
using _4FinanceProject1.Repositeries;
using FluentValidation.AspNetCore;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddFluentValidation(options => options.RegisterValidatorsFromAssemblyContaining<Program>());

builder.Services.AddDbContext<TMSDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("TMS"));
});

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
        //builder.WithOrigins("https://localhost:3000");
    });
});

builder.Services.AddScoped<ITeacherRepositery, TeacherRepositery>();
builder.Services.AddScoped<IStudentRepositery, StudentRepositery>();
builder.Services.AddScoped<ICourseRepositery, CourseRepositery>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors();

app.MapControllers();

app.Run();
