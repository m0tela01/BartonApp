using Barton1792DB.DBO;
using MySql.Data.MySqlClient;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;

namespace Barton1792DB.DAO
{
    public class Writers
    {
        private string BSConnectionString = CreateDB.BSConnectionString;

        #region Procedure Names
        private string ClearEmployeeNotesSql => "ClearEmployeeNotes";
        private string ClearScheduleBeforeInsertCurrentScheduleSql => "ClearScheduleBeforeInsertCurrentSchedule";
        private string ClearScheduleHistorySql => "ClearScheduleHistory";
        private string ClearScheduleTemplateBeforeInsertCurrentTemplateSql => "ClearScheduleTemplateBeforeInsertCurrentTemplate";

        private string InsertCurrentScheduleSql => "InsertCurrentSchedule";
        private string InsertEmployeeSql => "InsertEmployee"; //scalar
        private string InsertEmployeeNoteSql => "InsertEmployeeNote";
        private string InsertNewJobSql => "InsertJob";
        private string InsertOldScheduleToHistorySql => "InsertOldScheduleToHistory";
        private string InsertPreviousScheduleToScheduleHistorySql => "InsertPreviousScheduleToScheduleHistory";
        private string InsertScheduleTemplateSql => "InsertScheduleTemplate";

        private string UpdateEmployeeByIdSql => "UpdateEmployeeById";
        private string UpdateTemplateByJobIdSql => "UpdateTemplateByJobId";

        private string DeleteEmployeeByIdSql => "DeleteEmployeeById";
        private string DeleteJobByIdSql => "DeleteJobFromSchedulerTemplateById";

        #endregion Procedure Names

