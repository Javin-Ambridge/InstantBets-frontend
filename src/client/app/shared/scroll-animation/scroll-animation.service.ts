import { Injectable } from '@angular/core';
import { WindowRef } from '../window/window.service';
import * as $ from 'jquery';

//Thanks to: http://stackoverflow.com/questions/36092212/smooth-scroll-angular2/42982811
//Changed up to integrate with jquery.
@Injectable()
export class ScrollAnimationService {
    smoothScroll(eID: any, sub: number) {
		var stopY = this.elmYPosition(eID) - sub;
    	$("html, body").animate({ scrollTop: stopY}, 1000);
	}
	elmYPosition(eID: any) {
	    var elm = document.getElementById(eID);
	    var y = elm.offsetTop;
	    var node = elm;
	    while (node.offsetParent && node.offsetParent != document.body) {
	        node = (node.offsetParent);
	        y += node.offsetTop;
	    } return y;
	}
}
