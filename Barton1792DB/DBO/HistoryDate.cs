using System;
using System.Collections.Generic;
using System.Text;

namespace Barton1792DB.DBO
{
    public class HistoryDate
    {
        public DateTime ScheduleDate { get; set; }
        public bool IsWeekend { get; set; }

        //needs work
        public void SetWeekendStatus()
        {
            int daysUntilSaturday = ((int)DayOfWeek.Saturday - (int)ScheduleDate.DayOfWeek + 7) % 7;
            
            IsWeekend = false;
            if (daysUntilSaturday == 0)
            {
                IsWeekend = true;
            }
        } 

        #region Parser
        public static bool TryParse(string s, out HistoryDate result)
        {
            result = null;
            var parts = s.Split(',');
            if (parts.Length != 2)
            {
                return false;
            }

            DateTime scheduleDate = new DateTime();
            bool isWeekend = false;
            if (DateTime.TryParse(parts[0], out scheduleDate) && bool.TryParse(parts[1], out isWeekend))
            {
                result = new HistoryDate()
                {
                    ScheduleDate = scheduleDate,
                    IsWeekend = isWeekend
                };
                return true;
            }
            return false;
        }
        public static bool TryParse(List<string> strings, List<HistoryDate> results)
        {
            HistoryDate temp = null;
            try
            {
                foreach (var item in strings)
                {
                    temp = new HistoryDate();
                    HistoryDate.TryParse(item, out temp);
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
