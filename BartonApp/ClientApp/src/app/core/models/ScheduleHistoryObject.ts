export class ScheduleHistoryObject {
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
  }
}
