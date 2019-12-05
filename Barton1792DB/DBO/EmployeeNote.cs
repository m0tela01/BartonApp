using System;
using System.Collections.Generic;
using System.Globalization;
using System.Text;

namespace Barton1792DB.DBO
{
    public class EmployeeNote
    {
        public int ClockNumber { get; set; }
        public string EmployeeName { get; set; }
        public int Shift { get; set; }
        public string DateRange { get; set; }
        public bool Eligible { get; set; }
        public string Notes { get; set; }

        public DateTime ParseDate(string dateAsString)
        {
            return DateTime.Parse(dateAsString, new CultureInfo("en-us"));
        }
    }
}
