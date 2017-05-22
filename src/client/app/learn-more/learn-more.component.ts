import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ScrollAnimationService } from '../shared/scroll-animation/scroll-animation.service';
import { DateFormatterService } from '../shared/date-formatter/date-formatter.service';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-learn-more',
  templateUrl: 'learn-more.component.html',
  styleUrls: ['learn-more.component.css', 'styles.css', '../global-css/global.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ScrollAnimationService],
})
export class LearnMoreComponent implements OnInit {
	twoWeeksFromNow: string;
	twoDaysAgo: string;
	oneDayAgo: string;
    constructor(public scrollTo: ScrollAnimationService,
    	public dateFormat: DateFormatterService) {
    }

    ngOnInit(): void {
    	var tmp = new Date();
    	tmp.setDate(tmp.getDate() + 25);
    	var tmp2 = new Date();
    	tmp2.setDate(tmp2.getDate() - 2);
    	var tmp3 = new Date();
    	tmp3.setDate(tmp3.getDate() - 1);
    	this.oneDayAgo = this.dateFormat.formatDate(tmp3);
    	this.twoDaysAgo = this.dateFormat.formatDate(tmp2);
    	this.twoWeeksFromNow = this.dateFormat.formatDate(tmp);
    }

	smoothScroll(eID: any) {
		this.scrollTo.smoothScroll(eID, 20);
	}
}
