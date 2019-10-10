using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Barton1792DB.BO;
using Barton1792DB.DAO;
using Barton1792DB.DBO;
using Microsoft.AspNetCore.Mvc;

namespace BartonApp.Controllers
{
    [Route("api/[controller]")]
    public class BartonDataController : Controller
    {
        Readers readers = new Readers();

        [HttpGet("{employees}")]
        public ActionResult<List<Employee>> GetEmployeeData()
        {
            List<Employee> CurrentEmployeeData = readers.GetEmployees(new List<Employee>());
            return CurrentEmployeeData;
        }

        [HttpGet("[action]")]
        public ActionResult<List<Schedule>> GetSchedule()
        {
            List<Schedule> CurrentSchedule = new List<Schedule>();
            List<Employee> CurrentEmployeeData = readers.GetEmployees(new List<Employee>());
            List<Template> CurrentSchedulingTemplate = readers.GetTemplate(new List<Template>());

            BartonSchedulerWeekday.GenerateSchedule(CurrentEmployeeData, CurrentSchedulingTemplate);
            CurrentSchedule = readers.GetSchedules(CurrentSchedule);
            return CurrentSchedule;
        }
    }
}
