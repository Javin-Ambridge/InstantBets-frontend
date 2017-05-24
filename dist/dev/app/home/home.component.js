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
var HomeComponent = (function () {
    function HomeComponent(stateService, ref, route, router) {
        var _this = this;
        this.stateService = stateService;
        this.ref = ref;
        this.route = route;
        this.router = router;
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
        router_1.Router])
], HomeComponent);
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQThGO0FBQzlGLCtEQUE2RDtBQUM3RCwwQ0FBeUQ7QUFZekQsSUFBYSxhQUFhO0lBT3hCLHVCQUFtQixZQUEwQixFQUNwQyxHQUFzQixFQUN0QixLQUFxQixFQUNyQixNQUFjO1FBSHZCLGlCQVNDO1FBVGtCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQ3BDLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFUdkIsWUFBTyxHQUFXLFdBQVcsQ0FBQztRQUM5QixZQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLFNBQUksR0FBVyxvQ0FBb0MsQ0FBQztRQVFsRCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFJO1lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQztZQUNqRCxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDekIsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUtELGdDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUs7YUFDbEIsV0FBVzthQUNYLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDZixLQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw0QkFBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFO1lBQ3pDLElBQUksRUFBRSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzNELENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCx3Q0FBZ0IsR0FBaEI7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUMvQixDQUFDO0lBRUgsb0JBQUM7QUFBRCxDQXZDQSxBQXVDQyxJQUFBO0FBdkNZLGFBQWE7SUFQekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsU0FBUztRQUNuQixXQUFXLEVBQUUscUJBQXFCO1FBQ2xDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixFQUFFLFlBQVksRUFBRSwwQkFBMEIsQ0FBQztRQUMzRSxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtLQUNoRCxDQUFDO3FDQVFpQyw0QkFBWTtRQUMvQix3QkFBaUI7UUFDZix1QkFBYztRQUNiLGVBQU07R0FWWixhQUFhLENBdUN6QjtBQXZDWSxzQ0FBYSIsImZpbGUiOiJhcHAvaG9tZS9ob21lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0YXRlU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zdGF0ZS9zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgSG9tZUNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnaG9tZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydob21lLmNvbXBvbmVudC5jc3MnLCAnc3R5bGVzLmNzcycsICcuLi9nbG9iYWwtY3NzL2dsb2JhbC5jc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB0bXBOYW1lOiBzdHJpbmcgPSBcInRlbXAgbmFtZVwiO1xuICBvbmVVc2VyOiBib29sZWFuID0gdHJ1ZTtcbiAgbG9nbzogc3RyaW5nID0gJy9hc3NldHMvaW1hZ2VzL2luc3RhbnRiZXQtbG9nby5wbmcnO1xuICBzdWI6IGFueTtcbiAgYmV0TmFtZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzdGF0ZVNlcnZpY2U6IFN0YXRlU2VydmljZSxcbiAgICBwdWJsaWMgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwdWJsaWMgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcikge1xuICAgIHRoaXMuc3RhdGVTZXJ2aWNlLnN0YXRlLnN1YnNjcmliZSgoaXRlbSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJuZXcgc3RhdGUhIEZyb20gaG9tZS5jb21wb25lbnQudHNcIik7XG4gICAgICB0aGlzLnRtcE5hbWUgPSBpdGVtLm5hbWU7XG4gICAgICByZWYubWFya0ZvckNoZWNrKCk7IC8vbmVlZCB0byBtYXJrIGhlcmUgaWYgeW91IHdhbnQgdGhlIHZpZXcgdG8gYmUgdXBkYXRlZC5cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG5hbWVzIE9uSW5pdFxuICAgKi9cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlXG4gICAgICAucXVlcnlQYXJhbXNcbiAgICAgIC5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgdGhpcy5iZXROYW1lID0gcGFyYW1zWydiZXROYW1lJ107XG4gICAgICB9KTtcbiAgfVxuXG4gIHRlc3QoKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZVNlcnZpY2UudXBkYXRlU3RhdGUoXCJBRERfU1RBVEVcIiwge1xuICAgICAgbmFtZTogKFwiZmFrZSBuYW1lXCIgKyBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTApICsgMSkpXG4gICAgfSk7XG4gIH1cblxuICB0b2dnbGVVc2VyQW1vdW50KCk6IHZvaWQge1xuICAgIHRoaXMub25lVXNlciA9ICF0aGlzLm9uZVVzZXI7XG4gIH1cblxufVxuIl19
