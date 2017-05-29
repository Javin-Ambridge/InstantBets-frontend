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
var angular2_jwt_1 = require("angular2-jwt");
require("rxjs/add/operator/map");
var DashboardComponent = (function () {
    function DashboardComponent(ref, auth, stateService, authHttp) {
        var _this = this;
        this.ref = ref;
        this.auth = auth;
        this.stateService = stateService;
        this.authHttp = authHttp;
        this.loggedIn = false;
        stateService.state.subscribe(function (item) {
            console.log("changing right here1");
            _this.loggedIn = item.loggedIn;
            _this.getDBData();
            ref.markForCheck();
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getDBData();
    };
    DashboardComponent.prototype.getDBData = function () {
        console.log("Getting Dashboard DATA!@");
        this.authHttp.get("https://instantbet.herokuapp.com/api/test")
            .map(function (res) { return res.json(); })
            .subscribe(function (item) {
            console.log("donezo");
        });
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
        state_service_1.StateService,
        angular2_jwt_1.AuthHttp])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUF5RztBQUN6RywrREFBNkQ7QUFHN0QsNERBQTBEO0FBQzFELDZDQUF3QztBQUN4QyxpQ0FBK0I7QUFZL0IsSUFBYSxrQkFBa0I7SUFHOUIsNEJBQW1CLEdBQXNCLEVBQ2pDLElBQWlCLEVBQ2pCLFlBQTBCLEVBQzFCLFFBQWtCO1FBSDFCLGlCQVVDO1FBVmtCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ2pDLFNBQUksR0FBSixJQUFJLENBQWE7UUFDakIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUwxQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBTXpCLFlBQVksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDcEMsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzlCLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsc0NBQVMsR0FBVDtRQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQzthQUMzRCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3RCLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUVELHVDQUFVLEdBQVY7UUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3JELENBQUM7SUFFRCx5Q0FBWSxHQUFaO1FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBQ0YseUJBQUM7QUFBRCxDQW5DQSxBQW1DQyxJQUFBO0FBbkNZLGtCQUFrQjtJQVA5QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFdBQVcsRUFBRSwwQkFBMEI7UUFDdkMsU0FBUyxFQUFFLENBQUMsWUFBWSxFQUFFLDBCQUEwQixFQUFFLGdDQUFnQyxDQUFDO1FBQ3ZGLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7cUNBSXVCLHdCQUFpQjtRQUMzQiwwQkFBVztRQUNILDRCQUFZO1FBQ2hCLHVCQUFRO0dBTmQsa0JBQWtCLENBbUM5QjtBQW5DWSxnREFBa0IiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc3RhdGUvc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNjcm9sbEFuaW1hdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2Nyb2xsLWFuaW1hdGlvbi9zY3JvbGwtYW5pbWF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvYXV0aC9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aEh0dHAgfSBmcm9tICdhbmd1bGFyMi1qd3QnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgSG9tZUNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtZGFzaGJvYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXNoYm9hcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc3R5bGVzLmNzcycsICcuLi9nbG9iYWwtY3NzL2dsb2JhbC5jc3MnLCAnLi4vZ2xvYmFsLWNzcy9mb2xkaW5nLWN1YmUuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRsb2dnZWRJbjogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyByZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdHB1YmxpYyBhdXRoOiBBdXRoU2VydmljZSxcblx0XHRwdWJsaWMgc3RhdGVTZXJ2aWNlOiBTdGF0ZVNlcnZpY2UsXG5cdFx0cHVibGljIGF1dGhIdHRwOiBBdXRoSHR0cCkge1xuXHRcdHN0YXRlU2VydmljZS5zdGF0ZS5zdWJzY3JpYmUoKGl0ZW0pID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKFwiY2hhbmdpbmcgcmlnaHQgaGVyZTFcIik7XG5cdFx0XHR0aGlzLmxvZ2dlZEluID0gaXRlbS5sb2dnZWRJbjtcblx0XHRcdHRoaXMuZ2V0REJEYXRhKCk7XG5cdFx0XHRyZWYubWFya0ZvckNoZWNrKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHR0aGlzLmdldERCRGF0YSgpO1xuXHR9XG5cblx0Z2V0REJEYXRhKCk6IGFueSB7XG5cdFx0Y29uc29sZS5sb2coXCJHZXR0aW5nIERhc2hib2FyZCBEQVRBIUBcIik7XG5cdCAgICB0aGlzLmF1dGhIdHRwLmdldChgaHR0cHM6Ly9pbnN0YW50YmV0Lmhlcm9rdWFwcC5jb20vYXBpL3Rlc3RgKVxuXHQgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuXHQgICAgICAuc3Vic2NyaWJlKChpdGVtKSA9PiB7XG5cdCAgICAgIFx0Y29uc29sZS5sb2coXCJkb25lem9cIik7XG5cdCAgICAgIH0pO1xuXHR9XG5cblx0aXNMb2dnZWRJbigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5sb2dnZWRJbiB8fCB0aGlzLmF1dGguaXNBdXRoZW50aWNhdGVkKCk7XG5cdH1cblxuXHRhdHRlbXB0TG9naW4oKTogdm9pZCB7XG5cdFx0dGhpcy5hdXRoLmxvZ2luKCk7XG5cdH1cbn1cbiJdfQ==
