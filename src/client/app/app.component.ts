import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Config } from './shared/config/env.config';
import './operators';
import { StateService } from './shared/state/state.service';
import { AuthService } from './shared/auth/auth.service';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [StateService, AuthService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  loggedIn: boolean = false;

  constructor(public stateService: StateService,
    public auth: AuthService) {
    console.log('Environment config', Config);
    this.stateService.state.subscribe((item) => {
      this.loggedIn = item.loggedIn;
      console.log("New state! From app.component.ts: " + this.loggedIn);
    });
    auth.handleAuthentication(stateService);
  }

  ngOnInit(): void {
    this.stateService.updateState('ADD_STATE', {val: this.auth.isAuthenticated()});
  }

  public logoutFunc(): void {
    this.auth.logout();
    this.stateService.updateState('ADD_STATE', {val: this.auth.isAuthenticated()});
  }
}
