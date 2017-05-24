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
var ReturnHomeComponent = (function () {
    function ReturnHomeComponent() {
        this.navigateToHome = new core_1.EventEmitter();
    }
    ReturnHomeComponent.prototype.navigate = function () {
        this.navigateToHome.emit(true);
    };
    return ReturnHomeComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ReturnHomeComponent.prototype, "navigateToHome", void 0);
ReturnHomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sd-return-home',
        templateUrl: 'return-home.component.html',
        styleUrls: ['return-home.component.css', '../../../global-css/global.css'],
    })
], ReturnHomeComponent);
exports.ReturnHomeComponent = ReturnHomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbmF2aWdhdGlvbi9yZXR1cm4taG9tZS9yZXR1cm4taG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBdUU7QUFRdkUsSUFBYSxtQkFBbUI7SUFOaEM7UUFPVyxtQkFBYyxHQUFHLElBQUksbUJBQVksRUFBVyxDQUFDO0lBS3hELENBQUM7SUFIQSxzQ0FBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNGLDBCQUFDO0FBQUQsQ0FOQSxBQU1DLElBQUE7QUFMVTtJQUFULGFBQU0sRUFBRTs7MkRBQThDO0FBRDNDLG1CQUFtQjtJQU4vQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsV0FBVyxFQUFFLDRCQUE0QjtRQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsRUFBRSxnQ0FBZ0MsQ0FBQztLQUMzRSxDQUFDO0dBQ1csbUJBQW1CLENBTS9CO0FBTlksa0RBQW1CIiwiZmlsZSI6ImFwcC9zaGFyZWQvbmF2aWdhdGlvbi9yZXR1cm4taG9tZS9yZXR1cm4taG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1yZXR1cm4taG9tZScsXG4gIHRlbXBsYXRlVXJsOiAncmV0dXJuLWhvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsncmV0dXJuLWhvbWUuY29tcG9uZW50LmNzcycsICcuLi8uLi8uLi9nbG9iYWwtY3NzL2dsb2JhbC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUmV0dXJuSG9tZUNvbXBvbmVudCB7IFxuXHRAT3V0cHV0KCkgbmF2aWdhdGVUb0hvbWUgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cblx0bmF2aWdhdGUoKTogdm9pZCB7XG5cdFx0dGhpcy5uYXZpZ2F0ZVRvSG9tZS5lbWl0KHRydWUpO1xuXHR9XG59XG4iXX0=
