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
    [Route("api/[controller]/")]
    public class BartonDataController : Controller
    {
        Readers readers = new Readers();
        Writers writers = new Writers();
        #region Get

        [HttpGet("GetEmployeeData")]
        public ActionResult<List<Employee>> GetEmployees()
        {
            List<Employee> CurrentEmployeeData = readers.GetEmployees(new List<Employee>());
            return CurrentEmployeeData;
        }

        [HttpGet("GetCurrentSchedule")]
        public ActionResult<List<Schedule>> GetCurrentSchedule()
        {
            BartonSchedulerWeekday.GenerateWeekdaySchedule();
            List<Schedule> CurrentSchedule = readers.GetSchedules(new List<Schedule>());
            return CurrentSchedule;
        }

        [HttpGet("GetCurrentTemplate")]
        public ActionResult<List<Template>> GetCurrentTemplate()
        {
            List<Template> CurrentTemplate = readers.GetTemplates(new List<Template>());
            return CurrentTemplate;
        }

        //[HttpGet("GetScheduleHistory")]
        //public ActionResult<List<Schedule>> GetSchedulesFromHistory()
        //{
        //    List<Schedule> SchedulesFromHistory = readers.GetSchedules(new List<Schedule>());
        //    return SchedulesFromHistory;
        //}

        [HttpGet("GetScheduleHistory")]
        public ActionResult<List<DateTime>> GetScheduleHistory()
        {
            List<DateTime> HistoryOfSchedules = new List<DateTime>();
            HistoryOfSchedules.Add(DateTime.Now);
            return HistoryOfSchedules;
        }
        #endregion Get

        #region Post

        #region Insert
        #endregion Insert

        #region Update
        [HttpPost("UpdateEmployeeById")]
        public bool UpdateEmployeById(string postEmployee)
        {
            try
            {
                return writers.UpdateEmployeeById(new Employee(), postEmployee);
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex);
            }
            return false;
        }

        [HttpPost("UpdateTemplateByJobId")]
        public bool UpdateTemplateByJobId(string postTemplate)
        {
            try
            {
                return writers.UpdateTemplateByJobId(new Template(), postTemplate);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
            return false;
        }
        #endregion Update

        #endregion Post
    }
}
