using System;
using System.Collections.Generic;
using System.Text;

namespace Barton1792DB.DBO
{
    public class Employee
    {
        public int SeniorityNumber { get; set; }
        public int ClockNumber { get; set; }
        public DateTime SeniorityDate { get; set; }
        public string EmployeeName { get; set; }
        public int ShiftPreference { get; set; }
        public string JobName { get; set; }
        public string DepartmentName { get; set; }
        public int PrebuiltHours { get; set; }
        public int WeekendOTHours { get; set; }
        public int TotalHours { get; set; }
        public string Absence { get; set; }
        public string Restrictions { get; set; }
        public int JobId { get; set; }

        #region Parser
        public static bool TryParse(string s, out Employee result)
        {
            result = null;
            var parts = s.Split(',');
            if (parts.Length != 11)
            {
                return false;
            }
            int seniorityNumber = 0;
            int clockNumber = 0;
            DateTime seniorityDate = new DateTime();
            string employeeName = "";
            int shiftPreference = 0;
            string jobName = "";
            string departmentName = "";
            int prebuiltHours = 0;
            int weekendOtHours = 0;
            int totalHours = 0;
            int jobid = 0;            
            if (int.TryParse(parts[0], out seniorityNumber) && int.TryParse(parts[1], out clockNumber) && DateTime.TryParse(parts[2], out seniorityDate) && !string.IsNullOrWhiteSpace(parts[3].ToString()) &&
                int.TryParse(parts[4], out shiftPreference) && !string.IsNullOrWhiteSpace(parts[5].ToString()) && !string.IsNullOrWhiteSpace(parts[6].ToString()) && int.TryParse(parts[7], out prebuiltHours) &&
                int.TryParse(parts[8], out weekendOtHours) && int.TryParse(parts[9], out totalHours) && int.TryParse(parts[10], out jobid))
            {
                result = new Employee()
                {
                    SeniorityNumber = seniorityNumber,
                    ClockNumber = clockNumber,
                    SeniorityDate = seniorityDate,
                    EmployeeName = parts[3].ToString(),
                    ShiftPreference = shiftPreference,
                    JobName = parts[5].ToString(),
                    DepartmentName = parts[6].ToString(),
                    PrebuiltHours = prebuiltHours,
                    WeekendOTHours = weekendOtHours,
                    TotalHours = totalHours,
                    JobId = jobid
                };
                return true;
            }
            return false;
        }
        public static bool TryParse(List<string> strings, List<Employee> results)
        {
            Employee temp = null;
            try
            {
                foreach (var item in strings)
                {
                    temp = new Employee();
                    Employee.TryParse(item, out temp);
                    results.Add(temp);
                }
                if (strings.Count == results.Count)
                {
                    return true;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
            return false;
        }
        #endregion Parser
    }
}
