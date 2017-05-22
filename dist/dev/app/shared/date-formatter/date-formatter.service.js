"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DateFormatterService = (function () {
    function DateFormatterService() {
    }
    DateFormatterService.prototype.formatDate = function (date) {
        var monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
        return monthNames[monthIndex] + ' ' + day + ', ' + year;
    };
    return DateFormatterService;
}());
DateFormatterService = __decorate([
    core_1.Injectable()
], DateFormatterService);
exports.DateFormatterService = DateFormatterService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvZGF0ZS1mb3JtYXR0ZXIvZGF0ZS1mb3JtYXR0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUEyQztBQUkzQyxJQUFhLG9CQUFvQjtJQUFqQztJQWVBLENBQUM7SUFkQSx5Q0FBVSxHQUFWLFVBQVcsSUFBUztRQUNsQixJQUFJLFVBQVUsR0FBRztZQUNmLFNBQVMsRUFBRSxVQUFVLEVBQUUsT0FBTztZQUM5QixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNO1lBQzlCLFFBQVEsRUFBRSxXQUFXLEVBQUUsU0FBUztZQUNoQyxVQUFVLEVBQUUsVUFBVTtTQUN2QixDQUFDO1FBRUYsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFOUIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7SUFDMUQsQ0FBQztJQUNGLDJCQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmWSxvQkFBb0I7SUFEaEMsaUJBQVUsRUFBRTtHQUNBLG9CQUFvQixDQWVoQztBQWZZLG9EQUFvQiIsImZpbGUiOiJhcHAvc2hhcmVkL2RhdGUtZm9ybWF0dGVyL2RhdGUtZm9ybWF0dGVyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vVGhhbmtzIHRvOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM2MDkyMjEyL3Ntb290aC1zY3JvbGwtYW5ndWxhcjIvNDI5ODI4MTFcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRlRm9ybWF0dGVyU2VydmljZSB7XG5cdGZvcm1hdERhdGUoZGF0ZTogYW55KTogc3RyaW5nIHtcblx0ICB2YXIgbW9udGhOYW1lcyA9IFtcblx0ICAgIFwiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIixcblx0ICAgIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLFxuXHQgICAgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsXG5cdCAgICBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIlxuXHQgIF07XG5cblx0ICB2YXIgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG5cdCAgdmFyIG1vbnRoSW5kZXggPSBkYXRlLmdldE1vbnRoKCk7XG5cdCAgdmFyIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG5cblx0ICByZXR1cm4gbW9udGhOYW1lc1ttb250aEluZGV4XSArICcgJyArIGRheSArICcsICcgKyB5ZWFyO1xuXHR9XG59Il19
