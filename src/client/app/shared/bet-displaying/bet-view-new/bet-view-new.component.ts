import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sd-bet-view-new',
  templateUrl: 'bet-view-new.component.html',
  styleUrls: ['bet-view-new.component.css', '../../../global-css/global.css'],
})
export class BetViewNewComponent {
	@Input() bets: any;
}
