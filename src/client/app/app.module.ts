import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AuthHttp, AuthConfig } from 'angular2-jwt';

import { HomeModule } from './home/home.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { LearnMoreModule } from './learn-more/learn-more.module';
import { SharedModule } from './shared/shared.module';
import { WindowRef } from './shared/window/window.service';
import { ScrollAnimationService } from './shared/scroll-animation/scroll-animation.service';
import { StateService } from './shared/state/state.service';
import { AuthService } from './shared/auth/auth.service';
import { DateFormatterService } from './shared/date-formatter/date-formatter.service';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenGetter: (() => localStorage.getItem('access_token')),
  }), http, options);
}

@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule, HomeModule, LearnMoreModule, DashboardModule, SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }, WindowRef,
  ScrollAnimationService,
  DateFormatterService,
  StateService,
  AuthService,
  {
  	provide: AuthHttp,
  	useFactory: authHttpServiceFactory,
  	deps: [Http, RequestOptions]
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
