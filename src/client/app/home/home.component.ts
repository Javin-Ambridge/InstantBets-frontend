import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { StateService } from '../shared/state/state.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ScrollAnimationService } from '../shared/scroll-animation/scroll-animation.service';
import { Location } from '@angular/common';
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
  betObj: any = {
    amount: '0.00',
    amountEdit: false,
    endDate: 'mm/dd/yyyy'
  };

  constructor(public stateService: StateService,
    public ref: ChangeDetectorRef,
    public route: ActivatedRoute,
    public router: Router,
    public scrollTo: ScrollAnimationService,
    public location: Location) {
    this.stateService.state.subscribe((item) => {
      console.log("new state! From home.component.ts");
      ref.markForCheck(); //need to mark here if you want the view to be updated.
    });
  }

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    $('#home-input').keypress((e) => {
      if (e.which == 13) {
        this.transitionToNext();
        if (this.errorChecker('bet')) $('#home-input').blur();
      } else if (this.betNameErr && !this.errorChecker('bet')) {
        this.betNameErr = false;
      }
    });
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
        $('#home-step-' + this.step).show();
        $('#home-container-top').css("height", "700px");
        $('#home-title').css('marginTop', '15px');
      break;
    }
  }

  toggleValue(item: string): void {
    switch(item) {
      case 'bet':
        this.betNameStep2 = !this.betNameStep2;
        if (this.betNameErr) this.betNameErr = false;
        break;
      case 'amount':
        this.betObj.amountEdit = !this.betObj.amountEdit;
        if (this.betObj.amountErr) this.betObj.amountErr = false;
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
      case 'amount':
        if (this.errorChecker('amount')) {
          this.betObj.amount = '0.00';
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
      break;
    }
  }

  transitionToNext(): void {
    switch(this.step) {
      case 1:
        if (this.errorChecker('bet')) {
          this.betNameErr = true;
        } else {
          this.betNameErr = false;
          this.localSaveAndParams(2);
          $('#home-step-1').fadeOut("slow", () => {
            $('#home-container-top').animate({
              height: '700px'
            }, "slow", () => {
              $('#home-title').animate({
                marginTop: '15px'
              }, "slow");
              $("#home-step-2").fadeIn("slow");
              this.step++;
            });
          });
        }
        break;
    }
  }
}
