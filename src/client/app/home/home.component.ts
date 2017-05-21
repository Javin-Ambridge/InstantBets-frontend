import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { StateService } from '../shared/state/state.service';

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

  constructor(public stateService: StateService,
    public ref: ChangeDetectorRef) {
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
  }

  test(): void {
    this.stateService.updateState("ADD_STATE", {
      name: ("fake name" + Math.floor((Math.random() * 10) + 1))
    });
  }

  toggleUserAmount(): void {
    this.oneUser = !this.oneUser;
  }

}
