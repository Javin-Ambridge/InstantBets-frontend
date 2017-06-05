import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { StateService } from '../shared/state/state.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ScrollAnimationService } from '../shared/scroll-animation/scroll-animation.service';
import { Location } from '@angular/common';
import { AuthService } from '../shared/auth/auth.service';
import * as $ from 'jquery';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css', 'styles.css', '../global-css/global.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  oneUser: boolean = true;
  sub: any;
  betName: string;
  betNameErr: boolean = false;
  betNameStep2: boolean = false;
  step: number = 1;
  topHeight: string = '35%';
  extraConditionName: string = '';
  extraConditionVal: string = '';
  loggedIn: boolean = false;
  betObj: any = {
    amount: '0.00',
    endDate: null,
    betCondition: '',
    extraConditions: []
  };

  constructor(public stateService: StateService,
    public ref: ChangeDetectorRef,
    public route: ActivatedRoute,
    public router: Router,
    public scrollTo: ScrollAnimationService,
    public location: Location,
    public auth: AuthService) {

    this.loggedIn = auth.isAuthenticated();

    //Setting betobj enddate default to 3 weeks.
    var tmp: Date = new Date();
    tmp.setDate(tmp.getDate() + 21);
    this.betObj.endDate = tmp;

    this.stateService.state.subscribe((item) => {
      console.log("new state! From home.component.ts");
      this.loggedIn = item.loggedIn;
      ref.markForCheck(); //need to mark here if you want the view to be updated.
    });
  }

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.keyWatchers();
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.betName = params['betName'];
        if (params['page']) {
          this.step = parseInt(params['page']);
          this.refreshLoadPage(this.step);
        }
      });
  }

  refreshLoadPage(page: number): void {
    for(var i = 1; i < page; i++) {
      $('#home-step-' + i).hide();
    }
    switch(page) {
      case 2:
        this.betName = localStorage.getItem('bet-name-home');
        this.betObj.amount = localStorage.getItem('bet-amount-home')
        $('#home-step-' + this.step).show();
        $('#home-title').css('marginTop', '15px');
      break;
    }
  }

  keyWatchers(): void {
    $('#home-input').keypress((e) => {
      if (e.which == 13) {
        this.transitionToNext();
        if (this.errorChecker('bet')) $('#home-input').blur();
      } else if (this.betNameErr && !this.errorChecker('bet')) {
        this.betNameErr = false;
      }
    });
  }


  toggleValue(item: string): void {
    switch(item) {
      case 'bet':
        this.betNameStep2 = !this.betNameStep2;
        if (this.betNameErr) this.betNameErr = false;
        break;
    }
  }

  toggleUserAmount(): void {
    this.oneUser = !this.oneUser;
  }

  smoothScroll(eId: any) {
    this.scrollTo.smoothScroll(eId, 10);
  }

  errorChecker(item: string): boolean {
    switch(item) {
      case 'bet':
        return (this.betName == '' || !this.betName);
      case 'amount':
        return (this.betObj.amount == '' || !this.betObj.amount);
      case 'bet-condition':
        return (this.betObj.betCondition == '' || !this.betObj.betCondition);
      case 'bet-condition-name':
        return (this.extraConditionName == '' || !this.extraConditionName);
      case 'bet-condition-val':
        return (this.extraConditionVal == '' || !this.extraConditionVal);
    }
    console.log("[ErrProb1]: If you see this, there is a problem..");
    return false; //shouldnt be reached..
  }

  saveVal(item: string): void {
    switch(item) {
      case 'bet':
        if (this.errorChecker('bet')) {
          this.betNameErr = true;
          return;
        } else {
          if (this.step > 1) {
            localStorage.setItem('bet-name-home', this.betName);
          }
        }
      break;
    }
    this.toggleValue(item);
  }

  localSaveAndParams(step: number): void {
    switch(step) {
      case 2:
        var params = '?page=2';
        this.location.replaceState(params);
        localStorage.setItem('bet-name-home', this.betName);
        localStorage.setItem('bet-amount-home', this.betObj.amount);
      break;
    }
  }

  addCondition(): void {
    if (!this.errorChecker('bet-condition-name') && !this.errorChecker('bet-condition-val')) {
      this.betObj.extraConditions.push({
        conditionName: this.extraConditionName,
        val: this.extraConditionVal
      });
      this.extraConditionVal = '';
      this.extraConditionName = '';
      $('#add-condition-name').css('border-color', '#cacaca');
      $('#add-condition-val').css('border-color', '#cacaca');
      return;
    }
    if (this.errorChecker('bet-condition-name')) {
      $('#add-condition-name').css('border-color', '#ff0033');
    } 
    if (this.errorChecker('bet-condition-val')) { //val is empty
      $('#add-condition-val').css('border-color', '#ff0033');
    }
  }

  removeCondition(ind: number): void {
    this.betObj.extraConditions.splice(ind, 1);
  }

  clearLocalStorage(): void {
    localStorage.removeItem('bet-name-home');
    localStorage.removeItem('bet-amount-home');
  }

  betCreation(): void {
    if (!this.errorChecker('bet') && !this.errorChecker('bet-condition')) {
      $('#bet-name-container').css('border-color', '#cacaca');
      $('#bet-condition-input').css('border-color', '#cacaca');
      this.clearLocalStorage();
      this.betObj.name = this.betName;
      this.auth.login(this.betObj);
    }
    if (this.errorChecker('bet')) {
      $('#bet-name-container').css('border-color', '#ff0033');
    }
    if (this.errorChecker('bet-condition')) {
      $('#bet-condition-input').css('border-color', '#ff0033');
    }
  }

  transitionToNext(): void {
    switch(this.step) {
      case 1:
        if (this.errorChecker('bet')) {
          this.betNameErr = true;
        } else {
          this.betNameErr = false;
          $('#home-step-1').fadeOut("slow", () => {
            $('#home-title').animate({
              marginTop: '15px'
            }, "slow");
            $("#home-step-2").fadeIn("slow");
          });
        }
        break;
    }
    this.step++;
    this.localSaveAndParams(this.step);
  }
}
