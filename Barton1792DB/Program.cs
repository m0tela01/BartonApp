using System;
using System.IO;
using Barton1792DB.DAO;
using Barton1792DB.DBO;
using Barton1792DB.BO;
using System.Collections.Generic;

namespace Barton1792DB
{
    class Program
    {
        //Test for data layer and api.
        #region Old - from original solution
        public static void Main(string[] args)
        {
            Readers reader = new Readers();
            Writers writer = new Writers();
            //util.print(reader.GetJobCount());
            string postitem = @"{""seniorityNumber"":1,""clockNumber"":1232,""seniorityDate"":""1977 - 09 - 28T00: 00:00"",""employeeName"":""aLindsay, Lohana1aa"",""shiftPreference"":1,""jobName"":""MECHANIC"",""absence"":""FMLA"",""restrictions"":""none"",""jobId"":1}";
            //var response = writer.UpdateEmployeeById(new Employee(), postitem);
            List<Employee> CurrentEmployeeData = reader.GetEmployees(new List<Employee>());
            //List<Employee> CurrentEmployeeData = reader.GetEmployees(new List<Employee>());
            //util.print(CurrentEmployeeData);
            bool didschedule = BartonSchedulerWeekday.GenerateWeekdaySchedule();
            List<Template> temps = reader.GetTemplates(new List<Template>());


            //List<HistoryDate> dates = reader.GetScheduleHistoryDates(new List<HistoryDate>());
            //List<Schedule> schedulesFromDate = reader.GetScheduleHistoryByScheduleDate(new List<Schedule>(), "2019-10-14");
            //util.print("hi");
            //util.print(schedulesFromDate[0]);


            //CreateDB.ConnectToDB();
            //CreateDB.CleanAndCreateTables();
            ////Console.ReadKey();


            ////List<Employee> EmployeeData = reader.GetStuff(new List<Employee>());
            //List<Employee> CurrentEmployeeData = reader.GetEmployees(new List<Employee>());
            //List<Template> CurrentSchedulingTemplate = reader.GetTemplate(new List<Template>());

            //BartonSchedulerWeekday.GenerateSchedule(CurrentEmployeeData, CurrentSchedulingTemplate);
            //List<Schedule> CurrentScheduled = reader.GetSchedules(new List<Schedule>());

            //Context sch = Context.from_generic(CurrentScheduled);

            //Dictionary<string, Context> scheds = new Dictionary<string, Context>();
            //scheds["CurrentScheduled"] = sch;
            //Context.to_jsons("CurrentScheduled.json", scheds);


            //util.print(sch);
            //util.print("HI");
            Console.ReadKey();
        }
        #endregion Old - from original solution
    }
}
