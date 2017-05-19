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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQThGO0FBQzlGLCtEQUE2RDtBQVk3RCxJQUFhLGFBQWE7SUFJeEIsdUJBQW1CLFlBQTBCLEVBQ3BDLEdBQXNCO1FBRC9CLGlCQU9DO1FBUGtCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQ3BDLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBSi9CLFlBQU8sR0FBVyxXQUFXLENBQUM7UUFDOUIsWUFBTyxHQUFZLElBQUksQ0FBQztRQUl0QixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFJO1lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQztZQUNqRCxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDekIsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUtELGdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsNEJBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRTtZQUN6QyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUMzRCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsd0NBQWdCLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDL0IsQ0FBQztJQUVILG9CQUFDO0FBQUQsQ0E3QkEsQUE2QkMsSUFBQTtBQTdCWSxhQUFhO0lBUHpCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLHFCQUFxQjtRQUNsQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxVQUFVLEVBQUUsMEJBQTBCLENBQUM7UUFDekUsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztxQ0FLaUMsNEJBQVk7UUFDL0Isd0JBQWlCO0dBTHBCLGFBQWEsQ0E2QnpCO0FBN0JZLHNDQUFhIiwiZmlsZSI6ImFwcC9ob21lL2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3N0YXRlL3N0YXRlLnNlcnZpY2UnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgSG9tZUNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnaG9tZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydob21lLmNvbXBvbmVudC5jc3MnLCAnaG9tZS5jc3MnLCAnLi4vZ2xvYmFsLWNzcy9nbG9iYWwuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdG1wTmFtZTogc3RyaW5nID0gXCJ0ZW1wIG5hbWVcIjtcbiAgb25lVXNlcjogYm9vbGVhbiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHN0YXRlU2VydmljZTogU3RhdGVTZXJ2aWNlLFxuICAgIHB1YmxpYyByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgdGhpcy5zdGF0ZVNlcnZpY2Uuc3RhdGUuc3Vic2NyaWJlKChpdGVtKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIm5ldyBzdGF0ZSEgRnJvbSBob21lLmNvbXBvbmVudC50c1wiKTtcbiAgICAgIHRoaXMudG1wTmFtZSA9IGl0ZW0ubmFtZTtcbiAgICAgIHJlZi5tYXJrRm9yQ2hlY2soKTsgLy9uZWVkIHRvIG1hcmsgaGVyZSBpZiB5b3Ugd2FudCB0aGUgdmlldyB0byBiZSB1cGRhdGVkLlxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbmFtZXMgT25Jbml0XG4gICAqL1xuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHRlc3QoKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZVNlcnZpY2UudXBkYXRlU3RhdGUoXCJBRERfU1RBVEVcIiwge1xuICAgICAgbmFtZTogKFwiZmFrZSBuYW1lXCIgKyBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTApICsgMSkpXG4gICAgfSk7XG4gIH1cblxuICB0b2dnbGVVc2VyQW1vdW50KCk6IHZvaWQge1xuICAgIHRoaXMub25lVXNlciA9ICF0aGlzLm9uZVVzZXI7XG4gIH1cblxufVxuIl19
