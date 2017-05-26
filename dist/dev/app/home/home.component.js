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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQThGO0FBQzlGLCtEQUE2RDtBQUM3RCwwQ0FBeUQ7QUFDekQsZ0dBQTZGO0FBWTdGLElBQWEsYUFBYTtJQU94Qix1QkFBbUIsWUFBMEIsRUFDcEMsR0FBc0IsRUFDdEIsS0FBcUIsRUFDckIsTUFBYyxFQUNkLFFBQWdDO1FBSnRCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQ3BDLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUF3QjtRQVZ6QyxZQUFPLEdBQVcsV0FBVyxDQUFDO1FBQzlCLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsU0FBSSxHQUFXLG9DQUFvQyxDQUFDO1FBU2xELElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1lBQ2pELEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFLRCxnQ0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLO2FBQ2xCLFdBQVc7YUFDWCxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2YsS0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsd0NBQWdCLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDL0IsQ0FBQztJQUVELG9DQUFZLEdBQVosVUFBYSxHQUFRO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQXBDQSxBQW9DQyxJQUFBO0FBcENZLGFBQWE7SUFQekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsU0FBUztRQUNuQixXQUFXLEVBQUUscUJBQXFCO1FBQ2xDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixFQUFFLFlBQVksRUFBRSwwQkFBMEIsQ0FBQztRQUMzRSxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtLQUNoRCxDQUFDO3FDQVFpQyw0QkFBWTtRQUMvQix3QkFBaUI7UUFDZix1QkFBYztRQUNiLGVBQU07UUFDSixpREFBc0I7R0FYOUIsYUFBYSxDQW9DekI7QUFwQ1ksc0NBQWEiLCJmaWxlIjoiYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc3RhdGUvc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNjcm9sbEFuaW1hdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2Nyb2xsLWFuaW1hdGlvbi9zY3JvbGwtYW5pbWF0aW9uLnNlcnZpY2UnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgSG9tZUNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnaG9tZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydob21lLmNvbXBvbmVudC5jc3MnLCAnc3R5bGVzLmNzcycsICcuLi9nbG9iYWwtY3NzL2dsb2JhbC5jc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB0bXBOYW1lOiBzdHJpbmcgPSBcInRlbXAgbmFtZVwiO1xuICBvbmVVc2VyOiBib29sZWFuID0gdHJ1ZTtcbiAgbG9nbzogc3RyaW5nID0gJy9hc3NldHMvaW1hZ2VzL2luc3RhbnRiZXQtbG9nby5wbmcnO1xuICBzdWI6IGFueTtcbiAgYmV0TmFtZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzdGF0ZVNlcnZpY2U6IFN0YXRlU2VydmljZSxcbiAgICBwdWJsaWMgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwdWJsaWMgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcbiAgICBwdWJsaWMgc2Nyb2xsVG86IFNjcm9sbEFuaW1hdGlvblNlcnZpY2UpIHtcbiAgICB0aGlzLnN0YXRlU2VydmljZS5zdGF0ZS5zdWJzY3JpYmUoKGl0ZW0pID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwibmV3IHN0YXRlISBGcm9tIGhvbWUuY29tcG9uZW50LnRzXCIpO1xuICAgICAgcmVmLm1hcmtGb3JDaGVjaygpOyAvL25lZWQgdG8gbWFyayBoZXJlIGlmIHlvdSB3YW50IHRoZSB2aWV3IHRvIGJlIHVwZGF0ZWQuXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBuYW1lcyBPbkluaXRcbiAgICovXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZVxuICAgICAgLnF1ZXJ5UGFyYW1zXG4gICAgICAuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgIHRoaXMuYmV0TmFtZSA9IHBhcmFtc1snYmV0TmFtZSddO1xuICAgICAgfSk7XG4gIH1cblxuICB0b2dnbGVVc2VyQW1vdW50KCk6IHZvaWQge1xuICAgIHRoaXMub25lVXNlciA9ICF0aGlzLm9uZVVzZXI7XG4gIH1cblxuICBzbW9vdGhTY3JvbGwoZUlkOiBhbnkpIHtcbiAgICB0aGlzLnNjcm9sbFRvLnNtb290aFNjcm9sbChlSWQsIDEwKTtcbiAgfVxufVxuIl19
