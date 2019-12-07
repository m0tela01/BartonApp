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

        #region API - Barton Controller
        #region Generate Weekday Schedule API
        /// <summary>
        /// Starts BartonSchedulerWeekday.GenerateWeekDaySchedule() as api. To generate the weekeday schedule.
        /// </summary>
        /// <returns></returns>
        [HttpGet("GenerateWeekdaySchedule")]
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
        #endregion Generate Weekday Schedule API

        #region Get
        /// <summary>
        /// Get Employee data api. Retrieves employee table.
        /// </summary>
        /// <returns></returns>
        [HttpGet("GetEmployeeData")]
        public ActionResult<List<Employee>> GetEmployees()
        {
            List<Employee> CurrentEmployeeData = readers.GetEmployees(new List<Employee>());
            return CurrentEmployeeData;
        }
        /// <summary>
        /// Get Employee Notes data api. Retrieves employee notes table.
        /// </summary>
        /// <returns></returns>
        [HttpGet("GetEmployeeNotes")]
        /// <summary>
        /// Get Jobs data api. Retrieves job table.
        /// </summary>
        /// <returns></returns>
        [HttpGet("GetJobs")]
        public ActionResult<List<Job>> GetJobs()
        {
            List<Job> CurrentJobs = readers.GetJobs(new List<Job>());
            return CurrentJobs;
        }
        /// <summary>
        /// Get Schedule data api. Retrieves schedule table as ScheduleExcel.
        /// </summary>
        /// <returns></returns>
        [HttpGet("GetCurrentSchedule")]
        public ActionResult<List<ScheduleExcel>> GetCurrentSchedule()
        {
            //BartonSchedulerWeekday.GenerateWeekdaySchedule();
            List<ScheduleExcel> CurrentSchedule = readers.GetSchedulesForExcel(new List<ScheduleExcel>());
            return CurrentSchedule;
        }
        /// <summary>
        /// Get schedule template data api. Retrieves schedule template table.
        /// </summary>
        /// <returns></returns>
        [HttpGet("GetCurrentTemplate")]
        public ActionResult<List<Template>> GetCurrentTemplate()
        {
            List<Template> CurrentTemplate = readers.GetTemplates(new List<Template>());
            return CurrentTemplate;
        }
        /// <summary>
        /// Get full schedule data api. Retrieves the employee notes table and schedule as ScheduleExcel.
        /// </summary>
        /// <returns></returns>
        [HttpGet("GetFullSchedule")]
        public ActionResult<FullSchedule> GetFullSchedule()
        {
            FullSchedule fullSchedule = BartonSchedulerWeekday.GetFullSchedule(new FullSchedule());
            return fullSchedule;
        }
        #endregion Get

        #region Post
        #region Insert
        /// <summary>
        /// Insert employe notes api. Takes a list of employee notes from body.
        /// </summary>
        /// <param name="postEmployeeNotes"></param>
        /// <returns></returns>
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
        /// <summary>
        /// Insert scheduler templateapi. Takes a list of templates from body.
        /// </summary>
        /// <param name="postTemplates"></param>
        /// <returns></returns>
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
        /// <summary>
        /// Insert a schedule template api. Takes a single template from body.
        /// </summary>
        /// <param name="postTemplate"></param>
        /// <returns></returns>
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
        /// <summary>
        /// Insert an employe api. Takes an employee from body.
        /// </summary>
        /// <param name="postEmployee"></param>
        /// <returns></returns>
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
        /// <summary>
        /// Insert a job api. Takes a job from body.
        /// </summary>
        /// <param name="postJob"></param>
        /// <returns></returns>
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
        /// <summary>
        /// Deletes employe notes api.
        /// </summary>
        /// <returns></returns>
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
        /// <summary>
        /// Delete employe by their clocknumber api. Takes an employee from body to delete.
        /// </summary>
        /// <param name="postEmployee"></param>
        /// <returns></returns>
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
        /// <summary>
        /// Delete job by job ID api. Takes a job from body to delete from the template table.
        /// </summary>
        /// <param name="postTemplate"></param>
        /// <returns></returns>
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
        /// <summary>
        /// Update employe by their clocknumber api. Takes an employee from body to update.
        /// </summary>
        /// <param name="postEmployee"></param>
        /// <returns></returns>
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
        /// <summary>
        /// Update job by job ID api. Takes a template from body to update.
        /// </summary>
        /// <param name="postTemplate"></param>
        /// <returns></returns>
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
        #endregion API - Barton Controller

        #region Not Used
        /// <summary>
        /// Not used.
        /// </summary>
        /// <param name="getDate"></param>
        /// <returns></returns>
        [HttpGet("GetScheduleHistoryByScheduleDate")]
        public ActionResult<List<Schedule>> GetScheduleHistoryByScheduleDate(string getDate)
        {
            List<Schedule> SchedulesFromHistory = readers.GetScheduleHistoryByScheduleDate(new List<Schedule>(), getDate);
            return SchedulesFromHistory;
        }
        /// <summary>
        /// Not used.
        /// </summary>
        /// <param name="getDate"></param>
        /// <returns></returns>
        [HttpGet("GetScheduleHistoryDates")]
        public ActionResult<List<HistoryDate>> GetScheduleHistoryDates()
        {
            List<HistoryDate> HistoryOfSchedules = readers.GetScheduleHistoryDates(new List<HistoryDate>());
            return HistoryOfSchedules;
        }
        /// <summary> Not used.
        /// </summary>
        public ActionResult<List<EmployeeNote>> GetEmployeeNotes()
        {
            List<EmployeeNote> employeeNotes = readers.GetEmployeeNotes(new List<EmployeeNote>());
            return employeeNotes;
        }
        #endregion Not Used
    }
}
