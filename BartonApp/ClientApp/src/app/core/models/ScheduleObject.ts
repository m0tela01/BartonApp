export class ScheduleObject {
  employeeName: string;
  jobName: string;
  shift: number;
  restrictions: string;
  //seniorityNumber: number;
  //clockNumber: number;
  //departmentName: string;
  //shiftPreference: number;
  //scheduleDate: Date;

  constructor() {
    this.employeeName = this.employeeName ? this.employeeName : null;
    this.jobName = this.jobName ? this.jobName : null;
    this.shift = this.shift ? this.shift : null;
    this.restrictions = this.restrictions ? this.restrictions : null;
    //this.seniorityNumber = this.seniorityNumber ? this.seniorityNumber : null;
    //this.clockNumber = this.clockNumber ? this.clockNumber : null;
    //this.departmentName = this.departmentName ? this.departmentName : null;
    //this.shiftPreference = this.shiftPreference ? this.shiftPreference : null;
    //this.scheduleDate = this.scheduleDate ? this.scheduleDate : null;
  }
}
