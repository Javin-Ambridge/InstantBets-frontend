"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dashboard_component_1 = require("./dashboard.component");
var dashboard_routing_module_1 = require("./dashboard-routing.module");
var shared_module_1 = require("../shared/shared.module");
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    core_1.NgModule({
        imports: [dashboard_routing_module_1.DashboardRoutingModule, shared_module_1.SharedModule],
        declarations: [dashboard_component_1.DashboardComponent],
        exports: [dashboard_component_1.DashboardComponent]
    })
], DashboardModule);
exports.DashboardModule = DashboardModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF5QztBQUN6Qyw2REFBMkQ7QUFDM0QsdUVBQW9FO0FBQ3BFLHlEQUF1RDtBQU92RCxJQUFhLGVBQWU7SUFBNUI7SUFBK0IsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBL0IsQUFBZ0MsSUFBQTtBQUFuQixlQUFlO0lBTDNCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLGlEQUFzQixFQUFFLDRCQUFZLENBQUM7UUFDL0MsWUFBWSxFQUFFLENBQUMsd0NBQWtCLENBQUM7UUFDbEMsT0FBTyxFQUFFLENBQUMsd0NBQWtCLENBQUM7S0FDOUIsQ0FBQztHQUNXLGVBQWUsQ0FBSTtBQUFuQiwwQ0FBZSIsImZpbGUiOiJhcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9kYXNoYm9hcmQuY29tcG9uZW50JztcbmltcG9ydCB7IERhc2hib2FyZFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2Rhc2hib2FyZC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtEYXNoYm9hcmRSb3V0aW5nTW9kdWxlLCBTaGFyZWRNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtEYXNoYm9hcmRDb21wb25lbnRdLFxuICBleHBvcnRzOiBbRGFzaGJvYXJkQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRNb2R1bGUgeyB9XG4iXX0=
