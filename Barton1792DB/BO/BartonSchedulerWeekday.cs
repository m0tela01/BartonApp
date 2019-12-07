using Barton1792DB.DBO;
using System;
using System.Collections.Generic;
using System.Text;
using Barton1792DB.DAO;
using System.Linq;

namespace Barton1792DB.BO
{
    public static class BartonSchedulerWeekday
    {
        private static int NOTELIGIIBLETOSCHEDULE => -1;
        private static string LABOR => "LABOR";

        public static Readers readers = new Readers();
        public static Writers writers = new Writers();

        #region Generate Weekday Schedule
        /// <summary>
        /// Generates the Barton Weekday Schedule according to the rules given to Ryan Daigle.
        /// Get employees sorted by seniority and shift. Then place employee in job if jobs available.
        /// If job is unavailable try remaining shifts. If no shift is available for the job push employee to LABOR.
        /// </summary>
        /// <returns></returns>
        public static bool GenerateWeekdaySchedule()
        {
            try
            {
                //Get data to generate schedule
                List<Employee> employees = readers.GetEmployees(new List<Employee>());
                List<Template> templates = readers.GetTemplates(new List<Template>());
                List<EmployeeNote> employeeNotes = readers.GetEmployeeNotes(new List<EmployeeNote>());

                Dictionary<int, EmployeeNote> notes = employeeNotes.ToDictionary(note => note.ClockNumber);

                /// Sponsor does not care for a history table after discussion.
                //Insert the data from the previous scheduling run to the history table
                //writers.InsertPreviousScheduleToScheduleHistory();
                //Clear the previous schedule for the contents of the schedule table
                writers.ClearScheduleBeforeInsert();

                DateTime today = DateTime.Today;
                // The (... + 7) % 7 ensures we end up with a value in the range [0, 6]
                int daysUntilTuesday = ((int)DayOfWeek.Monday - (int)today.DayOfWeek + 7) % 7;
                DateTime nextMonday = today.AddDays(daysUntilTuesday);

                List<Schedule> schedules = new List<Schedule>();
                Schedule schedule;
                // this data is ordered by senority number, job, and shiftpreference
                // put business logic here for scheduling
                //jobid - 17 jobname - LABOR   deptid - 6

                for (int i = 0; i < employees.Count; i++)
                {
                    for (int j = 0; j < templates.Count; j++)
                    {
                        bool employeeCanWork = true;
                        if (notes.ContainsKey(employees[i].ClockNumber))
                        {
                            if (notes[employees[i].ClockNumber].IsEligible == false)
                            {
                                employeeCanWork = false;
                            }
                        }
                        schedule = new Schedule();
                        if (employeeCanWork)
                        {
                            if (employees[i].JobName == templates[j].JobName)
                            {
                                // if there is no shift preference force them to have shift 1 as preference
                                if ((string.IsNullOrEmpty(employees[i].ShiftPreference.ToString()) || employees[i].ShiftPreference == 0) && employees[i].JobName.ToUpper() != "LABOR")
                                {
                                    employees[i].ShiftPreference = 1;
                                }
                                int originalShiftPreference = employees[i].ShiftPreference;
                                bool preferedShift1 = false;
                                bool preferedShift3 = false;
                                schedule.ScheduleDate = nextMonday;
                                schedule.SeniorityNumber = employees[i].SeniorityNumber;
                                schedule.ClockNumber = employees[i].ClockNumber;
                                schedule.EmployeeName = employees[i].EmployeeName;
                                schedule.ShiftPreference = employees[i].ShiftPreference;
                                schedule.Restrictions = employees[i].Restrictions;
                            //schedule.DepartmentName = employees[i].DepartmentName;
                            // If the job for a shift is full come back and check the next shift.
                            tryagain:
                                if (employees[i].ShiftPreference == 1)
                                {
                                    if (templates[j].Shift1 > 0)
                                    {
                                        templates[j].Shift1 -= 1;
                                        schedule.Shift = 1;
                                        schedule.JobName = templates[j].JobName;
                                        schedules.Add(schedule);
                                    }
                                    else
                                    {
                                        preferedShift1 = true;
                                        employees[i].ShiftPreference = 2;
                                        goto tryagain;
                                    }
                                }
                                else if (employees[i].ShiftPreference == 2)
                                {
                                    if (templates[j].Shift2 > 0)
                                    {
                                        templates[j].Shift2 -= 1;
                                        schedule.Shift = 2;
                                        schedule.JobName = templates[j].JobName;
                                        schedules.Add(schedule);
                                    }
                                    else
                                    {
                                        //gotPreference = false;
                                        //if the prefered shift was 3 or 2 previously go to labor
                                        if (preferedShift3 == true)
                                        {
                                            employees[i].ShiftPreference = 4;
                                        }
                                        else
                                        {
                                            //preferedShift2 = true;
                                            employees[i].ShiftPreference = 3;
                                            goto tryagain;
                                        }
                                    }
                                }
                                else if (employees[i].ShiftPreference == 3)
                                {
                                    if (templates[j].Shift3 > 0)
                                    {
                                        templates[j].Shift3 -= 1;
                                        schedule.Shift = 3;
                                        schedule.JobName = templates[j].JobName;
                                        schedules.Add(schedule);
                                    }
                                    else
                                    {
                                        //if the prefered shift was 1 go to labor now
                                        ///if it was 2 try shift1 (and shift2 again) then go to labor
                                        if (preferedShift1 == true)// && preferedShift2 == true)
                                        {
                                            employees[i].ShiftPreference = 4;
                                        }
                                        //if shift 3 was prefered go try shift 1 & 2 before going to labor
                                        else
                                        {
                                            employees[i].ShiftPreference = 1;
                                            preferedShift3 = true;
                                        }
                                        goto tryagain;
                                    }
                                }
                                //if the employee doesnt fit in any shift for their job put them in labor with their preference
                                else if (employees[i].ShiftPreference == 4)
                                {
                                    //jobid - 17, jobname - LABOR,   deptid - 6
                                    Console.WriteLine("No shifts available for: " + employees[i].JobName + " going to labor.");
                                    schedule.JobName = LABOR;
                                    schedule.Shift = originalShiftPreference;
                                    schedules.Add(schedule);
                                }
                                else
                                {
                                    Console.WriteLine("No Shift Preference");
                                }
                            }
                        }
                        else
                        {
                            break;
                        }
                        if (!string.IsNullOrEmpty(schedule.JobName) && employeeCanWork == true)
                        {
                            break;
                        }
                    }
                }
                //write current schedule to history table
                /// Sponsor does not care for a history table after discussion.
                //writers.InsertPreviousScheduleToScheduleHistory();
                //write current schedule to schedulte table
                writers.InsertCurrentSchedule(schedules);
                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return false;
            }
        }
        #endregion Generate Weekday Schedule

