export class TemplateObject {
  jobName: string;
  departmentName: string;
  shift1: number;
  shift2: number;
  shift3: number;

  constructor() {
    this.jobName = this.jobName ? this.jobName : null;
    this.departmentName = this.departmentName ? this.departmentName : null;
    this.shift1 = this.shift1 ? this.shift1 : null;
    this.shift2 = this.shift2 ? this.shift2 : null;
    this.shift3 = this.shift3 ? this.shift3 : null;
  }
}
