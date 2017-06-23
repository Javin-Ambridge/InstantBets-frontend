import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import * as $ from 'jquery';

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
		this.toggleOff(1, ind);
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
		delete this.bets[ind].edit;
		delete this.bets[ind].add_members;
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

	toggleOff(val: number, ind: number): void {
		switch(val) {
			case 1:
				if (this.bets[ind].edit)
					this.bets[ind].edit = false;
				if (this.bets[ind].add_members)
					this.bets[ind].add_members = false;
				break;
			case 2:
				if (this.bets[ind].edit)
					this.bets[ind].edit = false;
				break;
			case 3:
				if (this.bets[ind].add_members)
					this.bets[ind].add_members = false;
			break;
		}
	}

	addMembers(ind: number): void {
		if (this.bets[ind].add_members == undefined) {
			this.toggleOff(2, ind);
			this.bets[ind].add_members = true;
		} else {
			if (!this.bets[ind].add_members)
				this.toggleOff(2, ind);
			this.bets[ind].add_members = !this.bets[ind].add_members;
		}
	}

	editBet(ind: number): void {
		if (this.bets[ind].edit == undefined) {
			this.toggleOff(3, ind);
			this.bets[ind].edit = true;
		} else {
			if (!this.bets[ind].edit)
				this.toggleOff(3, ind);
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

	copyShortLink(ind: number): void {
		this.copyToClipboard('short-link-' + ind);
	}

	copyToClipboard(elem: any): any	 {
		//Yea I cant get this to work... (we should probably get this working lol.)
		// It should just theoretically copy the shortlink that we have pasted there.
		//Lets also look into adding an animation on the element we copy so it looks cool
		//I can help with this if needed -Javin
	}

	sendInviteEmails(ind: number): void {
		var emailAddr: any = [
			'test@bidding.com',
			'foo@bar.com'
		];
		this.authHttp.post(`http://localhost:3000/api/send-invites`, {
			friends: JSON.stringify(emailAddr),
			betId: JSON.stringify(this.bets[ind].id)
		})
	    .map(res => res.json())
	    .subscribe((ret) => {
	    	console.log("The response from the API is: ", ret);
	    });
	}
}
