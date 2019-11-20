using System;
using System.Collections.Generic;
using System.Text;

namespace Barton1792DB.DBO
{
    public class Schedule
    {
        public int SeniorityNumber { get; set; }
        public int ClockNumber { get; set; }
        public string EmployeeName { get; set; }
        public string JobName { get; set; }
        public string DepartmentName { get; set; }
        public int Shift { get; set; }
        public int ShiftPreference { get; set; }
        public DateTime ScheduleDate { get; set; }
        public string Restrictions { get; set; }

        #region Parser
        public static bool TryParse(string s, out Schedule result)
        {
            result = null;
            var parts = s.Split(',');
            if (parts.Length != 8)
            {
                return false;
            }
            int seniorityNumber = 0;
            int clockNumber = 0;
            string employeeName = "";
            string jobName = "";
            string departmentName = "";
            int shift = 0;
            int shiftPreference = 0;
            DateTime scheduleDate = new DateTime();
            if (int.TryParse(parts[0], out seniorityNumber) && int.TryParse(parts[1], out clockNumber) && !string.IsNullOrWhiteSpace(parts[2].ToString()) &&
                !string.IsNullOrWhiteSpace(parts[3].ToString()) && !string.IsNullOrWhiteSpace(parts[4].ToString())
                && int.TryParse(parts[5], out shift) && int.TryParse(parts[6], out shiftPreference) && DateTime.TryParse(parts[7], out scheduleDate))
            {
                result = new Schedule()
                {
                    SeniorityNumber = seniorityNumber,
                    ClockNumber = clockNumber,
                    EmployeeName = parts[2].ToString(),
                    JobName = parts[3].ToString(),
                    DepartmentName = parts[4].ToString(),
                    Shift = shift,
                    ShiftPreference = shiftPreference,
                    ScheduleDate = scheduleDate
                };
                return true;
            }
            return false;
        }
        public static bool TryParse(List<string> strings, List<Schedule> results)
        {
            Schedule temp = null;
            try
            {
                foreach (var item in strings)
                {
                    temp = new Schedule();
                    Schedule.TryParse(item, out temp);
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
