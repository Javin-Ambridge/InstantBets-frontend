"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var navbar_component_1 = require("./navbar/navbar.component");
var bet_view_component_1 = require("./bet-displaying/bet-view/bet-view.component");
var bet_state_component_1 = require("./bet-displaying/bet-state/bet-state.component");
var return_home_component_1 = require("./navigation/return-home/return-home.component");
var SharedModule = SharedModule_1 = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: []
        };
    };
    return SharedModule;
}());
SharedModule = SharedModule_1 = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, router_1.RouterModule],
        declarations: [navbar_component_1.NavbarComponent, bet_view_component_1.BetViewComponent, bet_state_component_1.BetStateComponent, return_home_component_1.ReturnHomeComponent],
        exports: [navbar_component_1.NavbarComponent, bet_view_component_1.BetViewComponent, bet_state_component_1.BetStateComponent, return_home_component_1.ReturnHomeComponent,
            common_1.CommonModule, forms_1.FormsModule, router_1.RouterModule]
    })
], SharedModule);
exports.SharedModule = SharedModule;
var SharedModule_1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUE4RDtBQUM5RCwwQ0FBK0M7QUFDL0Msd0NBQTZDO0FBQzdDLDBDQUErQztBQUUvQyw4REFBNEQ7QUFDNUQsbUZBQWdGO0FBQ2hGLHNGQUFtRjtBQUNuRix3RkFBcUY7QUFZckYsSUFBYSxZQUFZO0lBQXpCO0lBT0EsQ0FBQztJQU5RLG9CQUFPLEdBQWQ7UUFDRSxNQUFNLENBQUM7WUFDTCxRQUFRLEVBQUUsY0FBWTtZQUN0QixTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7SUFDSixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLFlBQVk7SUFOeEIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMscUJBQVksRUFBRSxxQkFBWSxDQUFDO1FBQ3JDLFlBQVksRUFBRSxDQUFDLGtDQUFlLEVBQUUscUNBQWdCLEVBQUUsdUNBQWlCLEVBQUUsMkNBQW1CLENBQUM7UUFDekYsT0FBTyxFQUFFLENBQUMsa0NBQWUsRUFBRSxxQ0FBZ0IsRUFBRSx1Q0FBaUIsRUFBRSwyQ0FBbUI7WUFDakYscUJBQVksRUFBRSxtQkFBVyxFQUFFLHFCQUFZLENBQUM7S0FDM0MsQ0FBQztHQUNXLFlBQVksQ0FPeEI7QUFQWSxvQ0FBWSIsImZpbGUiOiJhcHAvc2hhcmVkL3NoYXJlZC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgTmF2YmFyQ29tcG9uZW50IH0gZnJvbSAnLi9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCZXRWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9iZXQtZGlzcGxheWluZy9iZXQtdmlldy9iZXQtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmV0U3RhdGVDb21wb25lbnQgfSBmcm9tICcuL2JldC1kaXNwbGF5aW5nL2JldC1zdGF0ZS9iZXQtc3RhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IFJldHVybkhvbWVDb21wb25lbnQgfSBmcm9tICcuL25hdmlnYXRpb24vcmV0dXJuLWhvbWUvcmV0dXJuLWhvbWUuY29tcG9uZW50JztcblxuLyoqXG4gKiBEbyBub3Qgc3BlY2lmeSBwcm92aWRlcnMgZm9yIG1vZHVsZXMgdGhhdCBtaWdodCBiZSBpbXBvcnRlZCBieSBhIGxhenkgbG9hZGVkIG1vZHVsZS5cbiAqL1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtOYXZiYXJDb21wb25lbnQsIEJldFZpZXdDb21wb25lbnQsIEJldFN0YXRlQ29tcG9uZW50LCBSZXR1cm5Ib21lQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW05hdmJhckNvbXBvbmVudCwgQmV0Vmlld0NvbXBvbmVudCwgQmV0U3RhdGVDb21wb25lbnQsIFJldHVybkhvbWVDb21wb25lbnQsXG4gICAgQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgUm91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFNoYXJlZE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW11cbiAgICB9O1xuICB9XG59XG4iXX0=
