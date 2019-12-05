import { ScheduleObject } from "./ScheduleObject";
import { EmployeeNoteObject } from "./EmployeeNoteObject";

export class FullScheduleObject {
  schedules: ScheduleObject[];
  employeeNotes: EmployeeNoteObject[];

  constructor() {
    this.schedules = this.schedules ? this.schedules : [];
    this.employeeNotes = this.employeeNotes ? this.employeeNotes : [];
  }
}
