import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sd-bet-view-dashboard',
  templateUrl: 'bet-view-dashboard.component.html',
  styleUrls: ['bet-view-dashboard.component.css', '../../../global-css/global.css'],
})
export class BetViewDashboardComponent implements OnChanges {
	newBetsOpen: boolean = false;
	newBets: any = [];

	@Input() bets: any;

	ngOnChanges(changes: any): void {
		this.newBets = this.bets.filter(function(item: any) {
			return item.state == "New";
		});
	}

	toggleView(type: string): void {
		switch(type) {
			case 'new':
				this.newBetsOpen = !this.newBetsOpen;
			break;
		}
	}
}
