using Microsoft.EntityFrameworkCore;
namespace Crud.Models
{
    public class EmployeeContext:DbContext
    {

        public EmployeeContext(DbContextOptions<EmployeeContext> options) : base(options)


        {


        }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Login> Logins { get; set; }
    }
}