        #region Get Full Schedule
        /// <summary>
        /// Retrieves the employee notes and current schedule for displaying in the history page.
        /// Sponser wants employee notes and schedule seperated.
        /// </summary>
        /// <param name="fullSchedule"></param>
        /// <returns></returns>
        public static FullSchedule GetFullSchedule(FullSchedule fullSchedule)
        {
            fullSchedule.EmployeeNotes = readers.GetEmployeeNotes(new List<EmployeeNote>());
            fullSchedule.Schedules = readers.GetSchedulesForExcel(new List<ScheduleExcel>());
            return fullSchedule;
        }
        #endregion Get Full Schedule

        #region Update Employee By ID
        /// <summary>
        /// Inserts the new list of posted employee notes before a schedule is generated.
        /// Removes all existing notes before inserting the new list.
        /// </summary>
        /// <param name="postEmployeeNotes"></param>
        /// <returns></returns>
        /// <summary>
        /// Updates an employee based on the posted employeeid in the employee object.
        /// </summary>
        /// <param name="postEmployee"></param>
        /// <returns></returns>
        public static bool UpdateEmployeeById(Employee postEmployee)
        {
            Employee employee = new Employee();
            try
            {
                //to update employee ids
                writers.UpdateEmployeeById(postEmployee);
                List<Employee> employees = readers.GetEmployees(new List<Employee>());
                return employee.CheckSeniorityNumber(employees);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return false;
            }
        }
        #endregion Update Employee By ID
        
        #region Delete Employee By ID
        /// <summary>
        /// Deletes a new employee based on the the posted employee object.
        /// </summary>
        /// <param name="postEmployee"></param>
        /// <returns></returns>
        public static bool DeleteEmployeeById(Employee postEmployee)
        {
            Employee employee = new Employee();
            try
            {
                writers.DeleteEmployeeById(postEmployee);
                List<Employee> employees = readers.GetEmployees(new List<Employee>());
                return employee.CheckSeniorityNumber(employees);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return false;
            }
        }
        #endregion Delete Employee By ID
        
        #region Insert - New Employee Notes, New Templates, New Employee, New Job
        public static bool InsertNewEmployeeNotes(List<EmployeeNote> postEmployeeNotes)
        {
            writers.ClearEmployeeNotes();
            bool didClearNotes = writers.ClearEmployeeNotes();
            // clears the employee notes on insert of a new template
            if (didClearNotes)
            {
                // makeing way for the new set of notes to be used 
                return writers.InsertEmployeeNotes(postEmployeeNotes);
            }
            return false;
        }
        /// <summary>
        /// Inserts the new list of posted schedule templates before the schedule is generated.
        /// Removes all existing templates before inserting new templates.
        /// </summary>
        /// <param name="postTemplates"></param>
        /// <returns></returns>
        public static bool InsertNewTemplates(List<Template> postTemplates)
        {
            try
            {
                writers.ClearScheduleTemplateBeforeInsert();
                return writers.InsertCurrentScheduleTemplate(postTemplates);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
            return false;
        }
        /// <summary>
        /// Inserts a new employee based on the the posted employee object.
        /// </summary>
        /// <param name="postEmployee"></param>
        /// <returns></returns>
        public static bool InsertEmployee(Employee postEmployee)
        {
            Employee employee = new Employee();
            try
            {
                writers.InsertEmployee(postEmployee);
                List<Employee> employees = readers.GetEmployees(new List<Employee>());
                return employee.CheckSeniorityNumber(employees);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return false;
            }
        }
        /// <summary>
        /// Inserts a new job based on the the posted job object.
        /// </summary>
        /// <param name="job"></param>
        /// <returns></returns>
        public static bool InsertNewJob(Job job)
        {
            Readers readers = new Readers();
            try
            {
                job.JobId = readers.GetJobCount() + 1;
                writers.InsertNewJob(job);
                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return false;
            }
        }
        #endregion Insert - New Employee Notes, New Templates, New Employee, New Job 
    }
}
