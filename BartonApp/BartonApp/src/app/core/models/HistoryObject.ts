export class HistoryObject {
  weekDay: Date;
  weekEnd: Date;

  constructor() {
    this.weekDay = this.weekDay ? this.weekDay : null;
    this.weekEnd = this.weekEnd ? this.weekEnd : null;
  }
}
