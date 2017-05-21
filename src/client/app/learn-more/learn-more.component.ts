import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-learn-more',
  templateUrl: 'learn-more.component.html',
  styleUrls: ['learn-more.component.css', 'learn-more.css', '../global-css/global.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LearnMoreComponent {

  constructor() {

  }
}
