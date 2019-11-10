export class EmployeeObject {
  seniorityNumber: number;
  clockNumber: number;
  seniorityDate: Date;
  employeeName: string;
  shiftPreference: number;
  jobName: string;
  departmentName: string;
  //prebuiltHours: number;
  //weekendOTHours: number;
  //totalHours: number;

  constructor()
  {
    this.seniorityNumber = this.seniorityNumber ? this.seniorityNumber: null;
    this.clockNumber = this.clockNumber ? this.clockNumber : null;
    this.seniorityDate = this.seniorityDate ? this.seniorityDate: null;
    this.employeeName = this.employeeName ? this.employeeName : null;
    this.shiftPreference = this.shiftPreference ? this.shiftPreference: null;
    this.jobName = this.jobName ? this.jobName : null;
    //this.departmentName = this.departmentName ? this.departmentName : null;
    //this.prebuiltHours = this.prebuiltHours ? this.prebuiltHours : null;
    //this.weekendOTHours = this.weekendOTHours ? this.weekendOTHours: null;
    //this.totalHours = this.totalHours ? this.totalHours : null;
  }
}


