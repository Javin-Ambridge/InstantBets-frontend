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
        declarations: [navbar_component_1.NavbarComponent, bet_view_component_1.BetViewComponent, bet_state_component_1.BetStateComponent],
        exports: [navbar_component_1.NavbarComponent, bet_view_component_1.BetViewComponent, bet_state_component_1.BetStateComponent,
            common_1.CommonModule, forms_1.FormsModule, router_1.RouterModule]
    })
], SharedModule);
exports.SharedModule = SharedModule;
var SharedModule_1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUE4RDtBQUM5RCwwQ0FBK0M7QUFDL0Msd0NBQTZDO0FBQzdDLDBDQUErQztBQUUvQyw4REFBNEQ7QUFDNUQsbUZBQWdGO0FBQ2hGLHNGQUFtRjtBQVluRixJQUFhLFlBQVk7SUFBekI7SUFPQSxDQUFDO0lBTlEsb0JBQU8sR0FBZDtRQUNFLE1BQU0sQ0FBQztZQUNMLFFBQVEsRUFBRSxjQUFZO1lBQ3RCLFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQztJQUNKLENBQUM7SUFDSCxtQkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksWUFBWTtJQU54QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxFQUFFLHFCQUFZLENBQUM7UUFDckMsWUFBWSxFQUFFLENBQUMsa0NBQWUsRUFBRSxxQ0FBZ0IsRUFBRSx1Q0FBaUIsQ0FBQztRQUNwRSxPQUFPLEVBQUUsQ0FBQyxrQ0FBZSxFQUFFLHFDQUFnQixFQUFFLHVDQUFpQjtZQUM1RCxxQkFBWSxFQUFFLG1CQUFXLEVBQUUscUJBQVksQ0FBQztLQUMzQyxDQUFDO0dBQ1csWUFBWSxDQU94QjtBQVBZLG9DQUFZIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBOYXZiYXJDb21wb25lbnQgfSBmcm9tICcuL25hdmJhci9uYXZiYXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJldFZpZXdDb21wb25lbnQgfSBmcm9tICcuL2JldC1kaXNwbGF5aW5nL2JldC12aWV3L2JldC12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCZXRTdGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vYmV0LWRpc3BsYXlpbmcvYmV0LXN0YXRlL2JldC1zdGF0ZS5jb21wb25lbnQnO1xuXG4vKipcbiAqIERvIG5vdCBzcGVjaWZ5IHByb3ZpZGVycyBmb3IgbW9kdWxlcyB0aGF0IG1pZ2h0IGJlIGltcG9ydGVkIGJ5IGEgbGF6eSBsb2FkZWQgbW9kdWxlLlxuICovXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW05hdmJhckNvbXBvbmVudCwgQmV0Vmlld0NvbXBvbmVudCwgQmV0U3RhdGVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTmF2YmFyQ29tcG9uZW50LCBCZXRWaWV3Q29tcG9uZW50LCBCZXRTdGF0ZUNvbXBvbmVudCxcbiAgICBDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU2hhcmVkTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==
