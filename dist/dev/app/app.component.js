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
    AppComponent.prototype.ngOnInit = function () {
        this.stateService.updateState('ADD_STATE', { val: this.auth.isAuthenticated() });
    };
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
        providers: [state_service_1.StateService, auth_service_1.AuthService],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
    }),
    __metadata("design:paramtypes", [state_service_1.StateService,
        auth_service_1.AuthService])
], AppComponent);
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJFO0FBQzNFLHlEQUFvRDtBQUNwRCx1QkFBcUI7QUFDckIsOERBQTREO0FBQzVELDJEQUF5RDtBQWF6RCxJQUFhLFlBQVk7SUFHdkIsc0JBQW1CLFlBQTBCLEVBQ3BDLElBQWlCO1FBRDFCLGlCQVFDO1FBUmtCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQ3BDLFNBQUksR0FBSixJQUFJLENBQWE7UUFIMUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUl4QixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLG1CQUFNLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFJO1lBQ3JDLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRSxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxFQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFDLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRU0saUNBQVUsR0FBakI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxFQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFDLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQXJCQSxBQXFCQyxJQUFBO0FBckJZLFlBQVk7SUFSeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsb0JBQW9CO1FBQ2pDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1FBQ2hDLFNBQVMsRUFBRSxDQUFDLDRCQUFZLEVBQUUsMEJBQVcsQ0FBQztRQUN0QyxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtLQUNoRCxDQUFDO3FDQUlpQyw0QkFBWTtRQUM5QiwwQkFBVztHQUpmLFlBQVksQ0FxQnhCO0FBckJZLG9DQUFZIiwiZmlsZSI6ImFwcC9hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuL3NoYXJlZC9jb25maWcvZW52LmNvbmZpZyc7XG5pbXBvcnQgJy4vb3BlcmF0b3JzJztcbmltcG9ydCB7IFN0YXRlU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL3N0YXRlL3N0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9hdXRoL2F1dGguc2VydmljZSc7XG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBtYWluIGFwcGxpY2F0aW9uIGNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtYXBwJyxcbiAgdGVtcGxhdGVVcmw6ICdhcHAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnYXBwLmNvbXBvbmVudC5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbU3RhdGVTZXJ2aWNlLCBBdXRoU2VydmljZV0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBsb2dnZWRJbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzdGF0ZVNlcnZpY2U6IFN0YXRlU2VydmljZSxcbiAgICBwdWJsaWMgYXV0aDogQXV0aFNlcnZpY2UpIHtcbiAgICBjb25zb2xlLmxvZygnRW52aXJvbm1lbnQgY29uZmlnJywgQ29uZmlnKTtcbiAgICB0aGlzLnN0YXRlU2VydmljZS5zdGF0ZS5zdWJzY3JpYmUoKGl0ZW0pID0+IHtcbiAgICAgIHRoaXMubG9nZ2VkSW4gPSBpdGVtLmxvZ2dlZEluO1xuICAgICAgY29uc29sZS5sb2coXCJOZXcgc3RhdGUhIEZyb20gYXBwLmNvbXBvbmVudC50czogXCIgKyB0aGlzLmxvZ2dlZEluKTtcbiAgICB9KTtcbiAgICBhdXRoLmhhbmRsZUF1dGhlbnRpY2F0aW9uKHN0YXRlU2VydmljZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXRlU2VydmljZS51cGRhdGVTdGF0ZSgnQUREX1NUQVRFJywge3ZhbDogdGhpcy5hdXRoLmlzQXV0aGVudGljYXRlZCgpfSk7XG4gIH1cblxuICBwdWJsaWMgbG9nb3V0RnVuYygpOiB2b2lkIHtcbiAgICB0aGlzLmF1dGgubG9nb3V0KCk7XG4gICAgdGhpcy5zdGF0ZVNlcnZpY2UudXBkYXRlU3RhdGUoJ0FERF9TVEFURScsIHt2YWw6IHRoaXMuYXV0aC5pc0F1dGhlbnRpY2F0ZWQoKX0pO1xuICB9XG59XG4iXX0=
