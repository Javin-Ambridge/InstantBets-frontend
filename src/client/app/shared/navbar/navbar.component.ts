import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { StateService } from '../state/state.service';
import * as $ from 'jquery';
import { AuthHttp } from 'angular2-jwt';
import { Subject } from 'rxjs/Subject';
import { environment } from '../../../environments/environment';

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
	userInfo: any = undefined;
	settings: any;
	subs: any;
	amountChange: Subject<string> = new Subject<string>();

	@Output() logoutFunc = new EventEmitter<boolean>();

	constructor(public auth: AuthService,
		public stateService: StateService,
    	public ref: ChangeDetectorRef,
    	public authHttp: AuthHttp) {
		stateService.state.subscribe((item) => {
			this.loggedIn = item.loggedIn;
			ref.markForCheck();
		});
		var lastval: number = undefined;
        this.amountChange
	        .debounceTime(1000)
	        .switchMap(val => {
	                console.log('called once: ' + val)
	                if (lastval == undefined || lastval != parseInt(val)) {
	                	lastval = parseInt(val);
	                	return this.maxAmountUpdate(parseInt(val));
	                } else {
	                	//most likely a duplicate call (no point in wasting api resources)
	                	return [true];
	                }
	            }).subscribe(results => {
	                console.log(results);
	            }, error => {
	                console.log('error logged:');
	                console.log(error);
	            });
	}

	maxAmountUpdate(val: number): any {
		return this.authHttp.post(environment.apiURL + '/api/user-settings/max-amount', {
			val: JSON.stringify(val)
		})
	    .map(res => res.json());
	}

	attemptLogin(): void {
		this.auth.login();
	}

	attemptLogout(): void {
		this.logoutFunc.emit(true);
	}

	getUserInfo(): any {
		this.authHttp.get(environment.apiURL + '/api/user-info')
	    .map(res => res.json())
	    .subscribe((ret) => {
	    	this.userInfo = ret.user_info;
	    	this.settings = ret.settings;
			this.ref.markForCheck();
	    });
	}

	settingsClick(): void {
		if (this.settingsOpen) {
			$('#nav-div').css('clip-path', 'none');
			$('#nav-div').animate({
				height: '48px'
			}, "slow", () => {
				this.settingsOpen = false;
				this.ref.markForCheck();
			});
		} else {
			$('#nav-div').animate({
				height: '450px'
			}, "slow", () => {
				$('#nav-div').css('clip-path', 'polygon(0 0, 100% 0, 100% 100%, 0% 90%)');
				this.settingsOpen = true;
				if (this.userInfo == undefined) {
					this.getUserInfo();
				}
				this.ref.markForCheck();
			});
		}
	}

	emailNotifChange(newValue: any): void {
		this.authHttp.post(environment.apiURL + '/api/user-settings/email', {
			val: JSON.stringify(newValue)
		})
	    .map(res => res.json())
	    .subscribe((ret) => {});
	}

	maxBetAmountChange(newValue: any): void {
		this.authHttp.post(environment.apiURL + '/api/user-settings/max-bet', {
			val: JSON.stringify(newValue)
		})
	    .map(res => res.json())
	    .subscribe((ret) => {});
	}

	maxBetAmountValChange(newVal: string): void {
		this.amountChange.next(newVal);
	}
}
