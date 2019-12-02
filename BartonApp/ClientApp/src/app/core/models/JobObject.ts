export class JobObject {
  jobId: number;
  jobName: string;

  constructor() {
    this.jobId = this.jobId ? this.jobId : null;
    this.jobName = this.jobName ? this.jobName : null;
  }
}
