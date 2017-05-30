import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges } from '@angular/core';
import { StateService } from '../shared/state/state.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ScrollAnimationService } from '../shared/scroll-animation/scroll-animation.service';
import { AuthService } from '../shared/auth/auth.service';
import { AuthHttp } from 'angular2-jwt';
import { RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

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
export class DashboardComponent implements OnInit {
	loggedIn: boolean = false;

	constructor(public ref: ChangeDetectorRef,
		public auth: AuthService,
		public stateService: StateService,
		public authHttp: AuthHttp) {
		stateService.state.subscribe((item) => {
			console.log("changing right here1");
			this.loggedIn = item.loggedIn;
			this.getDBData();
			ref.markForCheck();
		});
	}

	ngOnInit(): void {
		this.getDBData();
	}

	getDBData(): any {
		if (this.isLoggedIn()) {
			if (localStorage.getItem('login-in') == 'api-not-called') {
				console.log("api not intiially called...");
				this.authHttp.post(`https://instantbet.herokuapp.com/api/login-user`, {})
			      .map(res => res.json())
			      .subscribe((item) => {
			      	localStorage.setItem('auth_id', item.auth_id);
			      	localStorage.setItem('login-in', 'api-called');
			      	console.log("authid: " + item.auth_id);
				    this.authHttp.get(`https://instantbet.herokuapp.com/api/dashboard`, {
				    	body: {
				    		test: 123
				    	}
				    })
				      .map(res => res.json())
				      .subscribe((item) => {
				      	console.log("donezo");
				      });
			      });
			} else {
				console.log("api intiailly called...");
			    this.authHttp.get(`https://instantbet.herokuapp.com/api/dashboard`)
			      .map(res => res.json())
			      .subscribe((item) => {
			      	console.log("donezo");
			      });
			}
		}
	}

	isLoggedIn(): boolean {
		return this.loggedIn || this.auth.isAuthenticated();
	}

	attemptLogin(): void {
		this.auth.login();
	}
}
