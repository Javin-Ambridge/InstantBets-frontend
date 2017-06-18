import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';

@Component({
  moduleId: module.id,
  selector: 'sd-bet-view-new',
  templateUrl: 'bet-view-new.component.html',
  styleUrls: ['bet-view-new.component.css', '../../../global-css/global.css', '../../../global-css/folding-cube.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BetViewNewComponent {
	@Input() bets: any;
	betAlterations: string = "test";
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

	updateBet(ind: number): void {
		this.bets[ind].uploading = true;
		if (this.bets[ind].deletedConditions != undefined) {
			this.bets[ind].deletedConditions = this.bets[ind].deletedConditions.filter(function(a: any) {
				return a.ind == undefined;
			}).map(function(b: any) {
				return {
					id: b.id
				};
			});
		}
		this.authHttp.post(`http://localhost:3000/api/update-bet`, {
			bet: JSON.stringify(this.bets[ind])
		})
	    .map(res => res.json())
	    .subscribe((ret) => {
	    	this.bets[ind].uploading = false;
	    	this.bets[ind].edit = false;
	    	var newIdCount = 0;
	    	if (this.bets[ind].newConditions != undefined) {
	    		for(var i = 0; i < this.bets[ind].newConditions.length; i++) {
	    			this.bets[ind].newConditions[i].id = ret.newIds[newIdCount];
	    			newIdCount++;
	    		}
	    		this.bets[ind].conditions = this.bets[ind].conditions.concat(this.bets[ind].newConditions);
	    		this.bets[ind].newConditions.splice(0);
	    	}
	    	if (this.bets[ind].deletedConditions != undefined)
	    		this.bets[ind].deletedConditions.splice(0);
	    	console.log("bets: ", this.bets[ind]);
			this.ref.markForCheck();
	    });
	}

	addMembers(ind: number): void {
		this.authHttp.post(`http://localhost:3000/api/send-invites`, {
			bet: JSON.stringify(this.bets[ind])
		})
	    .map(res => res.json())
	    .subscribe((ret) => {

	    });
	}

	editBet(ind: number): void {
		if (this.bets[ind].edit == undefined) {
			this.bets[ind].edit = true;
		} else {
			this.bets[ind].edit = !this.bets[ind].edit;
		}
	}

	addNewCondition(ind: number): void {
		var currBet = this.bets[ind];
		if (currBet.newConditions == undefined) {
			currBet.newConditions = [];
		}
		currBet.newConditions.push({
			condition_name: currBet.tmpNewConditionN,
			condition: currBet.tmpNewConditionV
		});
		currBet.tmpNewConditionN = "";
		currBet.tmpNewConditionV = "";
	}

	removeCondition(cond: any): void {
		for(var i = 0; i < this.bets.length; i++) {
			if (!this.bets[i].edit) continue;
			for(var k = 0; k < this.bets[i].conditions.length; k++) {
				if (this.bets[i].conditions[k] == cond) {
					if (this.bets[i].deletedConditions == undefined) {
						this.bets[i].deletedConditions = [];
					}
					this.bets[i].deletedConditions.push(this.bets[i].conditions.splice(k, 1)[0]);
					if (this.bets[i].deletedConditions.length >= 5)
						this.bets[i].deletedConditions.shift();
					return;
				}
			}
		}
	}

	removeCondition2(cond: any): void {
		for(var i = 0; i < this.bets.length; i++) {
			if (!this.bets[i].edit) continue;
			for(var k = 0; k < this.bets[i].newConditions.length; k++) {
				if (this.bets[i].newConditions[k] == cond) {
					if (this.bets[i].deletedConditions == undefined) {
						this.bets[i].deletedConditions = [];
					}
					this.bets[i].deletedConditions.push(this.bets[i].newConditions.splice(k, 1)[0]);
					if (this.bets[i].deletedConditions.length >= 5)
						this.bets[i].deletedConditions.shift();
					return;
				}
			}
		}
	}

	undeleteCond(cond: any): void {
		for(var i = 0; i < this.bets.length; i++) {
			if (!this.bets[i].edit) continue;
			for(var k = 0; k < this.bets[i].deletedConditions.length; k++) {
				var tmpCond = this.bets[i].deletedConditions[k];
				if (tmpCond == cond) {
					if (tmpCond.id == undefined) {
						this.bets[i].newConditions.push(this.bets[i].deletedConditions.splice(k, 1)[0]);
					} else {
						this.bets[i].conditions.push(this.bets[i].deletedConditions.splice(k, 1)[0]);
					}
					return;
				}
			}
		}
	}

	lessThanTenConditions(ind: number): boolean {
		if (this.bets[ind].newConditions == undefined)
			return this.bets[ind].conditions.length < 10;
		return (this.bets[ind].newConditions.length + this.bets[ind].conditions.length) < 10;
	}

	noConditions(ind: number): boolean {
		if (this.bets[ind].newConditions == undefined)
			return this.bets[ind].conditions.length == 0;
		return this.bets[ind].conditions.length == 0 && this.bets[ind].newConditions.length == 0;
	}
}
