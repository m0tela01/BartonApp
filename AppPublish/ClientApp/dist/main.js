(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img class=\"bartonbarrel\"\r\n     src=\"../assets/images/BartonBarrels85.jpg\"\r\n     alt=\"BartonBarrells\" />\r\n<app-menu></app-menu>\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/menu/menu.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/menu/menu.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\r\n  <div style=\"text-align:center\">\r\n    <button\r\n      class=\"menuItems\"\r\n      (click)=\"menuChange(1)\"\r\n    >\r\n      Home\r\n    </button>\r\n    <button\r\n      class=\"menuItems\"\r\n      (click)=\"menuChange(2)\"\r\n      style=\"border-left: 1px solid\"\r\n    >\r\n      Scheduler\r\n    </button>\r\n    <img class=\"logo\" src=\"../assets/images/1792-logo.png\" alt=\"1792-logo\" />\r\n    <button class=\"menuItems\" (click)=\"menuChange(3)\">Employees</button>\r\n    <button\r\n      class=\"menuItems\"\r\n      (click)=\"menuChange(4)\"\r\n      style=\"border-left: 1px solid\"\r\n    >\r\n      History\r\n    </button>\r\n\r\n    <hr class=\"headerline\" color=\"#E5D082\" noshade=\"noshade\" />\r\n  </div>\r\n</body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/employees/employees.component/employees.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/employees/employees.component/employees.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p-toast position=\"top-center\" life=\"500\"></p-toast>\r\n<p-table [value]=\"employees\" dataKey=\"clockNumber\" editMode=\"row\" id=\"employees\" [style]=\"{margin:'28px'}\">\r\n  <ng-template pTemplate=\"caption\">\r\n    <div>\r\n      <!--TODO: how to get button on left and right-->\r\n      <button type=\"button\" pButton icon=\"pi pi-plus\" (click)=\"onShowAddJobDialog()\" label=\" Add New Job\" style=\"display: inline-block\"></button>\r\n      <button type=\"button\" pButton icon=\"pi pi-plus\" (click)=\"onShowAddDialog()\" label=\" Add New Employee\" style=\"margin-left: 20%;margin-right: 20%;display: inline-block\"></button>\r\n      <!--<div style=\"margin-left: 20%;margin-right: 20%;display: inline-block;font-size: 20px;\">Employees Table</div>-->\r\n      <button type=\"button\" pButton icon=\"pi pi-minus\" class=\"ui-button-danger\" (click)=\"onShowDeleteDialog()\" label=\" Delete Employee\" style=\"display: inline-block\"></button>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"header\">\r\n    <tr>\r\n      <th>SeniorityNumber</th>\r\n      <th>ClockNumber</th>\r\n      <th>EmployeeName</th>\r\n      <th>ShiftPreference</th>\r\n      <th>JobName</th>\r\n      <th>Restrictions</th>\r\n      <th style=\"width:8em\">Edit</th>\r\n    </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-rowData let-editing=\"editing\" let-ri=\"rowIndex\" style=\"text-align:center\">\r\n    <tr [pEditableRow]=\"rowData\" style=\"text-align:center\">\r\n      <td>\r\n        <p-cellEditor>\r\n          <ng-template pTemplate=\"input\">\r\n            <input pInputText type=\"text\" [(ngModel)]=\"rowData.seniorityNumber\" required>\r\n          </ng-template>\r\n          <ng-template pTemplate=\"output\">\r\n            {{rowData.seniorityNumber}}\r\n          </ng-template>\r\n        </p-cellEditor>\r\n      </td>\r\n      <td>\r\n        {{rowData.clockNumber}}\r\n      </td>\r\n      <td>\r\n        <p-cellEditor>\r\n          <ng-template pTemplate=\"input\">\r\n            <input pInputText type=\"text\" [(ngModel)]=\"rowData.employeeName\">\r\n          </ng-template>\r\n          <ng-template pTemplate=\"output\">\r\n            {{rowData.employeeName}}\r\n          </ng-template>\r\n        </p-cellEditor>\r\n      </td>\r\n      <td>\r\n        <p-cellEditor>\r\n          <ng-template pTemplate=\"input\">\r\n            <input pInputText type=\"text\" [(ngModel)]=\"rowData.shiftPreference\">\r\n          </ng-template>\r\n          <ng-template pTemplate=\"output\">\r\n            {{rowData.shiftPreference}}\r\n          </ng-template>\r\n        </p-cellEditor>\r\n      </td>\r\n      <td>\r\n        <p-cellEditor>\r\n          <ng-template pTemplate=\"input\">\r\n            <input pInputText type=\"text\" [(ngModel)]=\"rowData.jobName\">\r\n          </ng-template>\r\n          <ng-template pTemplate=\"output\">\r\n            {{rowData.jobName}}\r\n          </ng-template>\r\n        </p-cellEditor>\r\n      </td>\r\n      <td>\r\n        <p-cellEditor>\r\n          <ng-template pTemplate=\"input\">\r\n            <input pInputText type=\"text\" [(ngModel)]=\"rowData.restrictions\">\r\n          </ng-template>\r\n          <ng-template pTemplate=\"output\">\r\n            {{rowData.restrictions}}\r\n          </ng-template>\r\n        </p-cellEditor>\r\n      </td>\r\n      <td style=\"text-align:center\">\r\n        <button *ngIf=\"!editing\" pButton type=\"button\" pInitEditableRow icon=\"pi pi-pencil\" class=\"ui-button-info\" (click)=\"onRowEditInit(rowData)\"></button>\r\n        <button *ngIf=\"editing\" pButton type=\"button\" pSaveEditableRow icon=\"pi pi-check\" class=\"ui-button-success\" style=\"margin-right: .5em\" (click)=\"onRowEditSave(rowData)\"></button>\r\n        <button *ngIf=\"editing\" pButton type=\"button\" pCancelEditableRow icon=\"pi pi-times\" class=\"ui-button-danger\" (click)=\"onRowEditCancel(rowData, ri)\"></button>\r\n      </td>\r\n    </tr>\r\n  </ng-template>\r\n</p-table>\r\n\r\n<p-dialog header=\"Add New Employee\" [(visible)]=\"displayDialog\" (onHide)=\"onHideDialog()\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [style]=\"{width: '40%'}\" [contentStyle]=\"{'overflow':'visible'}\">\r\n  <div class=\"ui-g ui-fluid\" *ngIf=\"newEmployee\" style=\"text-align: center\">\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-4\">\r\n        <label for=\"seniorityNumber\">Seniority Number</label>\r\n      </div>\r\n      <div class=\"ui-g-8\">\r\n        <input pInputText id=\"seniorityNumber\" [(ngModel)]=\"newEmployee.seniorityNumber\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-4\">\r\n        <label for=\"clockNumber\">Clock Number</label>\r\n      </div>\r\n      <div class=\"ui-g-8\">\r\n        <input pInputText id=\"clockNumber\" [(ngModel)]=\"newEmployee.clockNumber\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-4\">\r\n        <label for=\"employeeName\">Employee Name</label>\r\n      </div>\r\n      <div class=\"ui-g-8\">\r\n        <input pInputText id=\"employeeName\" [(ngModel)]=\"newEmployee.employeeName\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-4\">\r\n        <label for=\"shiftPreference\">Shift Preference</label>\r\n      </div>\r\n      <div class=\"ui-g-8\">\r\n        <!--TODO: Should this be a drop down?-->\r\n        <input pInputText id=\"shiftPreference\" [(ngModel)]=\"newEmployee.shiftPreference\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-4\">\r\n        <label for=\"jobName\">Job Name</label>\r\n      </div>\r\n      <div class=\"ui-g-8\">\r\n        <p-dropdown id=\"jobName\" [options]=\"jobs\" [(ngModel)]=\"selectedJob\" placeholder=\"Select a Job\" optionLabel=\"jobName\"></p-dropdown>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <p-footer>\r\n    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\" style=\"text-align: center\">\r\n      <button type=\"button\" pButton icon=\"fa fa-check\" (click)=\"onAddNewEmployee()\" label=\"Add New Employee\"></button>\r\n    </div>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n<!--delete employee dialog and confirmation table-->\r\n<p-dialog header=\"Delete Employee\" [(visible)]=\"deletionDialog\" [closable]=\"false\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [style]=\"{width: '40%'}\">\r\n  <div class=\"ui-g ui-fluid\" *ngIf=\"!confirmDeletion\" style=\"text-align: center\">\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-8\">\r\n        <label for=\"clockNumber\">Clock Number of employee to be deleted: </label>\r\n      </div>\r\n      <div class=\"ui-g-4\">\r\n        <input pInputText id=\"clockNumber\" [(ngModel)]=\"deleteClockNumber\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-4\" style=\"text-align: center\">\r\n      </div>\r\n      <div class=\"ui-g-4\" style=\"text-align: center\">\r\n        <button type=\"button\" pButton (click)=\"onConfirmDeletion()\" label=\"Find\"></button>\r\n      </div>\r\n      <div class=\"ui-g-4\" style=\"text-align: center\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"confirmDeletion\">\r\n    <div class=\"ui-g-12\" style=\"text-align: center; font-size: 20px; color: red;\">\r\n      Seniority Number: {{deleteEmployee.seniorityNumber}}\r\n    </div>\r\n    <div class=\"ui-g-12\" style=\"text-align: center; font-size: 20px; color: red;\">\r\n      Clock Number: {{deleteEmployee.clockNumber}}\r\n    </div>\r\n    <div class=\"ui-g-12\" style=\"text-align: center; font-size: 20px; color: red;\">\r\n      Name: {{deleteEmployee.employeeName}}\r\n    </div>\r\n    <div class=\"ui-g-12\" style=\"text-align: center; font-size: 20px; color: red;\">\r\n      Job Name: {{deleteEmployee.jobName}}\r\n    </div>\r\n  </div>\r\n  <p-footer>\r\n    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\" style=\"text-align: center\">\r\n      <button type=\"button\" pButton class=\"ui-button-warning\" (click)=\"onCancelDelete()\" label=\"Cancel\" style=\"margin-right:5%\"></button>\r\n      <button type=\"button\" pButton class=\"ui-button-danger\" (click)=\"onDeleteEmployee()\" label=\"Delete\" [disabled]=\"!confirmDeletion\" style=\"margin-left:5%\"></button>\r\n    </div>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n<!--add new job-->\r\n<p-dialog header=\"Add Job\" [(visible)]=\"addJobDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [style]=\"{width: '40%'}\">\r\n  <div class=\"ui-g ui-fluid\" style=\"text-align: center\">\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-4\">\r\n        <label for=\"addJobName\">New Job Name: </label>\r\n      </div>\r\n      <div class=\"ui-g-8\">\r\n        <input pInputText id=\"addJobName\" [(ngModel)]=\"addJobName\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <p-footer>\r\n    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\" style=\"text-align: center\">\r\n      <button type=\"button\" pButton icon=\"pi pi-plus\" (click)=\"onAddJob()\" label=\"Add Job\"></button>\r\n    </div>\r\n  </p-footer>\r\n</p-dialog>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/history/history.component/history.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/history/history.component/history.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--export to excel button-->\r\n<div style=\"text-align:center\">\r\n  <button id=\"excelButton\" type=\"button\" pButton icon=\"pi pi-file-excel\" iconPos=\"left\" label=\"Export All Shifts Into One Excel\" (click)=\"exportExcel()\" style=\"margin-right: 0.5em;\" class=\"ui-button-success\"></button>\r\n</div>\r\n\r\n<!--first set of tables for shift 1-->\r\n<div style=\"margin-left:15%; margin-right:15%; text-align:center\">\r\n  <h1 style=\"color: #e5d082;\">Shift 1</h1>\r\n  <!--table with all scheduled employees in shift 1-->\r\n  <p-table #dt [columns]=\"scheduleShift1\" [value]=\"scheduleShift1\" sortField=\"jobName\" sortMode=\"single\" (onSort)=\"onSort(1)\">\r\n    <ng-template pTemplate=\"header\" style=\"text-align:center\">\r\n      <tr style=\"font-size:16px\">\r\n        <th>Job</th>\r\n        <th>Employee</th>\r\n        <th>Restrictions</th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\" style=\"text-align:center\">\r\n      <tr>\r\n        <td *ngIf=\"rowGroupMetadata1[rowData.jobName].index === rowIndex\" [attr.rowspan]=\"rowGroupMetadata1[rowData.jobName].size\">\r\n          {{rowData.jobName}}\r\n        </td>\r\n        <td>{{rowData.employeeName}}</td>\r\n        <td>{{rowData.restrictions}}</td>\r\n      </tr>\r\n    </ng-template>\r\n    <!--vacation table shown only if employees are on vacation for this shift-->\r\n    <ng-template pTemplate=\"summary\" style=\"background-color:black\">\r\n      <p-table [value]=\"vacations1\" *ngIf=\"isVacation1\">\r\n        <ng-template pTemplate=\"caption\">\r\n          Vacations\r\n        </ng-template>\r\n        <ng-template pTemplate=\"header\">\r\n          <tr>\r\n            <th>Employee Name</th>\r\n            <th>Date Range</th>\r\n            <th>Note</th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-vacations1>\r\n          <tr>\r\n            <td>{{vacations1.employeeName}}</td>\r\n            <td>{{vacations1.dateRange}}</td>\r\n            <td>{{vacations1.note}}</td>\r\n          </tr>\r\n        </ng-template>\r\n      </p-table>\r\n    </ng-template>\r\n  </p-table>\r\n</div>\r\n\r\n<!--first set of tables for shift 2-->\r\n<div style=\"margin-left:15%; margin-right:15%; margin-top:3%; text-align:center\">\r\n  <h1 style=\"color: #e5d082;\">Shift 2 </h1>\r\n  <!--table with all scheduled employees in shift 2-->\r\n  <p-table #dt1 [columns]=\"scheduleShift2\" [value]=\"scheduleShift2\" sortField=\"jobName\" sortMode=\"single\" (onSort)=\"onSort(2)\">\r\n    <ng-template pTemplate=\"header\">\r\n      <tr style=\"font-size:16px\">\r\n        <th>Job</th>\r\n        <th>Employee</th>\r\n        <th>Restrictions</th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\">\r\n      <tr>\r\n        <td *ngIf=\"rowGroupMetadata2[rowData.jobName].index === rowIndex\" [attr.rowspan]=\"rowGroupMetadata2[rowData.jobName].size\">\r\n          {{rowData.jobName}}\r\n        </td>\r\n        <td>{{rowData.employeeName}}</td>\r\n        <td>{{rowData.restrictions}}</td>\r\n      </tr>\r\n    </ng-template>\r\n    <!--vacation table shown only if employees are on vacation for this shift-->\r\n    <ng-template pTemplate=\"summary\">\r\n      <p-table [value]=\"vacations2\" *ngIf=\"isVacation2\">\r\n        <ng-template pTemplate=\"caption\">\r\n          Vacations\r\n        </ng-template>\r\n        <ng-template pTemplate=\"header\">\r\n          <tr>\r\n            <th>Employee Name</th>\r\n            <th>Date Range</th>\r\n            <th>Note</th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-vacations2>\r\n          <tr>\r\n            <td>{{vacations2.employeeName}}</td>\r\n            <td>{{vacations2.dateRange}}</td>\r\n            <td>{{vacations2.note}}</td>\r\n          </tr>\r\n        </ng-template>\r\n      </p-table>\r\n    </ng-template>\r\n  </p-table>\r\n</div>\r\n\r\n<!--first set of tables for shift 3-->\r\n<div style=\"margin-left:15%; margin-right:15%; margin-top:3%; text-align:center\">\r\n  <h1 style=\"color: #e5d082;\">Shift 3 </h1>\r\n  <!--table with all scheduled employees in shift 3-->\r\n  <p-table #dt3 [columns]=\"scheduleShift3\" [value]=\"scheduleShift3\" sortField=\"jobName\" sortMode=\"single\" (onSort)=\"onSort(3)\">\r\n    <ng-template pTemplate=\"header\">\r\n      <tr style=\"font-size:16px\">\r\n        <th>Job</th>\r\n        <th>Employee</th>\r\n        <th>Restrictions</th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\">\r\n      <tr>\r\n        <td *ngIf=\"rowGroupMetadata3[rowData.jobName].index === rowIndex\" [attr.rowspan]=\"rowGroupMetadata3[rowData.jobName].size\">\r\n          {{rowData.jobName}}\r\n        </td>\r\n        <td>{{rowData.employeeName}}</td>\r\n        <td>{{rowData.restrictions}}</td>\r\n      </tr>\r\n    </ng-template>\r\n    <!--vacation table shown only if employees are on vacation for this shift-->\r\n    <ng-template pTemplate=\"summary\">\r\n      <p-table [value]=\"vacations3\" *ngIf=\"isVacation3\">\r\n        <ng-template pTemplate=\"caption\">\r\n          Vacations\r\n        </ng-template>\r\n        <ng-template pTemplate=\"header\">\r\n          <tr>\r\n            <th>Employee Name</th>\r\n            <th>Date Range</th>\r\n            <th>Note</th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-vacations3>\r\n          <tr>\r\n            <td>{{vacations3.employeeName}}</td>\r\n            <td>{{vacations3.dateRange}}</td>\r\n            <td>{{vacations3.note}}</td>\r\n          </tr>\r\n        </ng-template>\r\n      </p-table>\r\n    </ng-template>\r\n  </p-table>\r\n</div>\r\n\r\n<!--vacation table for employees that are not scheduled-->\r\n<div style=\"margin-left:15%; margin-right:15%; margin-top:3%; margin-bottom:3%; text-align:center\" *ngIf=\"isVacationNotScheduled\">\r\n  <h1 style=\"color: #e5d082;\">Not Scheduled</h1>\r\n  <p-table [value]=\"vacationNotScheduled\">\r\n    <ng-template pTemplate=\"caption\">\r\n      Vacations\r\n    </ng-template>\r\n    <ng-template pTemplate=\"header\">\r\n      <tr>\r\n        <th>Employee Name</th>\r\n        <th>Date Range</th>\r\n        <th>Note</th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-vacationNotScheduled>\r\n      <tr>\r\n        <td>{{vacationNotScheduled.employeeName}}</td>\r\n        <td>{{vacationNotScheduled.dateRange}}</td>\r\n        <td>{{vacationNotScheduled.note}}</td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table>\r\n</div>\r\n\r\n<p-toast position=\"top-center\" life=\"500\"></p-toast>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component/home.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component/home.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"margin-top: 9%;text-align:center;\">\r\n  <button class=\"button\" id=\"runScheduler\" (click)='onRunScheduler()'>\r\n    <span>Start Scheduling</span>\r\n  </button>\r\n  <!-- <p-table id=\"previousSchedules\" [value]=\"scheds\">\r\n    <ng-template pTemplate=\"header\">\r\n      <tr>\r\n        <th style=\"color:#E5D082;background: black; font-size: 20px\" *ngFor=\"let col of cols\">\r\n          {{ col.header }}\r\n        </th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-sched>\r\n      <tr>\r\n        <td style=\"color: #E5D082; background:darkslategrey; font-size: 18px; text-decoration: underline\" *ngFor=\"let col of cols\">\r\n          {{ sched[col.field] }}\r\n        </td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table> -->\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/scheduler/scheduler.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/scheduler/scheduler.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p-table [value]=\"templates\" [style]=\"{margin:'28px'}\">\r\n  <ng-template pTemplate=\"header\">\r\n    <tr style=\"font-size:16px\">\r\n      <th>Job</th>\r\n      <th>Shift 1</th>\r\n      <th>Shift 2</th>\r\n      <th>Shift 3</th>\r\n    </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-rowData>\r\n    <tr style=\"text-align:center\">\r\n      <td>\r\n        {{rowData.jobName}}\r\n      </td>\r\n      <td pEditableColumn>\r\n        <p-cellEditor>\r\n          <ng-template pTemplate=\"input\">\r\n            <input pInputText type=\"text\" [(ngModel)]=\"rowData.shift1\" required>\r\n          </ng-template>\r\n          <ng-template pTemplate=\"output\">\r\n            {{rowData.shift1}}\r\n          </ng-template>\r\n        </p-cellEditor>\r\n      </td>\r\n      <td pEditableColumn>\r\n        <p-cellEditor>\r\n          <ng-template pTemplate=\"input\">\r\n            <input pInputText type=\"text\" [(ngModel)]=\"rowData.shift2\" required>\r\n          </ng-template>\r\n          <ng-template pTemplate=\"output\">\r\n            {{rowData.shift2}}\r\n          </ng-template>\r\n        </p-cellEditor>\r\n      </td>\r\n      <td pEditableColumn>\r\n        <p-cellEditor>\r\n          <ng-template pTemplate=\"input\">\r\n            <input pInputText type=\"text\" [(ngModel)]=\"rowData.shift3\" required>\r\n          </ng-template>\r\n          <ng-template pTemplate=\"output\">\r\n            {{rowData.shift3}}\r\n          </ng-template>\r\n        </p-cellEditor>\r\n      </td>\r\n    </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"summary\" let-rowData>\r\n    <div *ngIf=\"vacations && vacations.length > 0\" style=\"margin-bottom: 8px\">\r\n      <div *ngFor=\"let employee of vacations\">\r\n        Clock Number: {{employee.clockNumber}}  |  Will be scheduled: {{employee.isEligible}}  |  Date Range: {{employee.dateRange}}\r\n      </div>\r\n    </div>\r\n    <div style=\"text-align:center;\">\r\n      <button type=\"button\" pButton icon=\"pi pi-plus\" (click)=\"onAddJob()\" label=\"Add/Remove Job\" style=\"margin-right: 10%\"></button>\r\n      <button type=\"button\" pButton icon=\"pi pi-plus\" (click)=\"showDialogToAdd()\" label=\"Add Vacation\" style=\"margin-left: 10%\"></button>\r\n    </div>\r\n  </ng-template>\r\n</p-table>\r\n\r\n<p-dialog header=\"Add Vacation\" [(visible)]=\"displayDialog\" (onHide)=\"onExitDialog()\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [style]=\"{width: '500px'}\" [contentStyle]=\"{'overflow':'visible'}\" [closable]=\"true\">\r\n  <div class=\"ui-g ui-fluid\" *ngIf=\"employeeNote\">\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-4\">\r\n        <label for=\"clockNumber\">Clock Number</label>\r\n      </div>\r\n      <div class=\"ui-g-8\">\r\n        <input pInputText id=\"clockNumber\" [(ngModel)]=\"employeeNote.clockNumber\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-4\">\r\n        <label for=\"dateRanges\">Date Range</label>\r\n      </div>\r\n      <div class=\"ui-g-8\">\r\n        <p-calendar id=\"dateRanges\" [(ngModel)]=\"dateRanges\" selectionMode=\"range\" [readonlyInput]=\"true\"></p-calendar>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-8\">\r\n        <label for=\"isEligible\">This person can be scheduled</label>\r\n      </div>\r\n      <div class=\"ui-g-4\">\r\n        <p-checkbox id=\"isEligible\" [(ngModel)]=\"employeeNote.isEligible\" binary=\"true\"></p-checkbox>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <p-footer>\r\n    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\" style=\"text-align:center\">\r\n      <button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"save()\" label=\"Save\"></button>\r\n    </div>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n<p-dialog header=\"Add/Remove Job\" [(visible)]=\"displayJobDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [style]=\"{width: '300px'}\" [contentStyle]=\"{'overflow':'visible'}\" [closable]=\"true\">\r\n  <div class=\"ui-g ui-fluid\">\r\n    <div class=\"ui-g-12\">\r\n      <p-dropdown [options]=\"allJobs\" [(ngModel)]=\"jobAdd\" placeholder=\"Select a Job\" optionLabel=\"jobName\"></p-dropdown>\r\n    </div>\r\n  </div>\r\n  <p-footer>\r\n    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\" style=\"text-align:center\">\r\n      <button type=\"button\" pButton icon=\"pi pi-plus\" (click)=\"onSaveAddJob()\" label=\"Add\"></button>\r\n      <button type=\"button\" pButton icon=\"pi pi-minus\" class=\"ui-button-danger\" (click)=\"onRemoveJob()\" label=\"Remove\"></button>\r\n    </div>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n<div style=\"text-align:center;\">\r\n  <button class=\"button\" id=\"runScheduler\" (click)=\"onRunScheduler()\">\r\n    <span>Run Scheduler </span>\r\n  </button>\r\n</div>\r\n\r\n<p-toast position=\"top-center\" life=\"500\"></p-toast>\r\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*styling class for background*/\r\nimg.bartonbarrel {\r\n  min-height: 100%;\r\n  min-width: 1024;\r\n  width: 100%;\r\n  height: auto;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: -1;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0JBQStCO0FBQy9CO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypzdHlsaW5nIGNsYXNzIGZvciBiYWNrZ3JvdW5kKi9cclxuaW1nLmJhcnRvbmJhcnJlbCB7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBtaW4td2lkdGg6IDEwMjQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_server_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.server.module */ "./src/app/app.server.module.ts");
/* harmony import */ var _modules_scheduler_scheduler_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/scheduler/scheduler.component */ "./src/app/modules/scheduler/scheduler.component.ts");
/* harmony import */ var _core_menu_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/menu/menu.component */ "./src/app/core/menu/menu.component.ts");
/* harmony import */ var _modules_home_home_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/home/home.module */ "./src/app/modules/home/home.module.ts");
/* harmony import */ var _modules_employees_employees_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/employees/employees.module */ "./src/app/modules/employees/employees.module.ts");
/* harmony import */ var _modules_history_history_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/history/history.module */ "./src/app/modules/history/history.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