        #region Clear - Truncate
        /// <summary>
        /// Clear employee notes when a new template is inserted.
        /// </summary>
        public bool ClearEmployeeNotes()
        {
            using (MySqlConnection conn = new MySqlConnection(BSConnectionString))
            {
                try
                {
                    conn.Open();
                    using (MySqlCommand cmd = new MySqlCommand(ClearEmployeeNotesSql, conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.ExecuteNonQuery();
                    }
                    return true;
                }
                catch (MySqlException ex)
                {
                    Console.WriteLine(ex);
                    return false;
                }
            }
        }
        /// <summary>
        /// Clear the schedule history if history is to big. Not used anymore
        /// </summary>
        public void ClearScheduleHistory()
        {
            using (MySqlConnection conn = new MySqlConnection(BSConnectionString))
            {
                try
                {
                    conn.Open();
                    using (MySqlCommand cmd = new MySqlCommand(ClearScheduleHistorySql, conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.ExecuteNonQuery();
                    }
                }
                catch (MySqlException ex)
                {
                    Console.WriteLine(ex);
                }
            }
        }
        /// <summary>
        /// Clear the current schedule before inserting the new schedule.
        /// </summary>
        public void ClearScheduleBeforeInsert()
        {
            using (MySqlConnection conn = new MySqlConnection(BSConnectionString))
            {
                try
                {
                    conn.Open();
                    using (MySqlCommand cmd = new MySqlCommand(ClearScheduleBeforeInsertCurrentScheduleSql, conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.ExecuteNonQuery();
                    }
                }
                catch (MySqlException ex)
                {
                    Console.WriteLine(ex);
                }
            }
        }
        /// <summary>
        /// Clear the current template before inserting the new template
        /// </summary>
        public void ClearScheduleTemplateBeforeInsert()
        {
            using (MySqlConnection conn = new MySqlConnection(BSConnectionString))
            {
                try
                {
                    conn.Open();
                    using (MySqlCommand cmd = new MySqlCommand(ClearScheduleTemplateBeforeInsertCurrentTemplateSql, conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.ExecuteNonQuery();
                    }
                }
                catch (MySqlException ex)
                {
                    Console.WriteLine(ex);
                }
            }
        }
        #endregion Clear - Truncate

        #region Insert
        #region Scalars
        /// <summary>
        /// Insert a single schedule template.
        /// </summary>
        /// <param name="tempalte"></param>
        public bool InsertScheduleTemplate(Template tempalte)
        {
            using (MySqlConnection conn = new MySqlConnection(BSConnectionString))
            {
                try
                {
                    conn.Open();
                    using (MySqlCommand cmd = new MySqlCommand(InsertScheduleTemplateSql, conn))
                    {
                        //cmd.Transaction = trans;
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.Add(new MySqlParameter("@uJobID", tempalte.JobId));
                        cmd.Parameters.Add(new MySqlParameter("@uDeptID", tempalte.DepartmentId));
                        cmd.Parameters.Add(new MySqlParameter("@Shift1", tempalte.Shift1));
                        cmd.Parameters.Add(new MySqlParameter("@Shift2", tempalte.Shift2));
                        cmd.Parameters.Add(new MySqlParameter("@Shift3", tempalte.Shift3));
                        cmd.ExecuteNonQuery();
                    }
                    return true;
                }
                catch (MySqlException ex)
                {
                    Console.WriteLine(ex);
                    return false;
                }
            }
        }
        /// <summary>
        /// Inserts a new employee.
        /// </summary>
        /// <param name="employee"></param>
        /// <returns></returns>
        public bool InsertEmployee(Employee employee)
        {
            using (MySqlConnection conn = new MySqlConnection(BSConnectionString))
            {
                try
                {
                    conn.Open();
                    using (MySqlCommand cmd = new MySqlCommand(InsertEmployeeSql, conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.Add(new MySqlParameter("@clockNumber", employee.ClockNumber));
                        cmd.Parameters.Add(new MySqlParameter("@seniorityNumber", employee.SeniorityNumber));
                        cmd.Parameters.Add(new MySqlParameter("@shiftPref", employee.ShiftPreference));
                        cmd.Parameters.Add(new MySqlParameter("@empName", employee.EmployeeName));
                        cmd.Parameters.Add(new MySqlParameter("@absent", employee.Absence));
                        cmd.Parameters.Add(new MySqlParameter("@restricted", employee.Restrictions));
                        cmd.Parameters.Add(new MySqlParameter("@jobId", employee.JobId));
                        cmd.ExecuteNonQuery();
                    }
                    return true;
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex);
                    return false;
                }
            }
        }
        /// <summary>
        /// Inserts a new job.
        /// </summary>
        /// <param name="job"></param>
        /// <returns></returns>
        public bool InsertNewJob(Job job)
        {
            Readers readers = new Readers();
            int jobId = readers.GetJobCount();
            //job = JsonConvert.DeserializeObject<Job>(postJob);
            job.JobId = jobId;
            using (MySqlConnection conn = new MySqlConnection(BSConnectionString))
            {
                try
                {
                    conn.Open();
                    using (MySqlCommand cmd = new MySqlCommand(InsertNewJobSql, conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.Add(new MySqlParameter("@jobID", job.JobId));
                        cmd.Parameters.Add(new MySqlParameter("@jobName", job.JobName));
                        cmd.ExecuteNonQuery();
                    }
                    return true;
                }
                catch (MySqlException ex)
                {
                    Console.WriteLine(ex);
                    return false;
                }
            }
        }
        #endregion Scalars

        #region Collections
        /// <summary>
        /// Insert the last schedule to the history table before inserting the new schedule.
        /// </summary>
        public void InsertPreviousScheduleToScheduleHistory()
        {
            using (MySqlConnection conn = new MySqlConnection(BSConnectionString))
            {
                try
                {
                    conn.Open();
                    using (MySqlCommand cmd = new MySqlCommand(InsertPreviousScheduleToScheduleHistorySql, conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.ExecuteNonQuery();
                    }
                }
                catch (MySqlException ex)
                {
                    Console.WriteLine(ex);
                }
            }
        }
        /// <summary>
        /// Insert the new set of notes about employees.
        /// </summary>
        /// <param name="EmployeeNotes"></param>
        /// <returns></returns>
        public bool InsertEmployeeNotes(List<EmployeeNote> EmployeeNotes)
        {
            using (MySqlConnection conn = new MySqlConnection(BSConnectionString))
            {
                try
                {
                    conn.Open();
                    //MySqlTransaction trans = conn.BeginTransaction();
                    foreach (var item in EmployeeNotes)
                    {
                        using (MySqlCommand cmd = new MySqlCommand(InsertEmployeeNoteSql, conn))
                        {
                            //cmd.Transaction = trans;
                            cmd.CommandType = CommandType.StoredProcedure;
                            cmd.Parameters.Add(new MySqlParameter("@empId", item.ClockNumber));
                            cmd.Parameters.Add(new MySqlParameter("@dates", item.DateRange));
                            cmd.Parameters.Add(new MySqlParameter("@eligibility", Convert.ToInt32(item.IsEligible)));
                            cmd.Parameters.Add(new MySqlParameter("@enotes", item.Note));
                            cmd.ExecuteNonQuery();
                        }
                    }
                    return true;
                }
                catch (MySqlException ex)
                {
                    Console.WriteLine(ex);
                    return false;
                }
            }
        }
        /// <summary>
        /// Insert the new current schedule.
        /// </summary>
        /// <param name="Schedules"></param>
        public void InsertCurrentSchedule(List<Schedule> Schedules)
        {
            using (MySqlConnection conn = new MySqlConnection(BSConnectionString))
            {
                try
                {
                    conn.Open();
                    //MySqlTransaction trans = conn.BeginTransaction();
                    foreach (var item in Schedules)
                    {
                        using (MySqlCommand cmd = new MySqlCommand(InsertCurrentScheduleSql, conn))
                        {
                            //cmd.Transaction = trans;
                            cmd.CommandType = CommandType.StoredProcedure;
                            cmd.Parameters.Add(new MySqlParameter("@senioritynumber", item.SeniorityNumber));
                            cmd.Parameters.Add(new MySqlParameter("@clocknumber", item.ClockNumber));
                            cmd.Parameters.Add(new MySqlParameter("@empname", item.EmployeeName));
                            cmd.Parameters.Add(new MySqlParameter("@jobname", item.JobName));
                            //cmd.Parameters.Add(new MySqlParameter("@departmentname", item.DepartmentName));
                            cmd.Parameters.Add(new MySqlParameter("@shift", item.Shift));
                            cmd.Parameters.Add(new MySqlParameter("@shiftpref", item.ShiftPreference));
                            cmd.Parameters.Add(new MySqlParameter("@scheduledate", item.ScheduleDate));
                            cmd.Parameters.Add(new MySqlParameter("@restrictions", item.Restrictions));
                            cmd.ExecuteNonQuery();
                        }
                    }
                    //trans.Commit();
                }
                catch (MySqlException ex)
                {
                    Console.WriteLine(ex);
                }
            }
        }
        /// <summary>
        /// Insert the new current template.
        /// </summary>
        /// <param name="templates"></param>
        public bool InsertCurrentScheduleTemplate(List<Template> templates)
        {
            //Template.TryParse(postTemplates, NewTemplates);
            //templates = JsonConvert.DeserializeObject<List<Template>>(postTemplates);
            using (MySqlConnection conn = new MySqlConnection(BSConnectionString))
            {
                try
                {
                    conn.Open();
                    //MySqlTransaction trans = conn.BeginTransaction();
                    foreach (var item in templates)
                    {
                        using (MySqlCommand cmd = new MySqlCommand(InsertScheduleTemplateSql, conn))
                        {
                            //cmd.Transaction = trans;
                            cmd.CommandType = CommandType.StoredProcedure;
                            cmd.Parameters.Add(new MySqlParameter("@uJobID", item.JobId));
                            cmd.Parameters.Add(new MySqlParameter("@uDeptID", item.DepartmentId));
                            cmd.Parameters.Add(new MySqlParameter("@shift1", item.Shift1));
                            cmd.Parameters.Add(new MySqlParameter("@shift2", item.Shift2));
                            cmd.Parameters.Add(new MySqlParameter("@shift3", item.Shift3));
                            cmd.ExecuteNonQuery();
                        }
                    }
                    return true;
                    //trans.Commit();
                }
                catch (MySqlException ex)
                {
                    Console.WriteLine(ex);
                    return false;
                }
            }
        }
        /// <summary>
        /// Insert the last schedule to the history table before inserting new schedule.
        /// </summary>
        /// <param name="Schedules"></param>
        public void InsertOldScheduleToHistory(List<Schedule> Schedules)
        {
            using (MySqlConnection conn = new MySqlConnection(BSConnectionString))
            {
                try
                {
                    conn.Open();
                    //MySqlTransaction trans = conn.BeginTransaction();
                    foreach (var item in Schedules)
                    {
                        using (MySqlCommand cmd = new MySqlCommand(InsertOldScheduleToHistorySql, conn))
                        {
                            //cmd.Transaction = trans;
                            cmd.CommandType = CommandType.StoredProcedure;
                            cmd.Parameters.Add(new MySqlParameter("@senioritynumber", item.SeniorityNumber));
                            cmd.Parameters.Add(new MySqlParameter("@clocknumber", item.ClockNumber));
                            cmd.Parameters.Add(new MySqlParameter("@empname", item.EmployeeName));
                            cmd.Parameters.Add(new MySqlParameter("@jobname", item.JobName));
                            cmd.Parameters.Add(new MySqlParameter("@departmentname", item.DepartmentName));
                            cmd.Parameters.Add(new MySqlParameter("@shift", item.Shift));
                            cmd.Parameters.Add(new MySqlParameter("@shiftpref", item.ShiftPreference));
                            cmd.Parameters.Add(new MySqlParameter("@scheduledate", item.ScheduleDate));
                            cmd.Parameters.Add(new MySqlParameter("@restrictions", item.Restrictions));
                            cmd.ExecuteNonQuery();
                        }
                    }
                    //trans.Commit();
                }
                catch (MySqlException ex)
                {
                    Console.WriteLine(ex);
                }
            }
        }
        #endregion Collections
        #endregion Insert

        #region Delete
        /// <summary>
        /// Delete Employee based on employee ID in posted employee object.
        /// </summary>
        /// <param name="employee"></param>
        /// <returns></returns>
        public bool DeleteEmployeeById(Employee employee)
        {
            try
            {
                using (MySqlConnection conn = new MySqlConnection(BSConnectionString))
                {
                    conn.Open();
                    using (MySqlCommand cmd = new MySqlCommand(DeleteEmployeeByIdSql, conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.Add(new MySqlParameter("@employeeId", employee.ClockNumber));
                        cmd.ExecuteNonQuery();
                    }
                }
                return true;
            }
            catch (MySqlException ex)
            {
                Console.WriteLine(ex);
            }
            return false;
        }
        /// <summary>
        /// Delete job from scheduler template based on job ID in posted template object.
        /// </summary>
        /// <param name="template"></param>
        /// <returns></returns>
        public bool DeleteJobFromSchedulerTemplateById(Template template)
        {
            try
            {
                using (MySqlConnection conn = new MySqlConnection(BSConnectionString))
                {
                    conn.Open();
                    using (MySqlCommand cmd = new MySqlCommand(DeleteJobByIdSql, conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.Add(new MySqlParameter("@rjobId", template.JobId));
                        cmd.ExecuteNonQuery();
                    }
                }
                return true;
            }
            catch (MySqlException ex)
            {
                Console.WriteLine(ex);
            }
            return false;
        }
        #endregion Delete

        #region Update
        /// <summary>
        /// Update Employee based on employee ID in posed employee object.
        /// </summary>
        /// <param name="employee"></param>
        /// <returns></returns>
        public bool UpdateEmployeeById(Employee employee)
        {
            //Employee.TryParse(postEmployee, out employee);
            //employee = postEmployee; //JsonConvert.DeserializeObject<Employee>(postEmployee);
            try
            {
                using (MySqlConnection conn = new MySqlConnection(BSConnectionString))
                {
                    conn.Open();
                    using (MySqlCommand cmd = new MySqlCommand(UpdateEmployeeByIdSql, conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.Add(new MySqlParameter("@empclockNumber", employee.ClockNumber));
                        cmd.Parameters.Add(new MySqlParameter("@seniorityNumber", employee.SeniorityNumber));
                        cmd.Parameters.Add(new MySqlParameter("@shiftPref", employee.ShiftPreference));
                        cmd.Parameters.Add(new MySqlParameter("@empName", employee.EmployeeName));
                        cmd.Parameters.Add(new MySqlParameter("@jobname", employee.JobName));
                        cmd.Parameters.Add(new MySqlParameter("@absent", employee.Absence));
                        cmd.Parameters.Add(new MySqlParameter("@restricted", employee.Restrictions));
                        cmd.Parameters.Add(new MySqlParameter("@jobId", employee.JobId));
                        //cmd.Parameters.Add(new MySqlParameter("@senorityDate", employee.SeniorityDate));
                        //cmd.Parameters.Add(new MySqlParameter("@prebuiltHours", employee.PrebuiltHours));
                        //cmd.Parameters.Add(new MySqlParameter("@weekendOtHours", employee.WeekendOTHours));
                        //cmd.Parameters.Add(new MySqlParameter("@totalHours", employee.TotalHours));
                        cmd.ExecuteNonQuery();
                    }
                }
                return true;
            }
            catch (MySqlException ex)
            {
                Console.WriteLine(ex);
            }
            return false;
        }
        /// <summary>
        /// Update employees if there is some change to the employee ids (seniority number).
        /// Must check/change each employee if senioirty number changes.
        /// Could be trigger.
        /// </summary>
        /// <param name="employees"></param>
        /// <returns></returns>
        public bool UpdateEmployeesById(List<Employee> employees)
        {
            try
            {
                using (MySqlConnection conn = new MySqlConnection(BSConnectionString))
                {
                    conn.Open();
                    foreach (var item in employees)
                    {
                        using (MySqlCommand cmd = new MySqlCommand(UpdateEmployeeByIdSql, conn))
                        {
                            cmd.CommandType = CommandType.StoredProcedure;
                            cmd.Parameters.Add(new MySqlParameter("@empclockNumber", item.ClockNumber));
                            cmd.Parameters.Add(new MySqlParameter("@seniorityNumber", item.SeniorityNumber));
                            cmd.Parameters.Add(new MySqlParameter("@shiftPref", item.ShiftPreference));
                            cmd.Parameters.Add(new MySqlParameter("@empName", item.EmployeeName));
                            cmd.Parameters.Add(new MySqlParameter("@jobname", item.JobName));
                            cmd.Parameters.Add(new MySqlParameter("@absent", item.Absence));
                            cmd.Parameters.Add(new MySqlParameter("@restricted", item.Restrictions));
                            cmd.Parameters.Add(new MySqlParameter("@jobId", item.JobId));
                            cmd.ExecuteNonQuery();
                        }
                    }
                }
                return true;
            }
            catch (MySqlException ex)
            {
                Console.WriteLine(ex);
            }
            return false;
        }
        /// <summary>
        /// Update job based on job ID in posed template object.
        /// </summary>
        /// <param name="template"></param>
        /// <returns></returns>
        public bool UpdateTemplateByJobId(Template template)
        {
            //Template.TryParse(postTemplate, out template);
            //template = JsonConvert.DeserializeObject<Template>(postTemplate);
            try
            {
                using (MySqlConnection conn = new MySqlConnection(BSConnectionString))
                {

                    conn.Open();
                    using (MySqlCommand cmd = new MySqlCommand(UpdateTemplateByJobIdSql, conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.Add(new MySqlParameter("@jobId", template.JobId));
                        cmd.Parameters.Add(new MySqlParameter("@jobName", template.JobName));
                        cmd.Parameters.Add(new MySqlParameter("@Shift1", template.Shift1));
                        cmd.Parameters.Add(new MySqlParameter("@Shift2", template.Shift2));
                        cmd.Parameters.Add(new MySqlParameter("@Shift3", template.Shift3));
                        //cmd.Parameters.Add(new MySqlParameter("@deptName", template.DepartmentName));
                        cmd.ExecuteNonQuery();
                    }
                }
                return true;
            }
            catch (MySqlException ex)
            {
                Console.WriteLine(ex);
            }
            return false;
        }
        #endregion Update

        /// <summary>
        /// Not used.
        /// </summary>
        #region Make Generics
        /// <summary>
        /// For easy Insert, Delete, Update
        /// </summary>
        /// <param name="sql"></param>
        public void DoNonQuery(string sql)
        {
            using (MySqlConnection conn = new MySqlConnection(BSConnectionString))
            {
                try
                {
                    conn.Open();
                    MySqlCommand cmd = new MySqlCommand(sql);
                    cmd.ExecuteNonQuery();
                }
                catch (MySqlException ex)
                {
                    Console.WriteLine(ex);
                }
            }
        }
        #endregion Make Generics
    }
}
