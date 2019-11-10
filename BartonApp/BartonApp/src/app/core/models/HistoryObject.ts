export class HistoryObject {
  scheduleDate: Date;
  //weekEnd: Date;
  isWeekend: Boolean;

  constructor() {
    this.scheduleDate = this.scheduleDate ? this.scheduleDate : null;
    this.isWeekend = this.isWeekend ? this.isWeekend : null;
    //this.weekEnd = this.weekEnd ? this.weekEnd : null;
  }
}