//for scheduler component












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _modules_employees_employees_module__WEBPACK_IMPORTED_MODULE_16__["EmployeesModule"],
                _modules_home_home_module__WEBPACK_IMPORTED_MODULE_15__["HomeModule"],
                _modules_history_history_module__WEBPACK_IMPORTED_MODULE_17__["HistoryModule"],
                _app_server_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__["DropdownModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_5__["ToastModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"],
                primeng_checkbox__WEBPACK_IMPORTED_MODULE_8__["CheckboxModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_9__["DialogModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _modules_scheduler_scheduler_component__WEBPACK_IMPORTED_MODULE_13__["SchedulerComponent"],
                _core_menu_menu_component__WEBPACK_IMPORTED_MODULE_14__["MenuComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.server.module.ts":
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_home_home_component_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/home/home.component/home.component */ "./src/app/modules/home/home.component/home.component.ts");
/* harmony import */ var _modules_scheduler_scheduler_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scheduler/scheduler.component */ "./src/app/modules/scheduler/scheduler.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var routes = [
    { path: 'home', component: _modules_home_home_component_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'scheduler', component: _modules_scheduler_scheduler_component__WEBPACK_IMPORTED_MODULE_3__["SchedulerComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/core/menu/menu.component.css":
/*!**********************************************!*\
  !*** ./src/app/core/menu/menu.component.css ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* menuItems is the styling class for the menu tabs */\r\n.menuItems {\r\n  border: none;\r\n  background: none;\r\n  color: #e5d082;\r\n  padding: 1% 4%;\r\n  text-align: center;\r\n  font-size: 29px;\r\n  margin: 7px 2px;\r\n  opacity: 0.8;\r\n  transition: 0.3s;\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  z-index: 1;\r\n  vertical-align: text-bottom;\r\n  margin-top: 15px;\r\n}\r\n.menuItems:hover {\r\n  opacity: 1;\r\n  z-index: 1;\r\n}\r\n.menuItems.selected {\r\n  opacity: 1;\r\n}\r\n#currentPage {\r\n  opacity: 1;\r\n}\r\n/*messing around with trying to get the line between menu items like mock up*/\r\n.vl {\r\n  border-left: 2px solid #e5d082;\r\n  height: 20px;\r\n}\r\n/*class for logo*/\r\nimg.logo {\r\n  size: 40%;\r\n  width: auto;\r\n  height: 60px;\r\n  padding-bottom: 6px;\r\n  padding-left: 5%;\r\n  padding-right: 5%;\r\n}\r\n/*class for header line that sits between menu tabs and content*/\r\nhr.headerline {\r\n  color: #e5d082;\r\n  margin: 1.2% 4%;\r\n  border-top: 1px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9tZW51L21lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxREFBcUQ7QUFDckQ7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7QUFDWjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQSw2RUFBNkU7QUFDN0U7RUFDRSw4QkFBOEI7RUFDOUIsWUFBWTtBQUNkO0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFFQSxnRUFBZ0U7QUFDaEU7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb3JlL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogbWVudUl0ZW1zIGlzIHRoZSBzdHlsaW5nIGNsYXNzIGZvciB0aGUgbWVudSB0YWJzICovXHJcbi5tZW51SXRlbXMge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGNvbG9yOiAjZTVkMDgyO1xyXG4gIHBhZGRpbmc6IDElIDQlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI5cHg7XHJcbiAgbWFyZ2luOiA3cHggMnB4O1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5tZW51SXRlbXM6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLm1lbnVJdGVtcy5zZWxlY3RlZCB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuI2N1cnJlbnRQYWdlIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKm1lc3NpbmcgYXJvdW5kIHdpdGggdHJ5aW5nIHRvIGdldCB0aGUgbGluZSBiZXR3ZWVuIG1lbnUgaXRlbXMgbGlrZSBtb2NrIHVwKi9cclxuLnZsIHtcclxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNlNWQwODI7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4vKmNsYXNzIGZvciBsb2dvKi9cclxuaW1nLmxvZ28ge1xyXG4gIHNpemU6IDQwJTtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDZweDtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG59XHJcblxyXG4vKmNsYXNzIGZvciBoZWFkZXIgbGluZSB0aGF0IHNpdHMgYmV0d2VlbiBtZW51IHRhYnMgYW5kIGNvbnRlbnQqL1xyXG5oci5oZWFkZXJsaW5lIHtcclxuICBjb2xvcjogI2U1ZDA4MjtcclxuICBtYXJnaW46IDEuMiUgNCU7XHJcbiAgYm9yZGVyLXRvcDogMXB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/core/menu/menu.component.ts":
/*!*********************************************!*\
  !*** ./src/app/core/menu/menu.component.ts ***!
  \*********************************************/
/*! exports provided: menu, MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menu", function() { return menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var menu;
(function (menu) {
    menu[menu["home"] = 1] = "home";
    menu[menu["scheduler"] = 2] = "scheduler";
    menu[menu["employees"] = 3] = "employees";
    menu[menu["history"] = 4] = "history";
})(menu || (menu = {}));
var MenuComponent = /** @class */ (function () {
    function MenuComponent(router) {
        this.router = router;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.menuChange = function (event) {
        console.log(event);
        switch (event) {
            case (menu.home): {
                this.router.navigate(['home']);
                break;
            }
            case (menu.scheduler): {
                this.router.navigate(['scheduler']);
                break;
            }
            case (menu.employees): {
                this.router.navigate(['employees']);
                break;
            }
            case (menu.history): {
                this.router.navigate(['history']);
                break;
            }
        }
    };
    MenuComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __importDefault(__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/menu/menu.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./menu.component.css */ "./src/app/core/menu/menu.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/core/models/EmployeeNoteObject.ts":
/*!***************************************************!*\
  !*** ./src/app/core/models/EmployeeNoteObject.ts ***!
  \***************************************************/
/*! exports provided: EmployeeNoteObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeNoteObject", function() { return EmployeeNoteObject; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
            this.dateRange = tmpStr.concat(' - ', dateRanges[1].toLocaleDateString());
        }
        else {
            this.dateRange = tmpStr;
        }
    };
    return EmployeeNoteObject;
}());



/***/ }),

/***/ "./src/app/core/models/EmployeeObject.ts":
/*!***********************************************!*\
  !*** ./src/app/core/models/EmployeeObject.ts ***!
  \***********************************************/
/*! exports provided: EmployeeObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeObject", function() { return EmployeeObject; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var EmployeeObject = /** @class */ (function () {
    function EmployeeObject() {
        this.seniorityNumber = this.seniorityNumber ? this.seniorityNumber : null;
        this.clockNumber = this.clockNumber ? this.clockNumber : null;
        this.employeeName = this.employeeName ? this.employeeName : null;
        this.shiftPreference = this.shiftPreference ? this.shiftPreference : null;
        this.jobName = this.jobName ? this.jobName : null;
        this.absence = this.absence ? this.absence : null;
        this.restrictions = this.restrictions ? this.restrictions : null;
        this.jobId = this.jobId ? this.jobId : null;
    }
    return EmployeeObject;
}());



/***/ }),

/***/ "./src/app/core/models/FullScheduleObject.ts":
/*!***************************************************!*\
  !*** ./src/app/core/models/FullScheduleObject.ts ***!
  \***************************************************/
/*! exports provided: FullScheduleObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullScheduleObject", function() { return FullScheduleObject; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var FullScheduleObject = /** @class */ (function () {
    function FullScheduleObject() {
        this.schedules = this.schedules ? this.schedules : [];
        this.employeeNotes = this.employeeNotes ? this.employeeNotes : [];
    }
    return FullScheduleObject;
}());



/***/ }),

/***/ "./src/app/core/models/JobObject.ts":
/*!******************************************!*\
  !*** ./src/app/core/models/JobObject.ts ***!
  \******************************************/
/*! exports provided: JobObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobObject", function() { return JobObject; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var JobObject = /** @class */ (function () {
    function JobObject() {
        this.jobId = this.jobId ? this.jobId : null;
        this.jobName = this.jobName ? this.jobName : null;
    }
    return JobObject;
}());



/***/ }),

/***/ "./src/app/core/models/TemplateObject.ts":
/*!***********************************************!*\
  !*** ./src/app/core/models/TemplateObject.ts ***!
  \***********************************************/
/*! exports provided: TemplateObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateObject", function() { return TemplateObject; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var TemplateObject = /** @class */ (function () {
    function TemplateObject() {
        this.jobId = this.jobId ? this.jobId : null;
        this.jobName = this.jobName ? this.jobName : null;
        this.departmentName = this.departmentName ? this.departmentName : null;
        this.shift1 = this.shift1 ? this.shift1 : null;
        this.shift2 = this.shift2 ? this.shift2 : null;
        this.shift3 = this.shift3 ? this.shift3 : null;
    }
    return TemplateObject;
}());



/***/ }),

