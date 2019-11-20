using System;
using DVAC;
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
        public static void Main(string[] args)
        {
            Readers reader = new Readers();
            //List<Employee> CurrentEmployeeData = reader.GetEmployees(new List<Employee>());
            List<Employee> CurrentEmployeeData = reader.GetEmployees(new List<Employee>());
            util.print(CurrentEmployeeData);
            List<Schedule> saturdaySchedule = BartonSchedulerWeekday.GenerateWeekdaySchedule();

            //List<HistoryDate> dates = reader.GetScheduleHistoryDates(new List<HistoryDate>());
            //List<Schedule> schedulesFromDate = reader.GetScheduleHistoryByScheduleDate(new List<Schedule>(), "2019-10-14");
            util.print("hi");
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
    }
}
