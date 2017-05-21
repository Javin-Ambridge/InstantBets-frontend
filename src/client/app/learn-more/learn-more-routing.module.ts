import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LearnMoreComponent } from './learn-more.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'learn-more', component: LearnMoreComponent }
    ])
  ],
  exports: [RouterModule]
})
export class LearnMoreRoutingModule { }
