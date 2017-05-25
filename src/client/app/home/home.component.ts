import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { StateService } from '../shared/state/state.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ScrollAnimationService } from '../shared/scroll-animation/scroll-animation.service';
import { AuthService } from '../shared/auth/auth.service';

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
  tmpName: string = "temp name";
  oneUser: boolean = true;
  logo: string = '/assets/images/instantbet-logo.png';
  sub: any;
  betName: string;

  constructor(public stateService: StateService,
    public ref: ChangeDetectorRef,
    public route: ActivatedRoute,
    public router: Router,
    public scrollTo: ScrollAnimationService,
    public auth: AuthService) {
    this.stateService.state.subscribe((item) => {
      console.log("new state! From home.component.ts");
      this.tmpName = item.name;
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

  test(): void {
    this.stateService.updateState("ADD_STATE", {
      name: ("fake name" + Math.floor((Math.random() * 10) + 1))
    });
  }

  toggleUserAmount(): void {
    this.oneUser = !this.oneUser;
  }

  smoothScroll(eId: any) {
    this.scrollTo.smoothScroll(eId, 10);
  }

  authAttempt(): void {
    this.auth.login();
  }

}
