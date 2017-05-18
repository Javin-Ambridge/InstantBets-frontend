import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Config } from './shared/config/env.config';
import './operators';
import { StateService } from './shared/state/state.service';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [StateService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(public stateService: StateService) {
    console.log('Environment config', Config);
    this.stateService.state.subscribe((item) => {
    	console.log("New state! From app.component.ts");
    });
  }
}
