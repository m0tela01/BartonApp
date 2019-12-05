import { ScheduleObject } from "./ScheduleObject";
import { EmployeeNoteObject } from "./EmployeeNoteObject";

export class FullScheduleObject {
  schedules: ScheduleObject[];
  vacations: EmployeeNoteObject[];

  constructor() {
    this.schedules = this.schedules ? this.schedules : [];
    this.vacations = this.vacations ? this.vacations : [];
  }
}
