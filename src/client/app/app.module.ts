import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeModule } from './home/home.module';
import { LearnMoreModule } from './learn-more/learn-more.module';
import { SharedModule } from './shared/shared.module';
import { WindowRef } from './shared/window/window.service';
import { ScrollAnimationService } from './shared/scroll-animation/scroll-animation.service';
import { DateFormatterService } from './shared/date-formatter/date-formatter.service';


@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule, HomeModule, LearnMoreModule, SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }, WindowRef,
  ScrollAnimationService,
  DateFormatterService],
  bootstrap: [AppComponent]

})
export class AppModule { }
