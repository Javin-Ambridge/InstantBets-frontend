import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {
	auth0: any;

	constructor(public router: Router) {
		this.auth0 = new auth0.WebAuth({
		    clientID: 'hFYw47a5Br1piYe03gMNCUhelU00O149',
		    domain: 'javin.auth0.com',
		    responseType: 'token id_token',
		    audience: 'https://javin.auth0.com/userinfo',
		    redirectUri: 'http://localhost:5555/',      
		    scope: 'openid'
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
				this.router.navigate(['/']);
				stateService.updateState('ADD_STATE', {val: true});
			} else if (err) {
				this.router.navigate(['/']);
				console.log(err);
			}
			console.log("this shouldnt have happened!");
		});
	}

	private setSession(authResult: any): void {
		const expiresAt = JSON.stringify((authResult.expiresIn * 100) + new Date().getTime());
		localStorage.setItem('access_token', authResult.accessToken);
		localStorage.setItem('id_token', authResult.idToken);
		localStorage.setItem('expires_at', expiresAt);
	}

	public logout(): void {
		localStorage.removeItem('access_token');
		localStorage.removeItem('id_token');
		localStorage.removeItem('expires_at');
		this.router.navigate(['/']);
	}

	public isAuthenticated(): boolean {
		const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
		return new Date().getTime() < expiresAt;
	}
}