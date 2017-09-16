import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';
import { AuthHttp } from 'angular2-jwt';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {
	auth0: any;

	constructor(public router: Router,
		public authHttp: AuthHttp) {
		this.auth0 = new auth0.WebAuth({
		    clientID: 'hFYw47a5Br1piYe03gMNCUhelU00O149',
		    domain: 'javin.auth0.com',
		    responseType: 'token id_token',
		    audience: 'https://instantbet.herokuapp.com/',
		    redirectUri: 'http://localhost:5555/',      
		    scope: 'openid profile'
		});
	}

	public login(betobj?: any): void {
		if (betobj) {
			this.auth0.authorize({state: '[betObj]:' + JSON.stringify(betobj)});
		} else {
			this.auth0.authorize({});
		}
	}

	public handleAuthentication(stateService: any): void {
		this.auth0.parseHash((err: any, authResult: any) => {
			if (authResult && authResult.accessToken && authResult.idToken) {
				window.location.hash = '';
				this.setSession(authResult);

				//Needs to be done after session is set.
				if (authResult.state.slice(0, 9) == '[betObj]:') {
					var betObj = JSON.parse(authResult.state.slice(9));
					this.createBet(betObj, stateService);
				} else {
					this.router.navigate(['/dashboard']);
					stateService.updateState('ADD_STATE', {val: true});
				}
			} else if (err) {
				this.router.navigate(['/dashboard']);
				stateService.updateState('ADD_STATE', {val: false});
				console.log(err);
			}
		});
	}

	public createBet(betObj: any, stateService: any): void {
		//https://instantbet.herokuapp.com/api/create-bet
		this.authHttp.post(environment.apiURL + '/api/create-bet', {
			bet: JSON.stringify(betObj)
		})
	      .map(res => res.json())
	      .subscribe((item) => {
			this.router.navigate(['/dashboard']);
			stateService.updateState('ADD_STATE', {val: true});
	      });
	}

	private setSession(authResult: any): void {
		const expiresAt = JSON.stringify((authResult.expiresIn * 100) + new Date().getTime());
		localStorage.setItem('access_token', authResult.accessToken);
		localStorage.setItem('id_token', authResult.idToken);
		localStorage.setItem('expires_at', expiresAt);
		localStorage.setItem('login-in', 'api-not-called');
	}

	public logout(): void {
		localStorage.removeItem('access_token');
		localStorage.removeItem('id_token');
		localStorage.removeItem('expires_at');
		localStorage.removeItem('auth_id');
		localStorage.removeItem('login-in');
		this.router.navigate(['/']);
	}

	public isAuthenticated(): boolean {
		const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
		return new Date().getTime() < expiresAt;
	}
}