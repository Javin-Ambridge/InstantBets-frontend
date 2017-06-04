import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import { ScrollAnimationService } from '../../scroll-animation/scroll-animation.service';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home-container-two',
  templateUrl: 'home-container-two.component.html',
  styleUrls: ['home-container-two.component.css', '../../../global-css/global.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeContainerTwoComponent {

	constructor(public scrollTo: ScrollAnimationService) {
	}

	smoothScroll(eId: any) {
    	this.scrollTo.smoothScroll(eId, 60);
  }
}
