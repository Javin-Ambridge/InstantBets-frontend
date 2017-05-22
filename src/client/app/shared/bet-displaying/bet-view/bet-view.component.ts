import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sd-bet-view',
  templateUrl: 'bet-view.component.html',
  styleUrls: ['bet-view.component.css', 'styles.css', '../../../global-css/global.css'],
})
export class BetViewComponent {
	@Input() betObj: any;
	@Input() type: string;
}
