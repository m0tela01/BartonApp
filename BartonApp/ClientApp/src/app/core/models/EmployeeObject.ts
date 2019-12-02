export class EmployeeObject {
  seniorityNumber: number;
  clockNumber: number;
  employeeName: string;
  shiftPreference: number;
  jobName: string;
  absence: string;
  restrictions: string;
  jobId: number;

  constructor()
  {
    this.seniorityNumber = this.seniorityNumber ? this.seniorityNumber: null;
    this.clockNumber = this.clockNumber ? this.clockNumber : null;
    this.employeeName = this.employeeName ? this.employeeName : null;
    this.shiftPreference = this.shiftPreference ? this.shiftPreference: null;
    this.jobName = this.jobName ? this.jobName : null;
    this.absence = this.absence ? this.absence : null;
    this.restrictions = this.restrictions ? this.restrictions : null;
    this.jobId = this.jobId ? this.jobId : null;
  }
}
