export class EmployeeObject {
  seniorityNumber: number;
  clockNumber: number;
  seniorityDate: Date;
  employeeName: string;
  shiftPreference: number;
  jobName: string;
  departmentName: string;
  prebuiltHours: number;
  weekendOTHours: number;
  totalHours: number;

  constructor()
  {
    this.seniorityNumber = this.seniorityNumber ? this.seniorityNumber: null;
    this.clockNumber = this.clockNumber ? this.clockNumber : null;
    this.seniorityDate = this.seniorityDate ? this.seniorityDate: null;
    this.employeeName = this.employeeName ? this.employeeName : null;
    this.shiftPreference = this.shiftPreference ? this.shiftPreference: null;
    this.jobName = this.jobName ? this.jobName : null;
    this.departmentName = this.departmentName ? this.departmentName : null;
    this.prebuiltHours = this.prebuiltHours ? this.prebuiltHours : null;
    this.weekendOTHours = this.weekendOTHours ? this.weekendOTHours: null;
    this.totalHours = this.totalHours ? this.totalHours : null;
  }
  //constructor(SeniorityNumber: number, ClockNumber: number, SeniorityDate: Date, EmployeeName: string,
  //  ShiftPreference: number, JobName: string, DepartmentName: string, PrebuiltHours: number, WeekendOTHours: number,
  //  TotalHours: number)
  //{
  //  this.seniorityNumber = SeniorityNumber ? SeniorityNumber : null;
  //  this.clockNumber = ClockNumber ? ClockNumber : null;
  //  this.seniorityDate = SeniorityDate ? SeniorityDate : null;
  //  this.employeeName = EmployeeName ? EmployeeName : null;
  //  this.shiftPreference = ShiftPreference ? ShiftPreference : null;
  //  this.jobName = JobName ? JobName : null;
  //  this.departmentName = DepartmentName ? DepartmentName : null;
  //  this.prebuiltHours = PrebuiltHours ? PrebuiltHours : null;
  //  this.weekendOTHours = WeekendOTHours ? WeekendOTHours : null;
  //  this.totalHours = TotalHours ? TotalHours : null;
  //}
}