/***/ "./src/app/core/services/employee.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/employee.service.ts ***!
  \***************************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_baseClasses_service_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/baseClasses/service-base */ "./src/app/shared/baseClasses/service-base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var EmployeeService = /** @class */ (function (_super) {
    __extends(EmployeeService, _super);
    function EmployeeService(_httpClient) {
        var _this = _super.call(this, _httpClient) || this;
        _this._httpClient = _httpClient;
        return _this;
    }
    // #Region Get
    EmployeeService.prototype.getAllEmployees = function () {
        return this.get('GetEmployeeData');
    };
    EmployeeService.prototype.getJobs = function () {
        return this.get('GetJobs');
    };
    // #EndRegion Get
    EmployeeService.prototype.updateEmployeeById = function (employee) {
        console.log(employee);
        return this.post('UpdateEmployeeById', employee);
    };
    EmployeeService.prototype.insertEmployee = function (employee) {
        return this.post('InsertEmployee', employee);
    };
    EmployeeService.prototype.insertJob = function (job) {
        return this.post('InsertJob', job);
    };
    EmployeeService.prototype.deleteEmployee = function (employee) {
        return this.post('DeleteEmployee', employee);
    };
    EmployeeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    EmployeeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], EmployeeService);
    return EmployeeService;
}(_shared_baseClasses_service_base__WEBPACK_IMPORTED_MODULE_2__["ServiceBase"]));



