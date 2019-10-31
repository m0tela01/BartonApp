export class ScheduleObject {
  seniorityNumber: number;
  clockNumber: number;
  employeeName: string;
  jobName: string;
  departmentName: string;
  shift: number;
  shiftPreference: number;
  scheduleDate: Date;

  constructor() {
    this.seniorityNumber = this.seniorityNumber ? this.seniorityNumber : null;
    this.clockNumber = this.clockNumber ? this.clockNumber : null;
    this.employeeName = this.employeeName ? this.employeeName : null;
    this.jobName = this.jobName ? this.jobName : null;
    this.departmentName = this.departmentName ? this.departmentName : null;
    this.shift = this.shift ? this.shift : null;
    this.shiftPreference = this.shiftPreference ? this.shiftPreference : null;
    this.scheduleDate = this.scheduleDate ? this.scheduleDate : null;
  }
}
