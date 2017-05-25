import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import { WebAuth, } from 'auth0-js';

@Injectable()
export class AuthService {
	auth0: WebAuth;

	constructor(public router: Router) {
		this.auth0 = new WebAuth({
		    clientID: 'hFYw47a5Br1piYe03gMNCUhelU00O149',
		    domain: 'javin.auth0.com',
		    responseType: 'token id_token',
		    audience: 'https://javin.auth0.com/userinfo',
		    redirectUri: 'http://localhost:4200/',      
		    scope: 'openid'
		});
	}

	public login(): void {
		this.auth0.authorize({});
	}
}