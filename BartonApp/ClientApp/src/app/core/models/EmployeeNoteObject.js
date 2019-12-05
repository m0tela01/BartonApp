"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmployeeNoteObject = /** @class */ (function () {
    function EmployeeNoteObject() {
        this.clockNumber = this.clockNumber ? this.clockNumber : null;
        this.employeeName = this.employeeName ? this.employeeName : '';
        this.shift = this.shift ? this.shift : 0;
        this.dateRange = this.dateRange ? this.dateRange : null;
        this.isEligible = this.isEligible ? this.isEligible : true; //by default they can be scheduled
        this.note = this.note ? this.note : '';
    }
    //utilizes the actual date range to a string that can be displayed
    EmployeeNoteObject.prototype.setDateRange = function (dateRanges) {
        var tmpStr = dateRanges[0] ? dateRanges[0].toLocaleDateString() : '';
        if (dateRanges[1]) {
            this.dateRange = tmpStr.concat(' ', dateRanges[1].toLocaleDateString());
        }
        else {
            this.dateRange = tmpStr;
        }
    };
    return EmployeeNoteObject;
}());
exports.EmployeeNoteObject = EmployeeNoteObject;
//# sourceMappingURL=EmployeeNoteObject.js.map