/***/ }),

/***/ "./src/app/core/services/scheduler.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/scheduler.service.ts ***!
  \****************************************************/
/*! exports provided: SchedulerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulerService", function() { return SchedulerService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_baseClasses_service_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/baseClasses/service-base */ "./src/app/shared/baseClasses/service-base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var SchedulerService = /** @class */ (function (_super) {
    __extends(SchedulerService, _super);
    function SchedulerService(_httpClient) {
        var _this = _super.call(this, _httpClient) || this;
        _this._httpClient = _httpClient;
        return _this;
    }
    // #Region Gets
    SchedulerService.prototype.getCurrentTemplate = function () {
        return this.get('GetCurrentTemplate');
    };
    //Get Current Schedule when history page opens
    SchedulerService.prototype.getCurrentSchedule = function () {
        return this.get('GetCurrentSchedule');
    };
    //Get Current Schedule when history page opens
    SchedulerService.prototype.getFullSchedule = function () {
        return this.get('GetFullSchedule');
    };
    SchedulerService.prototype.generateWeekdaySchedule = function () {
        return this.get('GenerateWeekdaySchedule');
    };
    SchedulerService.prototype.getScheduleHistoryDates = function () {
        return this.get('GetScheduleHistoryDates');
    };
    // #EndRegion Gets
    // #Region Posts
    SchedulerService.prototype.insertNewTemplates = function (templates) {
        return this.post('InsertNewTemplates', templates);
    };
    SchedulerService.prototype.insertEmployeeNotes = function (employeeNotes) {
        return this.post('InsertEmployeeNotes', employeeNotes);
    };
    SchedulerService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    SchedulerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], SchedulerService);
    return SchedulerService;
}(_shared_baseClasses_service_base__WEBPACK_IMPORTED_MODULE_2__["ServiceBase"]));



/***/ }),

/***/ "./src/app/modules/employees/employees-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/employees/employees-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: EmployeesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesRoutingModule", function() { return EmployeesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employees_component_employees_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employees.component/employees.component */ "./src/app/modules/employees/employees.component/employees.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var routes = [
    { path: 'employees', component: _employees_component_employees_component__WEBPACK_IMPORTED_MODULE_2__["EmployeesComponent"] }
];
var EmployeesRoutingModule = /** @class */ (function () {
    function EmployeesRoutingModule() {
    }
    EmployeesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], EmployeesRoutingModule);
    return EmployeesRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/employees/employees.component/employees.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/employees/employees.component/employees.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media screen and (max-width: 64em) {\r\n  :host ::ng-deep .ui-table .ui-table-thead > tr > th {\r\n    top: 100px;\r\n  }\r\n}\r\n\r\nbody .ui-widget {\r\n  font-family: \"Open Sans\", \"Helvetica Neue\", sans-serif;\r\n  font-size: 14px !important;\r\n  text-decoration: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9lbXBsb3llZXMvZW1wbG95ZWVzLmNvbXBvbmVudC9lbXBsb3llZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxzREFBc0Q7RUFDdEQsMEJBQTBCO0VBQzFCLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZW1wbG95ZWVzL2VtcGxveWVlcy5jb21wb25lbnQvZW1wbG95ZWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NGVtKSB7XHJcbiAgOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZSAudWktdGFibGUtdGhlYWQgPiB0ciA+IHRoIHtcclxuICAgIHRvcDogMTAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5ib2R5IC51aS13aWRnZXQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/modules/employees/employees.component/employees.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/employees/employees.component/employees.component.ts ***!
  \******************************************************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_models_EmployeeObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/models/EmployeeObject */ "./src/app/core/models/EmployeeObject.ts");
