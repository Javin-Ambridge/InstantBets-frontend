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
var go_to_learn_more_component_1 = require("./navigation/go-to-learn-more/go-to-learn-more.component");
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
        declarations: [navbar_component_1.NavbarComponent, bet_view_component_1.BetViewComponent, bet_state_component_1.BetStateComponent, return_home_component_1.ReturnHomeComponent, go_to_learn_more_component_1.GoToLearnMoreComponent],
        exports: [navbar_component_1.NavbarComponent, bet_view_component_1.BetViewComponent, bet_state_component_1.BetStateComponent, return_home_component_1.ReturnHomeComponent, go_to_learn_more_component_1.GoToLearnMoreComponent,
            common_1.CommonModule, forms_1.FormsModule, router_1.RouterModule]
    })
], SharedModule);
exports.SharedModule = SharedModule;
var SharedModule_1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUE4RDtBQUM5RCwwQ0FBK0M7QUFDL0Msd0NBQTZDO0FBQzdDLDBDQUErQztBQUUvQyw4REFBNEQ7QUFDNUQsbUZBQWdGO0FBQ2hGLHNGQUFtRjtBQUNuRix3RkFBcUY7QUFDckYsdUdBQWtHO0FBWWxHLElBQWEsWUFBWTtJQUF6QjtJQU9BLENBQUM7SUFOUSxvQkFBTyxHQUFkO1FBQ0UsTUFBTSxDQUFDO1lBQ0wsUUFBUSxFQUFFLGNBQVk7WUFDdEIsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO0lBQ0osQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FQQSxBQU9DLElBQUE7QUFQWSxZQUFZO0lBTnhCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLHFCQUFZLEVBQUUscUJBQVksQ0FBQztRQUNyQyxZQUFZLEVBQUUsQ0FBQyxrQ0FBZSxFQUFFLHFDQUFnQixFQUFFLHVDQUFpQixFQUFFLDJDQUFtQixFQUFFLG1EQUFzQixDQUFDO1FBQ2pILE9BQU8sRUFBRSxDQUFDLGtDQUFlLEVBQUUscUNBQWdCLEVBQUUsdUNBQWlCLEVBQUUsMkNBQW1CLEVBQUUsbURBQXNCO1lBQ3pHLHFCQUFZLEVBQUUsbUJBQVcsRUFBRSxxQkFBWSxDQUFDO0tBQzNDLENBQUM7R0FDVyxZQUFZLENBT3hCO0FBUFksb0NBQVkiLCJmaWxlIjoiYXBwL3NoYXJlZC9zaGFyZWQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IE5hdmJhckNvbXBvbmVudCB9IGZyb20gJy4vbmF2YmFyL25hdmJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmV0Vmlld0NvbXBvbmVudCB9IGZyb20gJy4vYmV0LWRpc3BsYXlpbmcvYmV0LXZpZXcvYmV0LXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEJldFN0YXRlQ29tcG9uZW50IH0gZnJvbSAnLi9iZXQtZGlzcGxheWluZy9iZXQtc3RhdGUvYmV0LXN0YXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXR1cm5Ib21lQ29tcG9uZW50IH0gZnJvbSAnLi9uYXZpZ2F0aW9uL3JldHVybi1ob21lL3JldHVybi1ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHb1RvTGVhcm5Nb3JlQ29tcG9uZW50IH0gZnJvbSAnLi9uYXZpZ2F0aW9uL2dvLXRvLWxlYXJuLW1vcmUvZ28tdG8tbGVhcm4tbW9yZS5jb21wb25lbnQnO1xuXG4vKipcbiAqIERvIG5vdCBzcGVjaWZ5IHByb3ZpZGVycyBmb3IgbW9kdWxlcyB0aGF0IG1pZ2h0IGJlIGltcG9ydGVkIGJ5IGEgbGF6eSBsb2FkZWQgbW9kdWxlLlxuICovXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW05hdmJhckNvbXBvbmVudCwgQmV0Vmlld0NvbXBvbmVudCwgQmV0U3RhdGVDb21wb25lbnQsIFJldHVybkhvbWVDb21wb25lbnQsIEdvVG9MZWFybk1vcmVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTmF2YmFyQ29tcG9uZW50LCBCZXRWaWV3Q29tcG9uZW50LCBCZXRTdGF0ZUNvbXBvbmVudCwgUmV0dXJuSG9tZUNvbXBvbmVudCwgR29Ub0xlYXJuTW9yZUNvbXBvbmVudCxcbiAgICBDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU2hhcmVkTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==
