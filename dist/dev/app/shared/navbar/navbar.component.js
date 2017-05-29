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
var auth_service_1 = require("../auth/auth.service");
var state_service_1 = require("../state/state.service");
var NavbarComponent = (function () {
    function NavbarComponent(auth, stateService, ref) {
        var _this = this;
        this.auth = auth;
        this.stateService = stateService;
        this.ref = ref;
        this.loggedIn = false;
        this.logoutFunc = new core_1.EventEmitter();
        stateService.state.subscribe(function (item) {
            _this.loggedIn = item.loggedIn;
            ref.markForCheck();
        });
    }
    NavbarComponent.prototype.attemptLogin = function () {
        this.auth.login();
    };
    NavbarComponent.prototype.attemptLogout = function () {
        this.logoutFunc.emit(true);
    };
    return NavbarComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], NavbarComponent.prototype, "logoutFunc", void 0);
NavbarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sd-navbar',
        templateUrl: 'navbar.component.html',
        styleUrls: ['navbar.component.css', '../../global-css/global.css'],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        state_service_1.StateService,
        core_1.ChangeDetectorRef])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBbUg7QUFDbkgscURBQW1EO0FBQ25ELHdEQUFzRDtBQVl0RCxJQUFhLGVBQWU7SUFJM0IseUJBQW1CLElBQWlCLEVBQzVCLFlBQTBCLEVBQ3ZCLEdBQXNCO1FBRmpDLGlCQU9DO1FBUGtCLFNBQUksR0FBSixJQUFJLENBQWE7UUFDNUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDdkIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFMakMsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUNoQixlQUFVLEdBQUcsSUFBSSxtQkFBWSxFQUFXLENBQUM7UUFLbEQsWUFBWSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFJO1lBQ2pDLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUM5QixHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsc0NBQVksR0FBWjtRQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELHVDQUFhLEdBQWI7UUFDQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0Ysc0JBQUM7QUFBRCxDQXBCQSxBQW9CQyxJQUFBO0FBbEJVO0lBQVQsYUFBTSxFQUFFOzttREFBMEM7QUFGdkMsZUFBZTtJQVAzQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSx1QkFBdUI7UUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsNkJBQTZCLENBQUM7UUFDbEUsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztxQ0FLd0IsMEJBQVc7UUFDZCw0QkFBWTtRQUNsQix3QkFBaUI7R0FOckIsZUFBZSxDQW9CM0I7QUFwQlksMENBQWUiLCJmaWxlIjoiYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vc3RhdGUvc3RhdGUuc2VydmljZSc7XG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBuYXZpZ2F0aW9uIGJhciBjb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLW5hdmJhcicsXG4gIHRlbXBsYXRlVXJsOiAnbmF2YmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ25hdmJhci5jb21wb25lbnQuY3NzJywgJy4uLy4uL2dsb2JhbC1jc3MvZ2xvYmFsLmNzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmF2YmFyQ29tcG9uZW50IHtcblx0bG9nZ2VkSW46IGJvb2xlYW4gPSBmYWxzZTtcblx0QE91dHB1dCgpIGxvZ291dEZ1bmMgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cblx0Y29uc3RydWN0b3IocHVibGljIGF1dGg6IEF1dGhTZXJ2aWNlLFxuXHRcdHB1YmxpYyBzdGF0ZVNlcnZpY2U6IFN0YXRlU2VydmljZSxcbiAgICBcdHB1YmxpYyByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cdFx0c3RhdGVTZXJ2aWNlLnN0YXRlLnN1YnNjcmliZSgoaXRlbSkgPT4ge1xuXHRcdFx0dGhpcy5sb2dnZWRJbiA9IGl0ZW0ubG9nZ2VkSW47XG5cdFx0XHRyZWYubWFya0ZvckNoZWNrKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRhdHRlbXB0TG9naW4oKTogdm9pZCB7XG5cdFx0dGhpcy5hdXRoLmxvZ2luKCk7XG5cdH1cblxuXHRhdHRlbXB0TG9nb3V0KCk6IHZvaWQge1xuXHRcdHRoaXMubG9nb3V0RnVuYy5lbWl0KHRydWUpO1xuXHR9XG59XG4iXX0=
