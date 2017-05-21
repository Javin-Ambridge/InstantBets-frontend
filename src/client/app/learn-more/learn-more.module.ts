import { NgModule } from '@angular/core';
import { LearnMoreComponent } from './learn-more.component';
import { LearnMoreRoutingModule } from './learn-more-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [LearnMoreRoutingModule, SharedModule],
  declarations: [LearnMoreComponent],
  exports: [LearnMoreComponent]
})
export class LearnMoreModule { }
