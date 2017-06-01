import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { StateService } from '../shared/state/state.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ScrollAnimationService } from '../shared/scroll-animation/scroll-animation.service';
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
  betObj: any = {
    amount: '0.00',
    amountEdit: false
  };

  constructor(public stateService: StateService,
    public ref: ChangeDetectorRef,
    public route: ActivatedRoute,
    public router: Router,
    public scrollTo: ScrollAnimationService) {
    this.stateService.state.subscribe((item) => {
      console.log("new state! From home.component.ts");
      ref.markForCheck(); //need to mark here if you want the view to be updated.
    });
  }

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    $(document).ready(function() {
      $('#datepicker').datepicker();
    });
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.betName = params['betName'];
      });
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

  saveVal(item: string): void {
    switch(item) {
      case 'bet':
        if (this.betName == '' || !this.betName) {
          this.betNameErr = true;
          return;
        }
      break;
      case 'amount':
        if (this.betObj.amount == '' || !this.betObj.amount) {
          this.betObj.amount = '0.00';
        }
      break;
    }
    this.toggleValue(item);
  }

  transitionToNext(): void {
    switch(this.step) {
      case 1:
        if (this.betName == '' || !this.betName) {
          this.betNameErr = true;
        } else {
          this.betNameErr = false;
          this.step++;
        }
        break;
    }
  }
}
