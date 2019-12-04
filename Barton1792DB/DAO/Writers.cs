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
        private string ClearScheduleBeforeInsertCurrentScheduleSql => "ClearScheduleBeforeInsertCurrentSchedule";
        private string ClearScheduleHistorySql => "ClearScheduleHistory";
        private string ClearScheduleTemplateBeforeInsertCurrentTemplateSql => "ClearScheduleTemplateBeforeInsertCurrentTemplate";
        private string InsertCurrentScheduleSql => "InsertCurrentSchedule";
        private string UpdateCurrentScheduleTemplateSql => "UpdateCurrentScheduleTemplate";
        private string InsertEmployeeSql => "InsertEmployee"; //scalar
        private string InsertScheduleTemplateSql => "InsertScheduleTemplate";
        private string InsertCurrentTemplateSql => "InsertCurrentTemplate"; //scalar
        private string InsertPreviousScheduleToScheduleHistorySql => "InsertPreviousScheduleToScheduleHistory";
        private string InsertOldScheduleToHistorySql => "InsertOldScheduleToHistory"; // should delete?
        private string UpdateEmployeeByIdSql => "UpdateEmployeeById";
        private string UpdateTemplateByJobIdSql => "UpdateTemplateByJobId";
        private string InsertNewJobSql => "InsertJob";
        private string DeleteEmployeeByIdSql => "DeleteEmployeeById";
        private string DeleteJobByIdSql => "DeleteJobById";


        #region Clear
        /// <summary>
        /// Clear the schedule history if history is to big.
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
        #endregion Clear

        #region Insert
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
        /// Scalar: Insert a schedule template.
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
        /// Insert the last schedule to the history table before inserting new schedule.
        /// </summary>
        /// <param name="Schedules"></param>
        // should delete?
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
        #endregion Insert

        #region Delete
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
