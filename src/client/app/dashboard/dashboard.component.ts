import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges } from '@angular/core';
import { StateService } from '../shared/state/state.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ScrollAnimationService } from '../shared/scroll-animation/scroll-animation.service';
import { AuthService } from '../shared/auth/auth.service';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['styles.css', '../global-css/global.css', '../global-css/folding-cube.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
	loggedIn: boolean = false;

	constructor(public ref: ChangeDetectorRef,
		public auth: AuthService,
		public stateService: StateService) {
		stateService.state.subscribe((item) => {
			console.log("changing right here1");
			this.loggedIn = item.loggedIn;
			ref.markForCheck();
		});
	}

	ngOnChanges(): void {
		console.log("auth: " + this.auth.isAuthenticated());
	}

	isLoggedIn(): boolean {
		return this.loggedIn || this.auth.isAuthenticated();
	}

	attemptLogin(): void {
		this.auth.login();
	}
}