/* harmony import */ var _core_models_JobObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/models/JobObject */ "./src/app/core/models/JobObject.ts");
/* harmony import */ var _core_services_employee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/employee.service */ "./src/app/core/services/employee.service.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent(router, employeeService, messageService) {
        this.router = router;
        this.employeeService = employeeService;
        this.messageService = messageService;
        this.clonedEmployees = {};
        //add job dialog variables
        this.addJobDialog = false;
        this.addJobName = '';
        //add new employee dialog variables
        this.newEmployee = new _core_models_EmployeeObject__WEBPACK_IMPORTED_MODULE_3__["EmployeeObject"]();
        this.displayDialog = false;
        //delete employee dialog variables
        this.deletionDialog = false; // dialog to find and delete employee
        this.confirmDeletion = false; // dialog to confirm which employee will be deleted
        this.deleteClockNumber = null;
    }
    EmployeesComponent.prototype.ngOnInit = function () {
        this.getAllEmployees();
        this.getJobs();
        //console.log('employees has been loaded');
    };
    EmployeesComponent.prototype.getAllEmployees = function () {
        var _this = this;
        this.employeeService.getAllEmployees().subscribe(function (res) {
            if (res) {
                _this.employees = res;
                //console.log(this.employees[0].jobName);
            }
            else {
                _this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'No employee data found.' });
            }
        });
    };
    EmployeesComponent.prototype.getJobs = function () {
        var _this = this;
        this.employeeService.getJobs().subscribe(function (res) {
            if (res) {
                _this.jobs = res;
                //console.log(this.jobs);
            }
            else {
                _this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'No job data found.' });
            }
        });
    };
    //TODO: How can I update seniorityNumber? --> try an invisible column in the object like jobid
    EmployeesComponent.prototype.onRowEditInit = function (employee) {
        this.clonedEmployees[employee.clockNumber] = __assign({}, employee);
    };
    // Allows edited changes to be saved in the UI as an EmployeeObject. Takes an employee object as the one to be saved.
    // Invoked after edit is confirmed.
    EmployeesComponent.prototype.onRowEditSave = function (employee) {
        this.updateEmployee(employee);
        //refresh employees
        this.getAllEmployees();
    };
    // Updates employee takes an employee object as a parameter. Retrives updated employees table if update was successful.
    // Used in onRowEditSave.
    EmployeesComponent.prototype.updateEmployee = function (employee) {
        var _this = this;
        this.employeeService.updateEmployeeById(employee)
            .subscribe(function (response) {
            //console.log("update and get");
            if (response) {
                _this.getAllEmployees();
                delete _this.clonedEmployees[employee.clockNumber];
                _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Employee was updated' });
            }
            else {
                _this.messageService.add({ severity: 'error', summary: 'Failure', detail: 'Employee could not be updated' });
            }
        });
    };
    // Allows edited changes to be discarded in the UI. Takes an employee object which is being edited.
    // Invoked if edit is not confirmed.
    EmployeesComponent.prototype.onRowEditCancel = function (employee, index) {
        this.employees[index] = this.clonedEmployees[employee.clockNumber];
        delete this.clonedEmployees[employee.clockNumber];
    };
    //shows the add job dialog
    EmployeesComponent.prototype.onShowAddJobDialog = function () {
        this.addJobDialog = true;
        this.addJobName = '';
    };
    //add job to job table 
    EmployeesComponent.prototype.onAddJob = function () {
        var _this = this;
        var temp;
        var newJob = new _core_models_JobObject__WEBPACK_IMPORTED_MODULE_4__["JobObject"]();
        //verify fields exist
        if (this.addJobName && this.addJobName != '') {
            //verify job name doesn't already exist
            temp = this.jobs.filter(function (job) { return job.jobName == _this.addJobName; });
            if (temp && temp.length > 0) {
                this.messageService.add({ severity: 'error', summary: 'Failure', detail: 'The job name already exist.' });
            }
            else {
                newJob.jobName = this.addJobName;
                newJob.jobId = this.jobs.length + 1;
                this.employeeService.insertJob(newJob).subscribe(function (res) {
                    if (res) {
                        _this.getAllEmployees();
                        _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'The job was added.' });
                    }
                    else {
                        _this.messageService.add({ severity: 'error', summary: 'Failure', detail: 'The job failed while attempting to be added.' });
                    }
                });
            }
        }
        else {
            this.messageService.add({ severity: 'error', summary: 'Failure', detail: 'Please enter a job name.' });
        }
    };
    //shows the add new employeeObject
    //initialize all data in the dialog
    EmployeesComponent.prototype.onShowAddDialog = function () {
        this.newEmployee = new _core_models_EmployeeObject__WEBPACK_IMPORTED_MODULE_3__["EmployeeObject"]();
        this.newEmployee.seniorityNumber = this.employees.length + 1;
        this.selectedJob = new _core_models_JobObject__WEBPACK_IMPORTED_MODULE_4__["JobObject"]();
        this.displayDialog = true;
    };
    //adds new employee to the employee table
    EmployeesComponent.prototype.onAddNewEmployee = function () {
        var _this = this;
        //verify new employee is ready to be added
        if (this.newEmployee && this.employeeObjectCheck()) {
            this.employeeService.insertEmployee(this.newEmployee)
                .subscribe(function (res) {
                if (res) {
                    _this.getAllEmployees();
                    _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Employee was added.' });
                    //once employee is added: refresh table, remove dialog contents, close dialog
                    _this.getAllEmployees;
                    _this.newEmployee = null;
                    _this.selectedJob = null;
                    _this.displayDialog = false;
                }
                else {
                    _this.messageService.add({ severity: 'error', summary: 'Failure', detail: 'Employee could not be added.' });
                }
            });
        }
        else {
            this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Please fill out the the dialog' });
        }
    };
    //verify all fields are there
    EmployeesComponent.prototype.employeeObjectCheck = function () {
        var isValid = true;
        this.newEmployee.absence = this.newEmployee.absence ? this.newEmployee.absence : '';
        this.newEmployee.restrictions = this.newEmployee.restrictions ? this.newEmployee.restrictions : '';
        // set job using data from drop down if it exist
        if (this.selectedJob.jobId && this.selectedJob.jobName) {
            this.newEmployee.jobId = this.selectedJob.jobId;
            this.newEmployee.jobName = this.selectedJob.jobName;
        }
        else {
            this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Please select a job for the employee.' });
            isValid = false;
        }
        if (!this.newEmployee.clockNumber) {
            this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Please select a clock number for the employee.' });
            isValid = false;
        }
        if (!this.newEmployee.employeeName) {
            this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Please select a employee name for the employee.' });
            isValid = false;
        }
        if (!this.newEmployee.seniorityNumber) {
            this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Please enter a seniority number for the employee.' });
            isValid = false;
        }
        if (!this.newEmployee.shiftPreference) {
            this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Please select a job for the employee.' });
            isValid = false;
        }
        else if (this.newEmployee.shiftPreference == 0 || this.newEmployee.shiftPreference > 3) {
            //no actual error was discussed, but this could break the algorithm
            this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Employee is being assigned a shift preference other than 1, 2, or 3' });
            isValid = false;
        }
        return isValid;
    };
    EmployeesComponent.prototype.onHideDialog = function () {
        this.newEmployee = null;
        this.selectedJob = null;
        this.displayDialog = false;
    };
    // #Region Delete Employee 
    EmployeesComponent.prototype.onShowDeleteDialog = function () {
        this.deletionDialog = true;
    };
    EmployeesComponent.prototype.onConfirmDeletion = function () {
        var _this = this;
        this.deleteEmployee = new _core_models_EmployeeObject__WEBPACK_IMPORTED_MODULE_3__["EmployeeObject"]();
        var temp = this.employees.filter(function (emp) { return emp.clockNumber == _this.deleteClockNumber; });
        console.log(this.employees);
        console.log(this.deleteClockNumber);
        console.log(temp);
        if (temp && temp.length > 0) {
            // then the employee exist and show employee on screen
            this.deleteEmployee = temp[0];
            this.confirmDeletion = true;
        }
        else {
            // give user a notice that user does not exist
            this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Employee was not found.' });
        }
    };
    //cancel button invokes this method to clean up and dismiss dialog
    EmployeesComponent.prototype.onCancelDelete = function () {
        this.deleteClockNumber = null;
        this.deleteEmployee = new _core_models_EmployeeObject__WEBPACK_IMPORTED_MODULE_3__["EmployeeObject"]();
        this.deletionDialog = false;
    };
    //delete button inside the deletion dialog to remove employee from table
    EmployeesComponent.prototype.onDeleteEmployee = function () {
        var _this = this;
        this.employeeService.deleteEmployee(this.deleteEmployee)
            .subscribe(function (response) {
            if (response) {
                _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Employee was deleted.' });
            }
            else {
                _this.messageService.add({ severity: 'error', summary: 'Failure', detail: 'Employee could not be deleted.' });
            }
            _this.getAllEmployees();
        });
        this.deleteClockNumber = null;
        this.deleteEmployee = new _core_models_EmployeeObject__WEBPACK_IMPORTED_MODULE_3__["EmployeeObject"]();
        this.deletionDialog = false;
        this.confirmDeletion = false;
    };
    EmployeesComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _core_services_employee_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }
    ]; };
    EmployeesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employees',
            template: __importDefault(__webpack_require__(/*! raw-loader!./employees.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/employees/employees.component/employees.component.html")).default,
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]],
            styles: [__importDefault(__webpack_require__(/*! ./employees.component.css */ "./src/app/modules/employees/employees.component/employees.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _core_services_employee_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "./src/app/modules/employees/employees.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/employees/employees.module.ts ***!
  \*******************************************************/
/*! exports provided: EmployeesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesModule", function() { return EmployeesModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _employees_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./employees-routing.module */ "./src/app/modules/employees/employees-routing.module.ts");
/* harmony import */ var _employees_component_employees_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./employees.component/employees.component */ "./src/app/modules/employees/employees.component/employees.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};











var EmployeesModule = /** @class */ (function () {
    function EmployeesModule() {
    }
    EmployeesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__["DropdownModule"],
                _employees_routing_module__WEBPACK_IMPORTED_MODULE_9__["EmployeesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_7__["ToastModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_6__["DialogModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_5__["TableModule"]
            ],
            declarations: [
                _employees_component_employees_component__WEBPACK_IMPORTED_MODULE_10__["EmployeesComponent"]
            ]
        })
    ], EmployeesModule);
    return EmployeesModule;
}());



