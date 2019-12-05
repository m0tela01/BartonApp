export class ScheduleObject {
  employeeName: string;
  jobName: string;
  shift: number;
  restrictions: string;

  constructor() {
    this.employeeName = this.employeeName ? this.employeeName : null;
    this.jobName = this.jobName ? this.jobName : null;
    this.shift = this.shift ? this.shift : null;
    this.restrictions = this.restrictions ? this.restrictions : null;
  }
}
