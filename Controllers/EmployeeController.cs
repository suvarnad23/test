using Crud.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.Configuration;
using System.Data;

namespace Crud.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
       
        private readonly EmployeeContext _employeeContext;
        public EmployeeController(EmployeeContext employeeContext)
        {
            _employeeContext = employeeContext;
        }
        //[Route(name)]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Employee>>> GetEmployees()
        
        {
            if (_employeeContext.Employees == null)
            {


                return NotFound();

            }
            return await _employeeContext.Employees.ToListAsync();
        }



        [HttpGet("{id}")]//get by id
        public async Task<ActionResult<Employee>> GetEmployees(int id)
        {
            if (_employeeContext.Employees == null)
            {


                return NotFound();

            }
            var employee = await _employeeContext.Employees.FindAsync(id);
            if (employee == null)
            {

                return NotFound();
            }
            return employee;
        }


        [HttpPost]
        public async Task<ActionResult<Employee>> postEmployee(Employee employee)
        {
            _employeeContext.Employees.Add(employee);
            await _employeeContext.SaveChangesAsync();
            return CreatedAtAction(nameof(GetEmployees), new { id = employee.ID }, employee);
        }
        [HttpPut("{id}")]
        public async Task<ActionResult> putEmployee(int id, Employee employee)
        {
            if (id != employee.ID)
            {
                return BadRequest();
            }
            _employeeContext.Entry(employee).State = EntityState.Modified;
            try
            {
                await _employeeContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }
            return Ok();
        }



        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteEmployee(int id)
        {
            if (_employeeContext.Employees == null)

            {
                return NotFound();
            }
            var employee = await _employeeContext.Employees.FindAsync(id);
            if (employee == null)
            {
                return NotFound();
            }
            _employeeContext.Employees.Remove(employee);
            await _employeeContext.SaveChangesAsync();
            return Ok();
        }


        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromBody] Login credentials)
        {

            if (credentials.username == "suvarna" && credentials.password == "suvarna")
            {
                return Ok("Login successful");
            }

            //var user = _employeeContext.Logins.FirstOrDefault(u => u.username == credentials.username && u.password == credentials.password);

            //    if (user != null)
            //{
            //    // User found, authentication successful
            //    return Ok("Login successful");
            //}
            else {
                return Unauthorized("Invalid credentials");


            }
            // Authentication failed
        }
    }



}
        //}




