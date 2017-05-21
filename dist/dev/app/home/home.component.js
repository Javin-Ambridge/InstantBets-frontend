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
        styleUrls: ['home.component.css', 'home.css', '../global-css/global.css'],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
    }),
    __metadata("design:paramtypes", [state_service_1.StateService,
        core_1.ChangeDetectorRef])
], HomeComponent);
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQThGO0FBQzlGLCtEQUE2RDtBQVk3RCxJQUFhLGFBQWE7SUFLeEIsdUJBQW1CLFlBQTBCLEVBQ3BDLEdBQXNCO1FBRC9CLGlCQU9DO1FBUGtCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQ3BDLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBTC9CLFlBQU8sR0FBVyxXQUFXLENBQUM7UUFDOUIsWUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixTQUFJLEdBQVcsb0NBQW9DLENBQUM7UUFJbEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7WUFDakQsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3pCLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFLRCxnQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELDRCQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUU7WUFDekMsSUFBSSxFQUFFLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDM0QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHdDQUFnQixHQUFoQjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQy9CLENBQUM7SUFFSCxvQkFBQztBQUFELENBOUJBLEFBOEJDLElBQUE7QUE5QlksYUFBYTtJQVB6QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSxxQkFBcUI7UUFDbEMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsVUFBVSxFQUFFLDBCQUEwQixDQUFDO1FBQ3pFLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7cUNBTWlDLDRCQUFZO1FBQy9CLHdCQUFpQjtHQU5wQixhQUFhLENBOEJ6QjtBQTlCWSxzQ0FBYSIsImZpbGUiOiJhcHAvaG9tZS9ob21lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0YXRlU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zdGF0ZS9zdGF0ZS5zZXJ2aWNlJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIEhvbWVDb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogJ2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnaG9tZS5jb21wb25lbnQuY3NzJywgJ2hvbWUuY3NzJywgJy4uL2dsb2JhbC1jc3MvZ2xvYmFsLmNzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHRtcE5hbWU6IHN0cmluZyA9IFwidGVtcCBuYW1lXCI7XG4gIG9uZVVzZXI6IGJvb2xlYW4gPSB0cnVlO1xuICBsb2dvOiBzdHJpbmcgPSAnL2Fzc2V0cy9pbWFnZXMvaW5zdGFudGJldC1sb2dvLnBuZyc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHN0YXRlU2VydmljZTogU3RhdGVTZXJ2aWNlLFxuICAgIHB1YmxpYyByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgdGhpcy5zdGF0ZVNlcnZpY2Uuc3RhdGUuc3Vic2NyaWJlKChpdGVtKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIm5ldyBzdGF0ZSEgRnJvbSBob21lLmNvbXBvbmVudC50c1wiKTtcbiAgICAgIHRoaXMudG1wTmFtZSA9IGl0ZW0ubmFtZTtcbiAgICAgIHJlZi5tYXJrRm9yQ2hlY2soKTsgLy9uZWVkIHRvIG1hcmsgaGVyZSBpZiB5b3Ugd2FudCB0aGUgdmlldyB0byBiZSB1cGRhdGVkLlxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbmFtZXMgT25Jbml0XG4gICAqL1xuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHRlc3QoKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZVNlcnZpY2UudXBkYXRlU3RhdGUoXCJBRERfU1RBVEVcIiwge1xuICAgICAgbmFtZTogKFwiZmFrZSBuYW1lXCIgKyBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTApICsgMSkpXG4gICAgfSk7XG4gIH1cblxuICB0b2dnbGVVc2VyQW1vdW50KCk6IHZvaWQge1xuICAgIHRoaXMub25lVXNlciA9ICF0aGlzLm9uZVVzZXI7XG4gIH1cblxufVxuIl19
