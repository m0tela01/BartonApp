using System;
using System.Collections.Generic;
using System.Text;

namespace Barton1792DB.DBO
{
    public class Employee
    {
        public int SeniorityNumber { get; set; }
        public int ClockNumber { get; set; }
        public string EmployeeName { get; set; }
        public int ShiftPreference { get; set; }
        public string JobName { get; set; }
        public string Absence { get; set; }
        public string Restrictions { get; set; }
        public int JobId { get; set; }
        //public DateTime SeniorityDate { get; set; }
        //public string DepartmentName { get; set; }
        //public int PrebuiltHours { get; set; }
        //public int WeekendOTHours { get; set; }
        //public int TotalHours { get; set; }

        public bool CheckSeniorityNumber(List<Employee> employees)
        {
            try
            {
                DAO.Writers writer = new DAO.Writers();
                bool ChangedSeniorityNumber = false;
                int counter = 1;
                foreach (var item in employees)
                {
                    if (item.SeniorityNumber != counter)
                    {
                        item.SeniorityNumber = counter;
                        ChangedSeniorityNumber = true;
                    }
                    counter += 1;
                }
                if (ChangedSeniorityNumber)
                {
                    writer.UpdateEmployeesById(employees);
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
}
