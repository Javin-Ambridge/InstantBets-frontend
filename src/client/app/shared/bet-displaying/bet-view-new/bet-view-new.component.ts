import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';

@Component({
  moduleId: module.id,
  selector: 'sd-bet-view-new',
  templateUrl: 'bet-view-new.component.html',
  styleUrls: ['bet-view-new.component.css', '../../../global-css/global.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BetViewNewComponent {
	@Input() bets: any;
	test: string = 'test';

	constructor(public authHttp: AuthHttp,
    public ref: ChangeDetectorRef) {}

	deleteBet(ind: number): void {
		//https://instantbet.herokuapp.com/api/delete-bet
		this.authHttp.post(`http://localhost:3000/api/delete-bet`, {
			bet: JSON.stringify(this.bets[ind].id)
		})
	    .map(res => res.json())
	    .subscribe((ret) => {
			this.bets.splice(ind, 1);
			this.ref.markForCheck();
	    });
	}

	editBet(ind: number): void {
		if (this.bets[ind].edit == undefined) {
			this.bets[ind].edit = true;
		} else {
			this.bets[ind].edit = !this.bets[ind].edit;
		}
	}
}
