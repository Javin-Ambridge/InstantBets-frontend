import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ScrollAnimationService } from '../shared/scroll-animation/scroll-animation.service';

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
export class LearnMoreComponent {
  constructor(public scrollTo: ScrollAnimationService) {
  }
    smoothScroll(eID: any) {
    	this.scrollTo.smoothScroll(eID);
	}
}
