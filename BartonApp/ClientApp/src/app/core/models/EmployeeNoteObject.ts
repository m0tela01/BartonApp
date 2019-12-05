export class EmployeeNoteObject {
  clockNumber: number;
  dateRange: string;
  isEligible: boolean;
  note: string;

  constructor() {
    this.clockNumber = this.clockNumber ? this.clockNumber : null;
    this.dateRange = this.dateRange ? this.dateRange : null;
    this.isEligible = this.isEligible ? this.isEligible : true; //by default they can be scheduled
    this.note = this.note ? this.note : '';
  }

  //utilizes the actual date range to a string that can be displayed
  setDateRange(dateRanges: Date[]) {
    let tmpStr: string = dateRanges[0] ? dateRanges[0].toLocaleDateString() : '';
    if (dateRanges[1]) {
      this.dateRange = tmpStr.concat(' ', dateRanges[1].toLocaleDateString());
    } else {
      this.dateRange = tmpStr;
    }
  }
}
