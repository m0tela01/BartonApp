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
        [HttpGet("GetEmployeeNotes")]
        public ActionResult<List<EmployeeNote>> GetEmployeeNotes()
        {
            List<EmployeeNote> employeeNotes = readers.GetEmployeeNotes(new List<EmployeeNote>());
            return employeeNotes;
        }

        [HttpGet("GetJobs")]
        public ActionResult<List<Job>> GetJobs()
        {
            List<Job> CurrentJobs = readers.GetJobs(new List<Job>());
            return CurrentJobs;
        }


        [HttpGet("GetCurrentSchedule")]
        public ActionResult<List<ScheduleExcel>> GetCurrentSchedule()
        {
            //BartonSchedulerWeekday.GenerateWeekdaySchedule();
            List<ScheduleExcel> CurrentSchedule = readers.GetSchedulesForExcel(new List<ScheduleExcel>());
            return CurrentSchedule;
        }

        //[HttpGet("GetCurrentSchedule")]
        //public ActionResult<List<Schedule>> GetCurrentSchedule()
        //{
        //    //BartonSchedulerWeekday.GenerateWeekdaySchedule();
        //    List<Schedule> CurrentSchedule = readers.GetSchedules(new List<Schedule>());
        //    return CurrentSchedule;
        //}

        [HttpGet("GetCurrentTemplate")]
        public ActionResult<List<Template>> GetCurrentTemplate()
        {
            List<Template> CurrentTemplate = readers.GetTemplates(new List<Template>());
            return CurrentTemplate;
        }

        [HttpGet("GetScheduleHistoryByScheduleDate")]
        public ActionResult<List<Schedule>> GetScheduleHistoryByScheduleDate(string getDate)
        {
            List<Schedule> SchedulesFromHistory = readers.GetScheduleHistoryByScheduleDate(new List<Schedule>(), getDate);
            return SchedulesFromHistory;
        }

        [HttpGet("GetScheduleHistoryDates")]
        public ActionResult<List<HistoryDate>> GetScheduleHistoryDates()
        {
            List<HistoryDate> HistoryOfSchedules = readers.GetScheduleHistoryDates(new List<HistoryDate>());
            return HistoryOfSchedules;
        }

        [HttpGet("GenerateWeekdaySchedule")] // could be void
        public ActionResult<bool> GenerateWeekdaySchedule()
        {
            try
            {
                return BartonSchedulerWeekday.GenerateWeekdaySchedule();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return false;
            }
        }
        [HttpGet("GetFullSchedule")] // could be void
        public ActionResult<FullSchedule> GetFullSchedule()
        {
            FullSchedule fullSchedule = BartonSchedulerWeekday.GetFullSchedule(new FullSchedule());
            return fullSchedule;
        }
        
        #endregion Get

        #region Post

        #region Insert
        [HttpPost("InsertEmployeeNotes")]
        public bool InsertEmployeeNotes([FromBody]List<EmployeeNote> postEmployeeNotes)
        {
            try
            {
                return BartonSchedulerWeekday.InsertNewEmployeeNotes(postEmployeeNotes);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return false;
            }
        }
        [HttpPost("InsertNewTemplates")]
        public bool InsertNewTemplates([FromBody]List<Template> postTemplates)
        {
            try
            {
                return BartonSchedulerWeekday.InsertNewTemplates(postTemplates);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return false;
            }
        }
        [HttpPost("InsertScheduleTemplate")]
        public bool InsertScheduleTemplate([FromBody]Template postTemplate)
        {
            try
            {
                return writers.InsertScheduleTemplate(postTemplate);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return false;
            }
        }
        [HttpPost("InsertEmployee")]
        public bool InsertEmployee([FromBody]Employee postEmployee)
        {
            try
            {
                return BartonSchedulerWeekday.InsertEmployee(postEmployee);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return false;
            }
        }
        [HttpPost("InsertJob")]
        public bool InsertJob([FromBody] Job postJob)
        {
            try
            {
                return BartonSchedulerWeekday.InsertNewJob(postJob);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return false;
            }
        }
        #endregion Insert

        #region Delete
        [HttpPost("DeleteEmployeeNotes")]
        public bool DeleteEmployeeNotes()
        {
            try
            {
                return writers.ClearEmployeeNotes();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return false;
            }
        }
        [HttpPost("DeleteEmployee")]
        public bool DeleteEmployeeById([FromBody]Employee postEmployee)
        {
            try
            {
                return BartonSchedulerWeekday.DeleteEmployeeById(postEmployee);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return false;
            }
        }
        [HttpPost("DeleteJobFromSchedulerTemplateById")]
        public bool DeleteJobFromSchedulerTemplateById([FromBody]Template postTemplate)
        {
            try
            {
                return writers.DeleteJobFromSchedulerTemplateById(postTemplate);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return false;
            }
        }
        #endregion Delete

        #region Update
        [HttpPost("UpdateEmployeeById")]
        public bool UpdateEmployeById([FromBody]Employee postEmployee)
        {
            try
            {
                return BartonSchedulerWeekday.UpdateEmployeeById(postEmployee);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return false;
            }
        }

        [HttpPost("UpdateTemplateByJobId")]
        public bool UpdateTemplateByJobId([FromBody]Template postTemplate)
        {
            try
            {
                return writers.UpdateTemplateByJobId(postTemplate);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return false;
            }
        }
        #endregion Update

        #endregion Post
    }
}