/***/ }),

/***/ "./src/app/modules/history/history-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/history/history-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: HistoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryRoutingModule", function() { return HistoryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _history_component_history_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./history.component/history.component */ "./src/app/modules/history/history.component/history.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var routes = [
    { path: 'history', component: _history_component_history_component__WEBPACK_IMPORTED_MODULE_2__["HistoryComponent"] },
    { path: 'history/:id', component: _history_component_history_component__WEBPACK_IMPORTED_MODULE_2__["HistoryComponent"] }
];
var HistoryRoutingModule = /** @class */ (function () {
    function HistoryRoutingModule() {
    }
    HistoryRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HistoryRoutingModule);
    return HistoryRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/history/history.component/history.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/modules/history/history.component/history.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#excelButton {\r\n  margin-right: 0.5em;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  text-align: center; \r\n  font-size: larger;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9oaXN0b3J5L2hpc3RvcnkuY29tcG9uZW50L2hpc3RvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQvaGlzdG9yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2V4Y2VsQnV0dG9uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/modules/history/history.component/history.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/history/history.component/history.component.ts ***!
  \************************************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_services_scheduler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/scheduler.service */ "./src/app/core/services/scheduler.service.ts");
/* harmony import */ var _core_models_FullScheduleObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/models/FullScheduleObject */ "./src/app/core/models/FullScheduleObject.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var HistoryComponent = /** @class */ (function () {
    function HistoryComponent(messageService, schedulerService) {
        this.messageService = messageService;
        this.schedulerService = schedulerService;
        //variables received from api calls
        this.fullSchedule = new _core_models_FullScheduleObject__WEBPACK_IMPORTED_MODULE_3__["FullScheduleObject"];
        this.schedules = [];
        this.vacations = [];
        //schedules derived from fullSchedule.schedules
        //rowGroupMetadata is utilized in the row grouping method for displaying the table
        this.scheduleShift1 = [];
        this.rowGroupMetadata1 = {};
        this.scheduleShift2 = [];
        this.rowGroupMetadata2 = {};
        this.scheduleShift3 = [];
        this.rowGroupMetadata3 = {};
        //vacations are derived from fullSchedule.vacations
        this.vacations1 = [];
        this.vacations2 = [];
        this.vacations3 = [];
        this.vacationNotScheduled = [];
        //holds values for if there is anything in the vacation array to be utilized
        //tables are only rendered if data is in the vacation array for that shift
        this.isVacation1 = false;
        this.isVacation2 = false;
        this.isVacation3 = false;
        this.isVacationNotScheduled = false;
    }
    HistoryComponent.prototype.ngOnInit = function () {
        this.getCurrentSchedules();
        //console.log('history has been loaded');
    };
    //gets the current schedule
    //utilized everytime page opens due to the schedule being generated on the scheduler page before being routed here
    HistoryComponent.prototype.getCurrentSchedules = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.schedulerService.getFullSchedule().subscribe(function (res) {
                    if (res) {
                        //console.log(res);
                        _this.fullSchedule = res;
                        if (_this.fullSchedule.schedules && _this.fullSchedule.schedules.length > 0) {
                            _this.formatData(_this.fullSchedule);
                        }
                        else {
                            _this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Failed to retreive the current schedule.' });
                        }
                    }
                    else {
                        _this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Failed to retreive the full schedule.' });
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    //formats the data retrieved from the api
    //separates schedules, sorts them, and calls row grouping for displaying in markup and excel
    //separates vacations 
    HistoryComponent.prototype.formatData = function (fullSchedule) {
        this.schedules = fullSchedule.schedules;
        this.vacations = fullSchedule.employeeNotes ? fullSchedule.employeeNotes : [];
        //sort job names and shift
        this.schedules.sort(function (a, b) {
            return a.jobName.localeCompare(b.jobName);
        });
        this.schedules.sort(function (a, b) { return a.shift - b.shift; });
        //turn entire schedule into 3 separate schedules
        this.separateSchedules();
        if (this.vacations && this.vacations.length > 0) {
            this.separateVacations();
        }
        else {
            this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'No vacations were found.' });
        }
        //run the rowgroup method to create each table
        this.rowGroupMetadata1 = this.updateRowGroupMetaData(this.scheduleShift1);
        this.rowGroupMetadata2 = this.updateRowGroupMetaData(this.scheduleShift2);
        this.rowGroupMetadata3 = this.updateRowGroupMetaData(this.scheduleShift3);
    };
    //utilized in the table
    HistoryComponent.prototype.onSort = function (tableNumber) {
        switch (tableNumber) {
            case 1: {
                this.rowGroupMetadata1 = this.updateRowGroupMetaData(this.scheduleShift1);
                break;
            }
            case 2: {
                this.rowGroupMetadata2 = this.updateRowGroupMetaData(this.scheduleShift2);
                break;
            }
            case 3: {
                this.rowGroupMetadata3 = this.updateRowGroupMetaData(this.scheduleShift3);
                break;
            }
        }
    };
    //sorts by jobs for rowGrouping --documentation can be found on rowGroup for primeng
    HistoryComponent.prototype.updateRowGroupMetaData = function (shiftSchedule) {
        var rowGroupMetadata = {};
        //verify object is filled
        if (shiftSchedule) {
            for (var i = 0; i < shiftSchedule.length; i++) {
                var rowData = shiftSchedule[i];
                //start indexing by job for row group
                var jobName = rowData.jobName;
                //if this is the first item, start the object array
                if (i == 0) {
                    rowGroupMetadata[jobName] = { index: 0, size: 1 };
                }
                else {
                    var previousRowData = shiftSchedule[i - 1];
                    var previousRowGroup = previousRowData.jobName;
                    if (jobName === previousRowGroup)
                        rowGroupMetadata[jobName].size++;
                    else
                        rowGroupMetadata[jobName] = { index: i, size: 1 };
                }
            }
        }
        return rowGroupMetadata;
    };
    HistoryComponent.prototype.separateSchedules = function () {
        var _this = this;
        this.schedules.forEach(function (s) {
            switch (s.shift) {
                case 1: {
                    _this.scheduleShift1.push(s);
                    break;
                }
                case 2: {
                    _this.scheduleShift2.push(s);
                    break;
                }
                case 3: {
                    _this.scheduleShift3.push(s);
                    break;
                }
            }
        });
    };
    HistoryComponent.prototype.separateVacations = function () {
        var _this = this;
        this.vacations.forEach(function (s) {
            if (s.isEligible == true) {
                switch (s.shift) {
                    case 1: {
                        _this.vacations1.push(s);
                        break;
                    }
                    case 2: {
                        _this.vacations2.push(s);
                        break;
                    }
                    case 3: {
                        _this.vacations3.push(s);
                        break;
                    }
                }
            }
            else {
                _this.vacationNotScheduled.push(s);
            }
        });
        //dictates whether the vacation table is shown
        if (this.vacations1 && this.vacations1.length > 0) {
            this.isVacation1 = true;
        }
        if (this.vacations2 && this.vacations2.length > 0) {
            this.isVacation2 = true;
        }
        if (this.vacations3 && this.vacations3.length > 0) {
            this.isVacation3 = true;
        }
        if (this.vacationNotScheduled && this.vacationNotScheduled.length > 0) {
            this.isVacationNotScheduled = true;
        }
    };
    //set up workbook before saving it
    HistoryComponent.prototype.exportExcel = function () {
        var _this = this;
        __webpack_require__.e(/*! import() | xlsx */ "xlsx").then(__webpack_require__.t.bind(null, /*! xlsx */ "./node_modules/xlsx/xlsx.js", 7)).then(function (xlsx) {
            var workbook;
            var fileName;
            //set up each workbook 
            fileName = "FullSchedule_";
            var worksheet1 = xlsx.utils.json_to_sheet(_this.scheduleShift1);
            var worksheet2 = xlsx.utils.json_to_sheet(_this.scheduleShift2);
            var worksheet3 = xlsx.utils.json_to_sheet(_this.scheduleShift3);
            //there are any vacations just give them all because its unnecessary to run through all the possible options
            if (_this.vacations && _this.vacations.length > 0) {
                var vacayWorksheet1 = xlsx.utils.json_to_sheet(_this.vacations1);
                var vacayWorksheet2 = xlsx.utils.json_to_sheet(_this.vacations2);
                var vacayWorksheet3 = xlsx.utils.json_to_sheet(_this.vacations3);
                var notScheduledWorksheet3 = xlsx.utils.json_to_sheet(_this.vacationNotScheduled);
                workbook = {
                    Sheets: { 'Shift 1': worksheet1, 'Shift 2': worksheet2, 'Shift 3': worksheet3, 'Vacations 1': vacayWorksheet1, 'Vacations 2': vacayWorksheet2, 'Vacations 3': vacayWorksheet3, 'Not Scheduled': notScheduledWorksheet3 },
                    SheetNames: ['Shift 1', 'Shift 2', 'Shift 3', 'Vacations 1', 'Vacations 2', 'Vacations 3', 'Not Scheduled']
                };
            }
            else {
                workbook = {
                    Sheets: { 'Shift 1': worksheet1, 'Shift 2': worksheet2, 'Shift 3': worksheet3 },
                    SheetNames: ['Shift 1', 'Shift 2', 'Shift 3']
                };
            }
            //put each worksheet into the entire workbook using an array
            var excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
            _this.saveAsExcelFile(excelBuffer, fileName);
        });
    };
    //save file
    HistoryComponent.prototype.saveAsExcelFile = function (buffer, fileName) {
        __webpack_require__.e(/*! import() | file-saver */ "file-saver").then(__webpack_require__.t.bind(null, /*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js", 7)).then(function (FileSaver) {
            var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            var EXCEL_EXTENSION = '.xlsx';
            var tempDateString = new Date().toLocaleDateString();
            var dateString = tempDateString ? tempDateString.replace("/", ".").replace("/", ".") : new Date().getTime();
            var data = new Blob([buffer], {
                type: EXCEL_TYPE
            });
            FileSaver.saveAs(data, fileName + dateString + EXCEL_EXTENSION);
        });
    };
    HistoryComponent.ctorParameters = function () { return [
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"] },
        { type: _core_services_scheduler_service__WEBPACK_IMPORTED_MODULE_2__["SchedulerService"] }
    ]; };
    HistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-history',
            template: __importDefault(__webpack_require__(/*! raw-loader!./history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/history/history.component/history.component.html")).default,
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"]],
            styles: [__importDefault(__webpack_require__(/*! ./history.component.css */ "./src/app/modules/history/history.component/history.component.css")).default]
        }),
        __metadata("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"], _core_services_scheduler_service__WEBPACK_IMPORTED_MODULE_2__["SchedulerService"]])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/modules/history/history.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/history/history.module.ts ***!
  \***************************************************/
