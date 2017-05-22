import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { BetViewComponent } from './bet-displaying/bet-view/bet-view.component';
import { BetStateComponent } from './bet-displaying/bet-state/bet-state.component';
import { ReturnHomeComponent } from './navigation/return-home/return-home.component';
import { GoToLearnMoreComponent } from './navigation/go-to-learn-more/go-to-learn-more.component';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NavbarComponent, BetViewComponent, BetStateComponent, ReturnHomeComponent, GoToLearnMoreComponent],
  exports: [NavbarComponent, BetViewComponent, BetStateComponent, ReturnHomeComponent, GoToLearnMoreComponent,
    CommonModule, FormsModule, RouterModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
