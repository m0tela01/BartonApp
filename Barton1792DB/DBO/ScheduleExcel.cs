using System;
using System.Collections.Generic;
using System.Text;

namespace Barton1792DB.DBO
{
    public class ScheduleExcel
    {
        public int ClockNumber { get; set; }
        public string EmployeeName { get; set; }
        public string JobName { get; set; }
        public int Shift { get; set; }
        public string Restrictions { get; set; }
    }
}
