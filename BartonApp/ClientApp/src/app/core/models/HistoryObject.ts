export class HistoryObject {
  scheduleDate: Date;
  isWeekend: Boolean;

  constructor() {
    this.scheduleDate = this.scheduleDate ? this.scheduleDate : null;
    this.isWeekend = this.isWeekend ? this.isWeekend : null;
  }
}