/*! exports provided: HistoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryModule", function() { return HistoryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _history_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./history-routing.module */ "./src/app/modules/history/history-routing.module.ts");
/* harmony import */ var _history_component_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.component/history.component */ "./src/app/modules/history/history.component/history.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var HistoryModule = /** @class */ (function () {
    function HistoryModule() {
    }
    HistoryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_2__["ButtonModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_3__["TableModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_4__["ToastModule"],
                _history_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistoryRoutingModule"]
            ],
            declarations: [
                _history_component_history_component__WEBPACK_IMPORTED_MODULE_6__["HistoryComponent"]
            ]
        })
    ], HistoryModule);
    return HistoryModule;
}());



/***/ }),

/***/ "./src/app/modules/home/home.component/home.component.css":
/*!****************************************************************!*\
  !*** ./src/app/modules/home/home.component/home.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*styling classes for button graphic*/\r\n.button {\r\n  display: inline-block;\r\n  background: none;\r\n  border-radius: 4px;\r\n  border: 2px solid #e5d082;\r\n  color: #e5d082;\r\n  text-align: center;\r\n  font-size: 28px;\r\n  padding: 20px;\r\n  width: 300px;\r\n  transition: all 0.5s;\r\n  cursor: pointer;\r\n  margin: 5px;\r\n  margin-top: 6%;\r\n}\r\n.button span {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  position: relative;\r\n  transition: 0.5s;\r\n}\r\n.button span:after {\r\n  content: \"\\00bb\";\r\n  position: absolute;\r\n  opacity: 0;\r\n  top: 0;\r\n  right: -20px;\r\n  transition: 0.5s;\r\n}\r\n.button:hover span {\r\n  padding-right: 25px;\r\n}\r\n.button:hover span:after {\r\n  opacity: 1;\r\n  right: 0;\r\n}\r\n/*styling on home page*/\r\n#runScheduler {\r\n    vertical-align:middle;\r\n    display: inline-block;\r\n}\r\n#previousSchedules {\r\n    display: inline-table;\r\n    width: 500px;\r\n    margin-left: 250px;\r\n}\r\nbody .ui-widget {\r\n    font-family: \"Open Sans\", \"Helvetica Neue\", sans-serif;\r\n    font-size: 20px !important;\r\n    text-decoration: none;\r\n}\r\n/* TODO: use id's for table styling\r\n#tableHeader {\r\n\r\n}\r\n\r\n#tableRows {\r\n\r\n}\r\n*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWUuY29tcG9uZW50L2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBcUM7QUFDckM7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE1BQU07RUFDTixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFVBQVU7RUFDVixRQUFRO0FBQ1Y7QUFFQSx1QkFBdUI7QUFDdkI7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksc0RBQXNEO0lBQ3RELDBCQUEwQjtJQUMxQixxQkFBcUI7QUFDekI7QUFFQTs7Ozs7Ozs7Q0FRQyIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9ob21lLmNvbXBvbmVudC9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKnN0eWxpbmcgY2xhc3NlcyBmb3IgYnV0dG9uIGdyYXBoaWMqL1xyXG4uYnV0dG9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2U1ZDA4MjtcclxuICBjb2xvcjogI2U1ZDA4MjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW46IDVweDtcclxuICBtYXJnaW4tdG9wOiA2JTtcclxufVxyXG5cclxuLmJ1dHRvbiBzcGFuIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4uYnV0dG9uIHNwYW46YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXFwwMGJiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAtMjBweDtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVyIHNwYW4ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5idXR0b246aG92ZXIgc3BhbjphZnRlciB7XHJcbiAgb3BhY2l0eTogMTtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLypzdHlsaW5nIG9uIGhvbWUgcGFnZSovXHJcbiNydW5TY2hlZHVsZXIge1xyXG4gICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4jcHJldmlvdXNTY2hlZHVsZXMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1MHB4O1xyXG59XHJcblxyXG5ib2R5IC51aS13aWRnZXQge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4vKiBUT0RPOiB1c2UgaWQncyBmb3IgdGFibGUgc3R5bGluZ1xyXG4jdGFibGVIZWFkZXIge1xyXG5cclxufVxyXG5cclxuI3RhYmxlUm93cyB7XHJcblxyXG59XHJcbiovXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/modules/home/home.component/home.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/home/home.component/home.component.ts ***!
  \***************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_services_scheduler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/scheduler.service */ "./src/app/core/services/scheduler.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


//import { HistoryObject } from '../../../core/models/HistoryObject';


var HomeComponent = /** @class */ (function () {
    //history: Array<HistoryObject>;
    function HomeComponent(router, httpService, schedulerService) {
        this.router = router;
        this.httpService = httpService;
        this.schedulerService = schedulerService;
        this.title = 'BartonApp';
    }
    HomeComponent.prototype.ngOnInit = function () {
        //this.getPreviousSchedules();
        //this.getScheduleHistory();
        this.intializeScheduleHistoryTable();
        //console.log('home has been loaded');
    };
    HomeComponent.prototype.onRunScheduler = function () {
        this.router.navigate(['/scheduler']);
    };
    //TODO: work on this
    HomeComponent.prototype.onPreviousSchedule = function () {
        this.router.navigate(['/history']);
    };
    HomeComponent.prototype.intializeScheduleHistoryTable = function () {
        this.colsHistory = [
            { field: 'scheduleDate', header: 'Weekday Schedules' },
            { field: 'isWeekend', header: 'Weekend Schedules' }
        ];
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _core_services_scheduler_service__WEBPACK_IMPORTED_MODULE_3__["SchedulerService"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component/home.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./home.component.css */ "./src/app/modules/home/home.component/home.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _core_services_scheduler_service__WEBPACK_IMPORTED_MODULE_3__["SchedulerService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/home.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_component_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component/home.component */ "./src/app/modules/home/home.component/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_2__["TableModule"]
            ],
            declarations: [
                _home_component_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/modules/scheduler/scheduler.component.css":
/*!***********************************************************!*\
  !*** ./src/app/modules/scheduler/scheduler.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*styling classes for button graphic*/\r\n.button {\r\n  display: inline-block;\r\n  background: none;\r\n  border-radius: 4px;\r\n  border: 2px solid #e5d082;\r\n  color: #e5d082;\r\n  text-align: center;\r\n  font-size: 28px;\r\n  padding: 20px;\r\n  width: 300px;\r\n  transition: all 0.5s;\r\n  cursor: pointer;\r\n  margin: 2%;\r\n}\r\n.button span {\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    position: relative;\r\n    transition: 0.5s;\r\n  }\r\n.button span:after {\r\n      content: \"\\00bb\";\r\n      position: absolute;\r\n      opacity: 0;\r\n      top: 0;\r\n      right: -20px;\r\n      transition: 0.5s;\r\n    }\r\n.button:hover span {\r\n    padding-right: 25px;\r\n  }\r\n.button:hover span:after {\r\n      opacity: 1;\r\n      right: 0;\r\n    }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zY2hlZHVsZXIvc2NoZWR1bGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQXFDO0FBQ3JDO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixVQUFVO0FBQ1o7QUFFRTtJQUNFLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjtBQUVFO01BQ0UsZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUNsQixVQUFVO01BQ1YsTUFBTTtNQUNOLFlBQVk7TUFDWixnQkFBZ0I7SUFDbEI7QUFFRjtJQUNFLG1CQUFtQjtFQUNyQjtBQUVFO01BQ0UsVUFBVTtNQUNWLFFBQVE7SUFDViIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2NoZWR1bGVyL3NjaGVkdWxlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypzdHlsaW5nIGNsYXNzZXMgZm9yIGJ1dHRvbiBncmFwaGljKi9cclxuLmJ1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNlNWQwODI7XHJcbiAgY29sb3I6ICNlNWQwODI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luOiAyJTtcclxufVxyXG5cclxuICAuYnV0dG9uIHNwYW4ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICB9XHJcblxyXG4gICAgLmJ1dHRvbiBzcGFuOmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCJcXDAwYmJcIjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHJpZ2h0OiAtMjBweDtcclxuICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIH1cclxuXHJcbiAgLmJ1dHRvbjpob3ZlciBzcGFuIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgfVxyXG5cclxuICAgIC5idXR0b246aG92ZXIgc3BhbjphZnRlciB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/modules/scheduler/scheduler.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/scheduler/scheduler.component.ts ***!
  \**********************************************************/
/*! exports provided: SchedulerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulerComponent", function() { return SchedulerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_models_TemplateObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/models/TemplateObject */ "./src/app/core/models/TemplateObject.ts");
/* harmony import */ var _core_models_JobObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/models/JobObject */ "./src/app/core/models/JobObject.ts");
/* harmony import */ var _core_models_EmployeeNoteObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/models/EmployeeNoteObject */ "./src/app/core/models/EmployeeNoteObject.ts");
/* harmony import */ var _core_services_scheduler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/scheduler.service */ "./src/app/core/services/scheduler.service.ts");
/* harmony import */ var _core_services_employee_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/services/employee.service */ "./src/app/core/services/employee.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var SchedulerComponent = /** @class */ (function () {
    function SchedulerComponent(router, messageService, schedulerService, employeeService) {
        this.router = router;
        this.messageService = messageService;
        this.schedulerService = schedulerService;
        this.employeeService = employeeService;
        //clonedTemplates: { [s: string]: TemplateObject; } = {};
        //for vacations footer and dialog
        this.employeeNote = new _core_models_EmployeeNoteObject__WEBPACK_IMPORTED_MODULE_5__["EmployeeNoteObject"]();
        this.vacations = [];
        this.displayDialog = false;
        this.displayJobDialog = false;
        this.dateRanges = [new Date()];
    }
    SchedulerComponent.prototype.ngOnInit = function () {
        this.getCurrentTemplate();
        this.initalizeTemplateTable();
        this.getJobs();
        //console.log('scheduler has been loaded');
    };
    SchedulerComponent.prototype.initalizeTemplateTable = function () {
        this.colsTemplate = [
            { field: 'jobName', header: 'Rated Job' },
            { field: 'departmentName', header: 'Department' },
            { field: 'shift1', header: 'Shift 1 Count' },
            { field: 'shift2', header: 'Shift 2 Count' },
            { field: 'shift3', header: 'Shift 3 Count' }
        ];
    };
    SchedulerComponent.prototype.getCurrentTemplate = function () {
        var _this = this;
        this.schedulerService.getCurrentTemplate().subscribe(function (res) {
            if (res) {
                //console.log(res)
                _this.templates = res;
            }
            else {
                _this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Scheduler Template data could not be loaded.' });
            }
        });
    };
    SchedulerComponent.prototype.getJobs = function () {
        var _this = this;
        this.employeeService.getJobs().subscribe(function (res) {
            if (res) {
                //console.log(res)
                _this.allJobs = res;
            }
            else {
                _this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'No job data found.' });
            }
        });
    };
    SchedulerComponent.prototype.onAddJob = function () {
        this.displayJobDialog = true;
        this.jobAdd = new _core_models_JobObject__WEBPACK_IMPORTED_MODULE_4__["JobObject"]();
    };
    SchedulerComponent.prototype.onSaveAddJob = function () {
        var newJob = new _core_models_TemplateObject__WEBPACK_IMPORTED_MODULE_3__["TemplateObject"];
        if (this.jobAdd && this.jobAdd.jobId) {
            newJob.jobName = this.jobAdd.jobName;
            newJob.departmentName = '';
            newJob.jobId = this.jobAdd.jobId;
            newJob.shift1 = 0;
            newJob.shift2 = 0;
            newJob.shift3 = 0;
            this.templates.push(newJob);
            this.displayJobDialog = false;
        }
        else {
            this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Please select a job.' });
        }
    };
    SchedulerComponent.prototype.onRemoveJob = function () {
        var _this = this;
        var temp;
        if (this.jobAdd && this.jobAdd.jobId) {
            //make sure job exist to be removed
            temp = this.templates.filter(function (t) { return t.jobName === _this.jobAdd.jobName; });
            if (temp && temp.length > 0) {
                var filtered = void 0;
                filtered = this.templates.filter(function (t) { return t.jobName !== _this.jobAdd.jobName; });
                this.templates = filtered;
                this.displayJobDialog = false;
            }
            else {
                this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'The job could not be found in the template.' });
            }
        }
        else {
            this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Please select a job.' });
        }
    };
    //Showing Add Vacation Dialog
    SchedulerComponent.prototype.showDialogToAdd = function () {
        this.employeeNote = new _core_models_EmployeeNoteObject__WEBPACK_IMPORTED_MODULE_5__["EmployeeNoteObject"]();
        this.dateRanges = [new Date()];
        this.displayDialog = true;
    };
    //when save is clicked for adding vacation
    SchedulerComponent.prototype.save = function () {
        if (this.employeeNote) {
            if (this.checkFields()) {
                //need a string version to show in footer
                this.employeeNote.setDateRange(this.dateRanges);
                //console.log(this.employeeNote);
                this.vacations.push(this.employeeNote);
                this.employeeNote = null;
                this.dateRanges = [new Date()];
                this.displayDialog = false;
            }
        }
        else {
            this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Please fill out the dialog' });
        }
    };
    SchedulerComponent.prototype.checkFields = function () {
        var isValid = true;
        if (!this.employeeNote.clockNumber) {
            isValid = false;
            this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Please fill out the Clock Number' });
        }
        if (!this.dateRanges || !this.dateRanges[0]) {
            isValid = false;
            this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Please fill out the Date Range' });
        }
        //this was removed due to only using vacations here (rather than restrictions)
        //if (!this.employeeNote.note) {
        //  isValid = false;
        //  this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Please fill out the Note' });
        //}
        return isValid;
    };
    //executed when vacation dialog closes
    SchedulerComponent.prototype.onExitDialog = function () {
        this.employeeNote = null;
        this.displayDialog = false;
    };
    //When running the scheduler insertNewTemplate is called
    //if that works then send app to history table to generate the schedule
    SchedulerComponent.prototype.onRunScheduler = function () {
        var _this = this;
        this.schedulerService.insertNewTemplates(this.templates).subscribe(function (res) {
            if (res) {
                //console.log(this.vacations);
                //then insert employeeNotes
                //in the future this should be refactored to be two separate async calls
                _this.schedulerService.insertEmployeeNotes(_this.vacations).subscribe(function (res2) {
                    if (res2) {
                        _this.generateWeekdaySchedule();
                    }
                    else {
                        _this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Insert Employee Vacations failed.' });
                    }
                });
            }
            else {
                _this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Insert Templates failed.' });
            }
        });
    };
    //generate schedule and send to history table
    SchedulerComponent.prototype.generateWeekdaySchedule = function () {
        var _this = this;
        //console.log('starting to generate schedule');
        this.schedulerService.generateWeekdaySchedule().subscribe(function (res) {
            if (res) {
                _this.router.navigate(['/history']);
            }
            else {
                _this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Failed to generate the schedule.' });
            }
        });
    };
    SchedulerComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"] },
        { type: _core_services_scheduler_service__WEBPACK_IMPORTED_MODULE_6__["SchedulerService"] },
        { type: _core_services_employee_service__WEBPACK_IMPORTED_MODULE_7__["EmployeeService"] }
    ]; };
    SchedulerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scheduler',
            template: __importDefault(__webpack_require__(/*! raw-loader!./scheduler.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/scheduler/scheduler.component.html")).default,
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]],
            styles: [__importDefault(__webpack_require__(/*! ./scheduler.component.css */ "./src/app/modules/scheduler/scheduler.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"], _core_services_scheduler_service__WEBPACK_IMPORTED_MODULE_6__["SchedulerService"], _core_services_employee_service__WEBPACK_IMPORTED_MODULE_7__["EmployeeService"]])
    ], SchedulerComponent);
    return SchedulerComponent;
}());



