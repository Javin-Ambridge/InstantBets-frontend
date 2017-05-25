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
var auth_service_1 = require("../shared/auth/auth.service");
var HomeComponent = (function () {
    function HomeComponent(stateService, ref, route, router, scrollTo, auth) {
        var _this = this;
        this.stateService = stateService;
        this.ref = ref;
        this.route = route;
        this.router = router;
        this.scrollTo = scrollTo;
        this.auth = auth;
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
    HomeComponent.prototype.authAttempt = function () {
        this.auth.login();
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
        scroll_animation_service_1.ScrollAnimationService,
        auth_service_1.AuthService])
], HomeComponent);
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQThGO0FBQzlGLCtEQUE2RDtBQUM3RCwwQ0FBeUQ7QUFDekQsZ0dBQTZGO0FBQzdGLDREQUEwRDtBQVkxRCxJQUFhLGFBQWE7SUFPeEIsdUJBQW1CLFlBQTBCLEVBQ3BDLEdBQXNCLEVBQ3RCLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxRQUFnQyxFQUNoQyxJQUFpQjtRQUwxQixpQkFXQztRQVhrQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUNwQyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBd0I7UUFDaEMsU0FBSSxHQUFKLElBQUksQ0FBYTtRQVgxQixZQUFPLEdBQVcsV0FBVyxDQUFDO1FBQzlCLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsU0FBSSxHQUFXLG9DQUFvQyxDQUFDO1FBVWxELElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1lBQ2pELEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN6QixHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBS0QsZ0NBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSzthQUNsQixXQUFXO2FBQ1gsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNmLEtBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDRCQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUU7WUFDekMsSUFBSSxFQUFFLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDM0QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHdDQUFnQixHQUFoQjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQy9CLENBQUM7SUFFRCxvQ0FBWSxHQUFaLFVBQWEsR0FBUTtRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFSCxvQkFBQztBQUFELENBakRBLEFBaURDLElBQUE7QUFqRFksYUFBYTtJQVB6QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSxxQkFBcUI7UUFDbEMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsWUFBWSxFQUFFLDBCQUEwQixDQUFDO1FBQzNFLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7cUNBUWlDLDRCQUFZO1FBQy9CLHdCQUFpQjtRQUNmLHVCQUFjO1FBQ2IsZUFBTTtRQUNKLGlEQUFzQjtRQUMxQiwwQkFBVztHQVpmLGFBQWEsQ0FpRHpCO0FBakRZLHNDQUFhIiwiZmlsZSI6ImFwcC9ob21lL2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3N0YXRlL3N0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTY3JvbGxBbmltYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3Njcm9sbC1hbmltYXRpb24vc2Nyb2xsLWFuaW1hdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2F1dGgvYXV0aC5zZXJ2aWNlJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIEhvbWVDb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogJ2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnaG9tZS5jb21wb25lbnQuY3NzJywgJ3N0eWxlcy5jc3MnLCAnLi4vZ2xvYmFsLWNzcy9nbG9iYWwuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdG1wTmFtZTogc3RyaW5nID0gXCJ0ZW1wIG5hbWVcIjtcbiAgb25lVXNlcjogYm9vbGVhbiA9IHRydWU7XG4gIGxvZ286IHN0cmluZyA9ICcvYXNzZXRzL2ltYWdlcy9pbnN0YW50YmV0LWxvZ28ucG5nJztcbiAgc3ViOiBhbnk7XG4gIGJldE5hbWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3RhdGVTZXJ2aWNlOiBTdGF0ZVNlcnZpY2UsXG4gICAgcHVibGljIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHVibGljIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHVibGljIHNjcm9sbFRvOiBTY3JvbGxBbmltYXRpb25TZXJ2aWNlLFxuICAgIHB1YmxpYyBhdXRoOiBBdXRoU2VydmljZSkge1xuICAgIHRoaXMuc3RhdGVTZXJ2aWNlLnN0YXRlLnN1YnNjcmliZSgoaXRlbSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJuZXcgc3RhdGUhIEZyb20gaG9tZS5jb21wb25lbnQudHNcIik7XG4gICAgICB0aGlzLnRtcE5hbWUgPSBpdGVtLm5hbWU7XG4gICAgICByZWYubWFya0ZvckNoZWNrKCk7IC8vbmVlZCB0byBtYXJrIGhlcmUgaWYgeW91IHdhbnQgdGhlIHZpZXcgdG8gYmUgdXBkYXRlZC5cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG5hbWVzIE9uSW5pdFxuICAgKi9cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlXG4gICAgICAucXVlcnlQYXJhbXNcbiAgICAgIC5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgdGhpcy5iZXROYW1lID0gcGFyYW1zWydiZXROYW1lJ107XG4gICAgICB9KTtcbiAgfVxuXG4gIHRlc3QoKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZVNlcnZpY2UudXBkYXRlU3RhdGUoXCJBRERfU1RBVEVcIiwge1xuICAgICAgbmFtZTogKFwiZmFrZSBuYW1lXCIgKyBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTApICsgMSkpXG4gICAgfSk7XG4gIH1cblxuICB0b2dnbGVVc2VyQW1vdW50KCk6IHZvaWQge1xuICAgIHRoaXMub25lVXNlciA9ICF0aGlzLm9uZVVzZXI7XG4gIH1cblxuICBzbW9vdGhTY3JvbGwoZUlkOiBhbnkpIHtcbiAgICB0aGlzLnNjcm9sbFRvLnNtb290aFNjcm9sbChlSWQsIDEwKTtcbiAgfVxuXG4gIGF1dGhBdHRlbXB0KCk6IHZvaWQge1xuICAgIHRoaXMuYXV0aC5sb2dpbigpO1xuICB9XG5cbn1cbiJdfQ==
