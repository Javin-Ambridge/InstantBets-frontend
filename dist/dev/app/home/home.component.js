"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var state_service_1 = require("../shared/state/state.service");
var router_1 = require("@angular/router");
var scroll_animation_service_1 = require("../shared/scroll-animation/scroll-animation.service");
var HomeComponent = (function () {
    function HomeComponent(stateService, ref, route, router, scrollTo) {
        var _this = this;
        this.stateService = stateService;
        this.ref = ref;
        this.route = route;
        this.router = router;
        this.scrollTo = scrollTo;
        this.tmpName = "temp name";
        this.oneUser = true;
        this.logo = '/assets/images/instantbet-logo.png';
        this.stateService.state.subscribe(function (item) {
            console.log("new state! From home.component.ts");
            _this.tmpName = item.name;
            ref.markForCheck();
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route
            .queryParams
            .subscribe(function (params) {
            _this.betName = params['betName'];
        });
    };
    HomeComponent.prototype.test = function () {
        this.stateService.updateState("ADD_STATE", {
            name: ("fake name" + Math.floor((Math.random() * 10) + 1))
        });
    };
    HomeComponent.prototype.toggleUserAmount = function () {
        this.oneUser = !this.oneUser;
    };
    HomeComponent.prototype.smoothScroll = function (eId) {
        this.scrollTo.smoothScroll(eId, 10);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sd-home',
        templateUrl: 'home.component.html',
        styleUrls: ['home.component.css', 'styles.css', '../global-css/global.css'],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
    }),
    __metadata("design:paramtypes", [state_service_1.StateService,
        core_1.ChangeDetectorRef,
        router_1.ActivatedRoute,
        router_1.Router,
        scroll_animation_service_1.ScrollAnimationService])
], HomeComponent);
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQThGO0FBQzlGLCtEQUE2RDtBQUM3RCwwQ0FBeUQ7QUFDekQsZ0dBQTZGO0FBWTdGLElBQWEsYUFBYTtJQU94Qix1QkFBbUIsWUFBMEIsRUFDcEMsR0FBc0IsRUFDdEIsS0FBcUIsRUFDckIsTUFBYyxFQUNkLFFBQWdDO1FBSnpDLGlCQVVDO1FBVmtCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQ3BDLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUF3QjtRQVZ6QyxZQUFPLEdBQVcsV0FBVyxDQUFDO1FBQzlCLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsU0FBSSxHQUFXLG9DQUFvQyxDQUFDO1FBU2xELElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1lBQ2pELEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN6QixHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBS0QsZ0NBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSzthQUNsQixXQUFXO2FBQ1gsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNmLEtBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDRCQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUU7WUFDekMsSUFBSSxFQUFFLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDM0QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHdDQUFnQixHQUFoQjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQy9CLENBQUM7SUFFRCxvQ0FBWSxHQUFaLFVBQWEsR0FBUTtRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVILG9CQUFDO0FBQUQsQ0E1Q0EsQUE0Q0MsSUFBQTtBQTVDWSxhQUFhO0lBUHpCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLHFCQUFxQjtRQUNsQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxZQUFZLEVBQUUsMEJBQTBCLENBQUM7UUFDM0UsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztxQ0FRaUMsNEJBQVk7UUFDL0Isd0JBQWlCO1FBQ2YsdUJBQWM7UUFDYixlQUFNO1FBQ0osaURBQXNCO0dBWDlCLGFBQWEsQ0E0Q3pCO0FBNUNZLHNDQUFhIiwiZmlsZSI6ImFwcC9ob21lL2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3N0YXRlL3N0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTY3JvbGxBbmltYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3Njcm9sbC1hbmltYXRpb24vc2Nyb2xsLWFuaW1hdGlvbi5zZXJ2aWNlJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIEhvbWVDb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogJ2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnaG9tZS5jb21wb25lbnQuY3NzJywgJ3N0eWxlcy5jc3MnLCAnLi4vZ2xvYmFsLWNzcy9nbG9iYWwuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdG1wTmFtZTogc3RyaW5nID0gXCJ0ZW1wIG5hbWVcIjtcbiAgb25lVXNlcjogYm9vbGVhbiA9IHRydWU7XG4gIGxvZ286IHN0cmluZyA9ICcvYXNzZXRzL2ltYWdlcy9pbnN0YW50YmV0LWxvZ28ucG5nJztcbiAgc3ViOiBhbnk7XG4gIGJldE5hbWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3RhdGVTZXJ2aWNlOiBTdGF0ZVNlcnZpY2UsXG4gICAgcHVibGljIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHVibGljIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHVibGljIHNjcm9sbFRvOiBTY3JvbGxBbmltYXRpb25TZXJ2aWNlKSB7XG4gICAgdGhpcy5zdGF0ZVNlcnZpY2Uuc3RhdGUuc3Vic2NyaWJlKChpdGVtKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIm5ldyBzdGF0ZSEgRnJvbSBob21lLmNvbXBvbmVudC50c1wiKTtcbiAgICAgIHRoaXMudG1wTmFtZSA9IGl0ZW0ubmFtZTtcbiAgICAgIHJlZi5tYXJrRm9yQ2hlY2soKTsgLy9uZWVkIHRvIG1hcmsgaGVyZSBpZiB5b3Ugd2FudCB0aGUgdmlldyB0byBiZSB1cGRhdGVkLlxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbmFtZXMgT25Jbml0XG4gICAqL1xuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1YiA9IHRoaXMucm91dGVcbiAgICAgIC5xdWVyeVBhcmFtc1xuICAgICAgLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICB0aGlzLmJldE5hbWUgPSBwYXJhbXNbJ2JldE5hbWUnXTtcbiAgICAgIH0pO1xuICB9XG5cbiAgdGVzdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXRlU2VydmljZS51cGRhdGVTdGF0ZShcIkFERF9TVEFURVwiLCB7XG4gICAgICBuYW1lOiAoXCJmYWtlIG5hbWVcIiArIE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxKSlcbiAgICB9KTtcbiAgfVxuXG4gIHRvZ2dsZVVzZXJBbW91bnQoKTogdm9pZCB7XG4gICAgdGhpcy5vbmVVc2VyID0gIXRoaXMub25lVXNlcjtcbiAgfVxuXG4gIHNtb290aFNjcm9sbChlSWQ6IGFueSkge1xuICAgIHRoaXMuc2Nyb2xsVG8uc21vb3RoU2Nyb2xsKGVJZCwgMTApO1xuICB9XG5cbn1cbiJdfQ==
