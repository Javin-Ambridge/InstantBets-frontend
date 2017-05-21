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
var HomeComponent = (function () {
    function HomeComponent(stateService, ref) {
        var _this = this;
        this.stateService = stateService;
        this.ref = ref;
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
    };
    HomeComponent.prototype.test = function () {
        this.stateService.updateState("ADD_STATE", {
            name: ("fake name" + Math.floor((Math.random() * 10) + 1))
        });
    };
    HomeComponent.prototype.toggleUserAmount = function () {
        this.oneUser = !this.oneUser;
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
        core_1.ChangeDetectorRef])
], HomeComponent);
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQThGO0FBQzlGLCtEQUE2RDtBQVk3RCxJQUFhLGFBQWE7SUFLeEIsdUJBQW1CLFlBQTBCLEVBQ3BDLEdBQXNCO1FBRC9CLGlCQU9DO1FBUGtCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQ3BDLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBTC9CLFlBQU8sR0FBVyxXQUFXLENBQUM7UUFDOUIsWUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixTQUFJLEdBQVcsb0NBQW9DLENBQUM7UUFJbEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7WUFDakQsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3pCLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFLRCxnQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELDRCQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUU7WUFDekMsSUFBSSxFQUFFLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDM0QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHdDQUFnQixHQUFoQjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQy9CLENBQUM7SUFFSCxvQkFBQztBQUFELENBOUJBLEFBOEJDLElBQUE7QUE5QlksYUFBYTtJQVB6QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSxxQkFBcUI7UUFDbEMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsWUFBWSxFQUFFLDBCQUEwQixDQUFDO1FBQzNFLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7cUNBTWlDLDRCQUFZO1FBQy9CLHdCQUFpQjtHQU5wQixhQUFhLENBOEJ6QjtBQTlCWSxzQ0FBYSIsImZpbGUiOiJhcHAvaG9tZS9ob21lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0YXRlU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zdGF0ZS9zdGF0ZS5zZXJ2aWNlJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIEhvbWVDb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogJ2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnaG9tZS5jb21wb25lbnQuY3NzJywgJ3N0eWxlcy5jc3MnLCAnLi4vZ2xvYmFsLWNzcy9nbG9iYWwuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdG1wTmFtZTogc3RyaW5nID0gXCJ0ZW1wIG5hbWVcIjtcbiAgb25lVXNlcjogYm9vbGVhbiA9IHRydWU7XG4gIGxvZ286IHN0cmluZyA9ICcvYXNzZXRzL2ltYWdlcy9pbnN0YW50YmV0LWxvZ28ucG5nJztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3RhdGVTZXJ2aWNlOiBTdGF0ZVNlcnZpY2UsXG4gICAgcHVibGljIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB0aGlzLnN0YXRlU2VydmljZS5zdGF0ZS5zdWJzY3JpYmUoKGl0ZW0pID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwibmV3IHN0YXRlISBGcm9tIGhvbWUuY29tcG9uZW50LnRzXCIpO1xuICAgICAgdGhpcy50bXBOYW1lID0gaXRlbS5uYW1lO1xuICAgICAgcmVmLm1hcmtGb3JDaGVjaygpOyAvL25lZWQgdG8gbWFyayBoZXJlIGlmIHlvdSB3YW50IHRoZSB2aWV3IHRvIGJlIHVwZGF0ZWQuXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBuYW1lcyBPbkluaXRcbiAgICovXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgdGVzdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXRlU2VydmljZS51cGRhdGVTdGF0ZShcIkFERF9TVEFURVwiLCB7XG4gICAgICBuYW1lOiAoXCJmYWtlIG5hbWVcIiArIE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxKSlcbiAgICB9KTtcbiAgfVxuXG4gIHRvZ2dsZVVzZXJBbW91bnQoKTogdm9pZCB7XG4gICAgdGhpcy5vbmVVc2VyID0gIXRoaXMub25lVXNlcjtcbiAgfVxuXG59XG4iXX0=
