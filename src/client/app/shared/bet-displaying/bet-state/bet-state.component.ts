import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sd-bet-state',
  templateUrl: 'bet-state.component.html',
  styleUrls: ['bet-state.component.css', '../../../global-css/global.css'],
})
export class BetStateComponent {
	@Input() state: string;
}
