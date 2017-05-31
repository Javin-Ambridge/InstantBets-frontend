import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { StateService } from '../shared/state/state.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ScrollAnimationService } from '../shared/scroll-animation/scroll-animation.service';

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
  step: number = 1;

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
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.betName = params['betName'];
      });
  }

  toggleUserAmount(): void {
    this.oneUser = !this.oneUser;
  }

  smoothScroll(eId: any) {
    this.scrollTo.smoothScroll(eId, 10);
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
