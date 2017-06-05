import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { BetViewComponent } from './bet-displaying/bet-view/bet-view.component';
import { BetStateComponent } from './bet-displaying/bet-state/bet-state.component';
import { ReturnHomeComponent } from './navigation/return-home/return-home.component';
import { GoToLearnMoreComponent } from './navigation/go-to-learn-more/go-to-learn-more.component';
import { AuthService } from './auth/auth.service';
import { HomeContainerTwoComponent } from './home/home-container-two/home-container-two.component';
import { BetViewDashboardComponent } from './bet-displaying/bet-view-dashboard/bet-view-dashboard.component';
import { BetViewNewComponent } from './bet-displaying/bet-view-new/bet-view-new.component';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: 
    [
      NavbarComponent, 
      BetViewComponent, 
      BetStateComponent, 
      ReturnHomeComponent, 
      GoToLearnMoreComponent,
      HomeContainerTwoComponent,
      BetViewDashboardComponent,
      BetViewNewComponent
    ],
  exports: 
    [
      NavbarComponent, 
      BetViewComponent, 
      BetStateComponent, 
      ReturnHomeComponent, 
      GoToLearnMoreComponent,
      HomeContainerTwoComponent,
      BetViewDashboardComponent,
      BetViewNewComponent,
      CommonModule, 
      FormsModule, 
      RouterModule
    ],
  providers: [AuthService]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
