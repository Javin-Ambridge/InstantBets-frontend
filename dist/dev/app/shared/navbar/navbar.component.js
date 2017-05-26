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
var NavbarComponent = (function () {
    function NavbarComponent(auth) {
        this.auth = auth;
        this.logoutFunc = new core_1.EventEmitter();
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
    core_1.Input(),
    __metadata("design:type", Boolean)
], NavbarComponent.prototype, "loggedIn", void 0);
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
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBbUg7QUFDbkgscURBQW1EO0FBWW5ELElBQWEsZUFBZTtJQUkzQix5QkFBbUIsSUFBaUI7UUFBakIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUYxQixlQUFVLEdBQUcsSUFBSSxtQkFBWSxFQUFXLENBQUM7SUFHbkQsQ0FBQztJQUVELHNDQUFZLEdBQVo7UUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCx1Q0FBYSxHQUFiO1FBQ0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNGLHNCQUFDO0FBQUQsQ0FkQSxBQWNDLElBQUE7QUFiUztJQUFSLFlBQUssRUFBRTs7aURBQW1CO0FBQ2pCO0lBQVQsYUFBTSxFQUFFOzttREFBMEM7QUFGdkMsZUFBZTtJQVAzQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSx1QkFBdUI7UUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsNkJBQTZCLENBQUM7UUFDbEUsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztxQ0FLd0IsMEJBQVc7R0FKeEIsZUFBZSxDQWMzQjtBQWRZLDBDQUFlIiwiZmlsZSI6ImFwcC9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL2F1dGgvYXV0aC5zZXJ2aWNlJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIG5hdmlnYXRpb24gYmFyIGNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtbmF2YmFyJyxcbiAgdGVtcGxhdGVVcmw6ICduYXZiYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnbmF2YmFyLmNvbXBvbmVudC5jc3MnLCAnLi4vLi4vZ2xvYmFsLWNzcy9nbG9iYWwuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOYXZiYXJDb21wb25lbnQge1xuXHRASW5wdXQoKSBsb2dnZWRJbjogYm9vbGVhbjtcblx0QE91dHB1dCgpIGxvZ291dEZ1bmMgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cblx0Y29uc3RydWN0b3IocHVibGljIGF1dGg6IEF1dGhTZXJ2aWNlKSB7XG5cdH1cblxuXHRhdHRlbXB0TG9naW4oKTogdm9pZCB7XG5cdFx0dGhpcy5hdXRoLmxvZ2luKCk7XG5cdH1cblxuXHRhdHRlbXB0TG9nb3V0KCk6IHZvaWQge1xuXHRcdHRoaXMubG9nb3V0RnVuYy5lbWl0KHRydWUpO1xuXHR9XG59XG4iXX0=
