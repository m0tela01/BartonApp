"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
//TODO: Mike i made this based off something at work
var ServiceBase = /** @class */ (function () {
    function ServiceBase(http) {
        this._http = http;
        this.apiUrl = 'http://localhost:8888/api/BartonData/';
        this.headers = new http_1.HttpHeaders({ 'Access-Control-Allow-Origin': ['http://localhost:8888/'] });
        this.headers = this.headers.set('Access-Control-Allow-Origin', 'http://localhost:8888/');
        this.headers = this.headers.set('Access-Control-Allow-Credentials', 'true');
        this.headers.get('');
    }
    ServiceBase.prototype.post = function (url, body) {
        return this._http.post(this.apiUrl + url, body, {
            headers: this.headers,
            withCredentials: true
        }).pipe(operators_1.catchError(this.handleError));
    };
    ServiceBase.prototype.get = function (url) {
        return this._http.get(this.apiUrl + url, {
            headers: this.headers,
            withCredentials: true
        }).pipe(operators_1.catchError(this.handleError));
    };
    ServiceBase.prototype.handleError = function (error) {
        if (error.status == 401) {
        }
        // Throw error and set up error handler to catch and display
        return rxjs_1.throwError(error);
    };
    return ServiceBase;
}());
exports.ServiceBase = ServiceBase;
//# sourceMappingURL=service-base.js.map