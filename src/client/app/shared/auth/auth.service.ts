import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';
import { AuthHttp } from 'angular2-jwt';

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
		    redirectUri: 'http://localhost:5555/dashboard',      
		    scope: 'openid profile'
		});
	}

	public login(): void {
		this.auth0.authorize({});
	}

	public handleAuthentication(stateService: any): void {
		this.auth0.parseHash((err: any, authResult: any) => {
			if (authResult && authResult.accessToken && authResult.idToken) {
				window.location.hash = '';
				this.setSession(authResult);
				this.router.navigate(['/dashboard']);
				stateService.updateState('ADD_STATE', {val: true});
			} else if (err) {
				this.router.navigate(['/dashboard']);
				stateService.updateState('ADD_STATE', {val: false});
				console.log(err);
			}
		});
	}

	private setSession(authResult: any): void {
		const expiresAt = JSON.stringify((authResult.expiresIn * 100) + new Date().getTime());
		localStorage.setItem('access_token', authResult.accessToken);
		localStorage.setItem('id_token', authResult.idToken);
		localStorage.setItem('expires_at', expiresAt);
	    this.authHttp.post(`https://instantbet.herokuapp.com/api/login-user`, {})
	      .map(res => res.json())
	      .subscribe((item) => {
	      	localStorage.setItem('auth_id', item.auth_id);
	      	console.log("authid: " + item.auth_id);
	      });
	}

	public logout(): void {
		localStorage.removeItem('access_token');
		localStorage.removeItem('id_token');
		localStorage.removeItem('expires_at');
		localStorage.removeItem('auth_id');
		this.router.navigate(['/']);
	}

	public isAuthenticated(): boolean {
		const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
		return new Date().getTime() < expiresAt;
	}
}