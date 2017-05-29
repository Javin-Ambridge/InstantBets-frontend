"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var home_module_1 = require("./home/home.module");
var dashboard_module_1 = require("./dashboard/dashboard.module");
var learn_more_module_1 = require("./learn-more/learn-more.module");
var shared_module_1 = require("./shared/shared.module");
var window_service_1 = require("./shared/window/window.service");
var scroll_animation_service_1 = require("./shared/scroll-animation/scroll-animation.service");
var date_formatter_service_1 = require("./shared/date-formatter/date-formatter.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, app_routing_module_1.AppRoutingModule, home_module_1.HomeModule, learn_more_module_1.LearnMoreModule, dashboard_module_1.DashboardModule, shared_module_1.SharedModule.forRoot()],
        declarations: [app_component_1.AppComponent],
        providers: [{
                provide: common_1.APP_BASE_HREF,
                useValue: '/'
            }, window_service_1.WindowRef,
            scroll_animation_service_1.ScrollAnimationService,
            date_formatter_service_1.DateFormatterService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDhEQUEwRDtBQUMxRCwwQ0FBZ0Q7QUFDaEQsc0NBQTJDO0FBQzNDLGlEQUErQztBQUMvQywyREFBd0Q7QUFFeEQsa0RBQWdEO0FBQ2hELGlFQUErRDtBQUMvRCxvRUFBaUU7QUFDakUsd0RBQXNEO0FBQ3RELGlFQUEyRDtBQUMzRCwrRkFBNEY7QUFFNUYseUZBQXNGO0FBZXRGLElBQWEsU0FBUztJQUF0QjtJQUF5QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUF6QixBQUEwQixJQUFBO0FBQWIsU0FBUztJQVpyQixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxnQ0FBYSxFQUFFLGlCQUFVLEVBQUUscUNBQWdCLEVBQUUsd0JBQVUsRUFBRSxtQ0FBZSxFQUFFLGtDQUFlLEVBQUUsNEJBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM1SCxZQUFZLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1FBQzVCLFNBQVMsRUFBRSxDQUFDO2dCQUNWLE9BQU8sRUFBRSxzQkFBYTtnQkFDdEIsUUFBUSxFQUFFLGlCQUFpQjthQUM1QixFQUFFLDBCQUFTO1lBQ1osaURBQXNCO1lBQ3RCLDZDQUFvQixDQUFDO1FBQ3JCLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7S0FFMUIsQ0FBQztHQUNXLFNBQVMsQ0FBSTtBQUFiLDhCQUFTIiwiZmlsZSI6ImFwcC9hcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEFQUF9CQVNFX0hSRUYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC1yb3V0aW5nLm1vZHVsZSc7XG5cbmltcG9ydCB7IEhvbWVNb2R1bGUgfSBmcm9tICcuL2hvbWUvaG9tZS5tb2R1bGUnO1xuaW1wb3J0IHsgRGFzaGJvYXJkTW9kdWxlIH0gZnJvbSAnLi9kYXNoYm9hcmQvZGFzaGJvYXJkLm1vZHVsZSc7XG5pbXBvcnQgeyBMZWFybk1vcmVNb2R1bGUgfSBmcm9tICcuL2xlYXJuLW1vcmUvbGVhcm4tbW9yZS5tb2R1bGUnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuL3NoYXJlZC93aW5kb3cvd2luZG93LnNlcnZpY2UnO1xuaW1wb3J0IHsgU2Nyb2xsQW5pbWF0aW9uU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL3Njcm9sbC1hbmltYXRpb24vc2Nyb2xsLWFuaW1hdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFN0YXRlU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL3N0YXRlL3N0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0ZUZvcm1hdHRlclNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9kYXRlLWZvcm1hdHRlci9kYXRlLWZvcm1hdHRlci5zZXJ2aWNlJztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQnJvd3Nlck1vZHVsZSwgSHR0cE1vZHVsZSwgQXBwUm91dGluZ01vZHVsZSwgSG9tZU1vZHVsZSwgTGVhcm5Nb3JlTW9kdWxlLCBEYXNoYm9hcmRNb2R1bGUsIFNoYXJlZE1vZHVsZS5mb3JSb290KCldLFxuICBkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogQVBQX0JBU0VfSFJFRixcbiAgICB1c2VWYWx1ZTogJzwlPSBBUFBfQkFTRSAlPidcbiAgfSwgV2luZG93UmVmLFxuICBTY3JvbGxBbmltYXRpb25TZXJ2aWNlLFxuICBEYXRlRm9ybWF0dGVyU2VydmljZV0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cblxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=
