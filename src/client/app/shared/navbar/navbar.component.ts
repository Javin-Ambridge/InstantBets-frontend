import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth/auth.service';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css', '../../global-css/global.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
	@Input() loggedIn: boolean;
	@Output() logoutFunc = new EventEmitter<boolean>();

	constructor(public auth: AuthService) {
	}

	attemptLogin(): void {
		this.auth.login();
	}

	attemptLogout(): void {
		this.logoutFunc.emit(true);
	}
}
