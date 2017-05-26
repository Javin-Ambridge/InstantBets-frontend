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
var env_config_1 = require("./shared/config/env.config");
require("./operators");
var state_service_1 = require("./shared/state/state.service");
var auth_service_1 = require("./shared/auth/auth.service");
var AppComponent = (function () {
    function AppComponent(stateService, auth) {
        var _this = this;
        this.stateService = stateService;
        this.auth = auth;
        this.loggedIn = false;
        console.log('Environment config', env_config_1.Config);
        this.stateService.state.subscribe(function (item) {
            _this.loggedIn = item.loggedIn;
            console.log("New state! From app.component.ts: " + _this.loggedIn);
        });
        auth.handleAuthentication(stateService);
    }
    AppComponent.prototype.logoutFunc = function () {
        this.auth.logout();
        this.stateService.updateState('ADD_STATE', { val: this.auth.isAuthenticated() });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sd-app',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.css'],
        providers: [state_service_1.StateService],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
    }),
    __metadata("design:paramtypes", [state_service_1.StateService,
        auth_service_1.AuthService])
], AppComponent);
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQW1FO0FBQ25FLHlEQUFvRDtBQUNwRCx1QkFBcUI7QUFDckIsOERBQTREO0FBQzVELDJEQUF5RDtBQWF6RCxJQUFhLFlBQVk7SUFHdkIsc0JBQW1CLFlBQTBCLEVBQ3BDLElBQWlCO1FBRDFCLGlCQVFDO1FBUmtCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQ3BDLFNBQUksR0FBSixJQUFJLENBQWE7UUFIMUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUl4QixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLG1CQUFNLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFJO1lBQ3JDLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRSxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU0saUNBQVUsR0FBakI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxFQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFDLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQWpCQSxBQWlCQyxJQUFBO0FBakJZLFlBQVk7SUFSeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsb0JBQW9CO1FBQ2pDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1FBQ2hDLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7UUFDekIsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztxQ0FJaUMsNEJBQVk7UUFDOUIsMEJBQVc7R0FKZixZQUFZLENBaUJ4QjtBQWpCWSxvQ0FBWSIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vc2hhcmVkL2NvbmZpZy9lbnYuY29uZmlnJztcbmltcG9ydCAnLi9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvc3RhdGUvc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL2F1dGgvYXV0aC5zZXJ2aWNlJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIG1haW4gYXBwbGljYXRpb24gY29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1hcHAnLFxuICB0ZW1wbGF0ZVVybDogJ2FwcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydhcHAuY29tcG9uZW50LmNzcyddLFxuICBwcm92aWRlcnM6IFtTdGF0ZVNlcnZpY2VdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgbG9nZ2VkSW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3RhdGVTZXJ2aWNlOiBTdGF0ZVNlcnZpY2UsXG4gICAgcHVibGljIGF1dGg6IEF1dGhTZXJ2aWNlKSB7XG4gICAgY29uc29sZS5sb2coJ0Vudmlyb25tZW50IGNvbmZpZycsIENvbmZpZyk7XG4gICAgdGhpcy5zdGF0ZVNlcnZpY2Uuc3RhdGUuc3Vic2NyaWJlKChpdGVtKSA9PiB7XG4gICAgICB0aGlzLmxvZ2dlZEluID0gaXRlbS5sb2dnZWRJbjtcbiAgICAgIGNvbnNvbGUubG9nKFwiTmV3IHN0YXRlISBGcm9tIGFwcC5jb21wb25lbnQudHM6IFwiICsgdGhpcy5sb2dnZWRJbik7XG4gICAgfSk7XG4gICAgYXV0aC5oYW5kbGVBdXRoZW50aWNhdGlvbihzdGF0ZVNlcnZpY2UpO1xuICB9XG5cbiAgcHVibGljIGxvZ291dEZ1bmMoKTogdm9pZCB7XG4gICAgdGhpcy5hdXRoLmxvZ291dCgpO1xuICAgIHRoaXMuc3RhdGVTZXJ2aWNlLnVwZGF0ZVN0YXRlKCdBRERfU1RBVEUnLCB7dmFsOiB0aGlzLmF1dGguaXNBdXRoZW50aWNhdGVkKCl9KTtcbiAgfVxufVxuIl19
