import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { StateService } from '../shared/state/state.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ScrollAnimationService } from '../shared/scroll-animation/scroll-animation.service';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['styles.css', '../global-css/global.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  constructor() {
  }
}
