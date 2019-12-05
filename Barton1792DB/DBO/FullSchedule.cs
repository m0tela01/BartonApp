using System;
using System.Collections.Generic;
using System.Text;

namespace Barton1792DB.DBO
{
    public class FullSchedule
    {
        public List<ScheduleExcel> Schedules { get; set; }
        public List<EmployeeNote> EmployeeNotes { get; set; }
    }
}
