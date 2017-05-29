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
var auth_service_1 = require("../shared/auth/auth.service");
var DashboardComponent = (function () {
    function DashboardComponent(ref, auth, stateService) {
        var _this = this;
        this.ref = ref;
        this.auth = auth;
        this.stateService = stateService;
        this.loggedIn = false;
        stateService.state.subscribe(function (item) {
            console.log("changing right here1");
            _this.loggedIn = item.loggedIn;
            ref.markForCheck();
        });
    }
    DashboardComponent.prototype.ngOnChanges = function () {
        console.log("auth: " + this.auth.isAuthenticated());
    };
    DashboardComponent.prototype.isLoggedIn = function () {
        return this.loggedIn || this.auth.isAuthenticated();
    };
    DashboardComponent.prototype.attemptLogin = function () {
        this.auth.login();
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sd-dashboard',
        templateUrl: 'dashboard.component.html',
        styleUrls: ['styles.css', '../global-css/global.css', '../global-css/folding-cube.css'],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
    }),
    __metadata("design:paramtypes", [core_1.ChangeDetectorRef,
        auth_service_1.AuthService,
        state_service_1.StateService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUF5RztBQUN6RywrREFBNkQ7QUFHN0QsNERBQTBEO0FBWTFELElBQWEsa0JBQWtCO0lBRzlCLDRCQUFtQixHQUFzQixFQUNqQyxJQUFpQixFQUNqQixZQUEwQjtRQUZsQyxpQkFRQztRQVJrQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUNqQyxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ2pCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBSmxDLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFLekIsWUFBWSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFJO1lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUNwQyxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDOUIsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELHdDQUFXLEdBQVg7UUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELHVDQUFVLEdBQVY7UUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3JELENBQUM7SUFFRCx5Q0FBWSxHQUFaO1FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBQ0YseUJBQUM7QUFBRCxDQXhCQSxBQXdCQyxJQUFBO0FBeEJZLGtCQUFrQjtJQVA5QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFdBQVcsRUFBRSwwQkFBMEI7UUFDdkMsU0FBUyxFQUFFLENBQUMsWUFBWSxFQUFFLDBCQUEwQixFQUFFLGdDQUFnQyxDQUFDO1FBQ3ZGLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7cUNBSXVCLHdCQUFpQjtRQUMzQiwwQkFBVztRQUNILDRCQUFZO0dBTHRCLGtCQUFrQixDQXdCOUI7QUF4QlksZ0RBQWtCIiwiZmlsZSI6ImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3N0YXRlL3N0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTY3JvbGxBbmltYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3Njcm9sbC1hbmltYXRpb24vc2Nyb2xsLWFuaW1hdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2F1dGgvYXV0aC5zZXJ2aWNlJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIEhvbWVDb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLWRhc2hib2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N0eWxlcy5jc3MnLCAnLi4vZ2xvYmFsLWNzcy9nbG9iYWwuY3NzJywgJy4uL2dsb2JhbC1jc3MvZm9sZGluZy1jdWJlLmNzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50IHtcblx0bG9nZ2VkSW46IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRwdWJsaWMgYXV0aDogQXV0aFNlcnZpY2UsXG5cdFx0cHVibGljIHN0YXRlU2VydmljZTogU3RhdGVTZXJ2aWNlKSB7XG5cdFx0c3RhdGVTZXJ2aWNlLnN0YXRlLnN1YnNjcmliZSgoaXRlbSkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coXCJjaGFuZ2luZyByaWdodCBoZXJlMVwiKTtcblx0XHRcdHRoaXMubG9nZ2VkSW4gPSBpdGVtLmxvZ2dlZEluO1xuXHRcdFx0cmVmLm1hcmtGb3JDaGVjaygpO1xuXHRcdH0pO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoKTogdm9pZCB7XG5cdFx0Y29uc29sZS5sb2coXCJhdXRoOiBcIiArIHRoaXMuYXV0aC5pc0F1dGhlbnRpY2F0ZWQoKSk7XG5cdH1cblxuXHRpc0xvZ2dlZEluKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmxvZ2dlZEluIHx8IHRoaXMuYXV0aC5pc0F1dGhlbnRpY2F0ZWQoKTtcblx0fVxuXG5cdGF0dGVtcHRMb2dpbigpOiB2b2lkIHtcblx0XHR0aGlzLmF1dGgubG9naW4oKTtcblx0fVxufVxuIl19
