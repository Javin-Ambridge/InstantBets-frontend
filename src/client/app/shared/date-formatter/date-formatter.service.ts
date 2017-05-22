import { Injectable } from '@angular/core';

//Thanks to: http://stackoverflow.com/questions/36092212/smooth-scroll-angular2/42982811
@Injectable()
export class DateFormatterService {
	formatDate(date: any): string {
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
	}
}