import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { StateService } from '../state/state.service';
import * as $ from 'jquery';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css', '../../global-css/global.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[id]': 'id'}
})
export class NavbarComponent {
	id: string = "nav-div";
	loggedIn: boolean = false;
	settingsOpen: boolean = false;
	@Output() logoutFunc = new EventEmitter<boolean>();

	constructor(public auth: AuthService,
		public stateService: StateService,
    	public ref: ChangeDetectorRef) {
		stateService.state.subscribe((item) => {
			this.loggedIn = item.loggedIn;
			ref.markForCheck();
		});
	}

	attemptLogin(): void {
		this.auth.login();
	}

	attemptLogout(): void {
		this.logoutFunc.emit(true);
	}

	settingsClick(): void {
		if (this.settingsOpen) {
			$('#nav-div').css('clip-path', 'none');
			$('#nav-div').animate({
				height: '48px'
			}, "slow", () => {
				this.settingsOpen = false;
			});
		} else {
			$('#nav-div').animate({
				height: '350px'
			}, "slow", () => {
				$('#nav-div').css('clip-path', 'polygon(0 0, 100% 0, 100% 100%, 0% 90%)');
				this.settingsOpen = true;
			});
		}
	}
}
