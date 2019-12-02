﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Barton1792DB.DBO
{
    public class Template
    {
        public int JobId { get; set; }
        public string JobName { get; set; }
        public int DepartmentId { get; set; }
        public string DepartmentName { get; set; }
        public int Shift1 { get; set; }
        public int Shift2 { get; set; }
        public int Shift3 { get; set; }

        #region Parser
        public static bool TryParse(string s, out Template result)
        {
            result = null;
            var parts = s.Split(',');
            if (parts.Length != 5)
            {
                return false;
            }
            string jobName = "";
            string departmentName = "";
            int shift1 = 0;
            int shift2 = 0;
            int shift3 = 0;
            if (!string.IsNullOrWhiteSpace(parts[0].ToString()) && !string.IsNullOrWhiteSpace(parts[1].ToString())
                && int.TryParse(parts[2], out shift1) && int.TryParse(parts[3], out shift2) && int.TryParse(parts[4], out shift3))
            {
                result = new Template()
                {
                    JobName = parts[0].ToString(),
                    DepartmentName = parts[1].ToString(),
                    Shift1 = shift1,
                    Shift2 = shift2,
                    Shift3 = shift3
                };
                return true;
            }
            return false;
        }
        public static bool TryParse(List<string> strings, List<Template> results)
        {
            Template temp = null;
            try
            {
                foreach (var item in strings)
                {
                    temp = new Template();
                    Template.TryParse(item, out temp);
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