/***/ }),

/***/ "./src/app/shared/baseClasses/service-base.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/baseClasses/service-base.ts ***!
  \****************************************************/
/*! exports provided: ServiceBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceBase", function() { return ServiceBase; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



//TODO: Mike i made this based off something at work
var ServiceBase = /** @class */ (function () {
    function ServiceBase(http) {
        this._http = http;
        this.apiUrl = 'http://localhost:8888/api/BartonData/';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Access-Control-Allow-Origin': ['http://localhost:8888/'] });
        this.headers = this.headers.set('Access-Control-Allow-Origin', 'http://localhost:8888/');
        this.headers = this.headers.set('Access-Control-Allow-Credentials', 'true');
        this.headers.get('');
    }
    ServiceBase.prototype.post = function (url, body) {
        return this._http.post(this.apiUrl + url, body, {
            headers: this.headers,
            withCredentials: true
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ServiceBase.prototype.get = function (url) {
        return this._http.get(this.apiUrl + url, {
            headers: this.headers,
            withCredentials: true
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ServiceBase.prototype.handleError = function (error) {
        if (error.status == 401) {
        }
        // Throw error and set up error handler to catch and display
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
    };
    return ServiceBase;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false,
    Url: 'https://localhost:50505/'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
var providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Telahun\Documents\School\CECS596\JJBartonApp\BartonApp\BartonApp\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map