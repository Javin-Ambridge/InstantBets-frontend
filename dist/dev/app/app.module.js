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
var angular2_jwt_1 = require("angular2-jwt");
var home_module_1 = require("./home/home.module");
var dashboard_module_1 = require("./dashboard/dashboard.module");
var learn_more_module_1 = require("./learn-more/learn-more.module");
var shared_module_1 = require("./shared/shared.module");
var window_service_1 = require("./shared/window/window.service");
var scroll_animation_service_1 = require("./shared/scroll-animation/scroll-animation.service");
var state_service_1 = require("./shared/state/state.service");
var auth_service_1 = require("./shared/auth/auth.service");
var date_formatter_service_1 = require("./shared/date-formatter/date-formatter.service");
function authHttpServiceFactory(http, options) {
    return new angular2_jwt_1.AuthHttp(new angular2_jwt_1.AuthConfig({
        tokenGetter: (function () { return localStorage.getItem('access_token'); })
    }), http, options);
}
exports.authHttpServiceFactory = authHttpServiceFactory;
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
            date_formatter_service_1.DateFormatterService,
            state_service_1.StateService,
            auth_service_1.AuthService,
            {
                provide: angular2_jwt_1.AuthHttp,
                useFactory: authHttpServiceFactory,
                deps: [http_1.Http, http_1.RequestOptions]
            }],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDhEQUEwRDtBQUMxRCwwQ0FBZ0Q7QUFDaEQsc0NBQWlFO0FBQ2pFLGlEQUErQztBQUMvQywyREFBd0Q7QUFFeEQsNkNBQW9EO0FBRXBELGtEQUFnRDtBQUNoRCxpRUFBK0Q7QUFDL0Qsb0VBQWlFO0FBQ2pFLHdEQUFzRDtBQUN0RCxpRUFBMkQ7QUFDM0QsK0ZBQTRGO0FBQzVGLDhEQUE0RDtBQUM1RCwyREFBeUQ7QUFDekQseUZBQXNGO0FBRXRGLGdDQUF1QyxJQUFVLEVBQUUsT0FBdUI7SUFDeEUsTUFBTSxDQUFDLElBQUksdUJBQVEsQ0FBQyxJQUFJLHlCQUFVLENBQUM7UUFDakMsV0FBVyxFQUFFLENBQUMsY0FBTSxPQUFBLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQXBDLENBQW9DLENBQUM7S0FDMUQsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNyQixDQUFDO0FBSkQsd0RBSUM7QUFxQkQsSUFBYSxTQUFTO0lBQXRCO0lBQXlCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQXpCLEFBQTBCLElBQUE7QUFBYixTQUFTO0lBbkJyQixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxnQ0FBYSxFQUFFLGlCQUFVLEVBQUUscUNBQWdCLEVBQUUsd0JBQVUsRUFBRSxtQ0FBZSxFQUFFLGtDQUFlLEVBQUUsNEJBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM1SCxZQUFZLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1FBQzVCLFNBQVMsRUFBRSxDQUFDO2dCQUNWLE9BQU8sRUFBRSxzQkFBYTtnQkFDdEIsUUFBUSxFQUFFLGlCQUFpQjthQUM1QixFQUFFLDBCQUFTO1lBQ1osaURBQXNCO1lBQ3RCLDZDQUFvQjtZQUNwQiw0QkFBWTtZQUNaLDBCQUFXO1lBQ1g7Z0JBQ0MsT0FBTyxFQUFFLHVCQUFRO2dCQUNqQixVQUFVLEVBQUUsc0JBQXNCO2dCQUNsQyxJQUFJLEVBQUUsQ0FBQyxXQUFJLEVBQUUscUJBQWMsQ0FBQzthQUM1QixDQUFDO1FBQ0YsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztLQUUxQixDQUFDO0dBQ1csU0FBUyxDQUFJO0FBQWIsOEJBQVMiLCJmaWxlIjoiYXBwL2FwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQVBQX0JBU0VfSFJFRiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwTW9kdWxlLCBIdHRwLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC1yb3V0aW5nLm1vZHVsZSc7XG5cbmltcG9ydCB7IEF1dGhIdHRwLCBBdXRoQ29uZmlnIH0gZnJvbSAnYW5ndWxhcjItand0JztcblxuaW1wb3J0IHsgSG9tZU1vZHVsZSB9IGZyb20gJy4vaG9tZS9ob21lLm1vZHVsZSc7XG5pbXBvcnQgeyBEYXNoYm9hcmRNb2R1bGUgfSBmcm9tICcuL2Rhc2hib2FyZC9kYXNoYm9hcmQubW9kdWxlJztcbmltcG9ydCB7IExlYXJuTW9yZU1vZHVsZSB9IGZyb20gJy4vbGVhcm4tbW9yZS9sZWFybi1tb3JlLm1vZHVsZSc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4vc2hhcmVkL3dpbmRvdy93aW5kb3cuc2VydmljZSc7XG5pbXBvcnQgeyBTY3JvbGxBbmltYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvc2Nyb2xsLWFuaW1hdGlvbi9zY3JvbGwtYW5pbWF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvc3RhdGUvc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL2F1dGgvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGVGb3JtYXR0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvZGF0ZS1mb3JtYXR0ZXIvZGF0ZS1mb3JtYXR0ZXIuc2VydmljZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRoSHR0cFNlcnZpY2VGYWN0b3J5KGh0dHA6IEh0dHAsIG9wdGlvbnM6IFJlcXVlc3RPcHRpb25zKSB7XG4gIHJldHVybiBuZXcgQXV0aEh0dHAobmV3IEF1dGhDb25maWcoe1xuICAgIHRva2VuR2V0dGVyOiAoKCkgPT4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpKVxuICB9KSwgaHR0cCwgb3B0aW9ucyk7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtCcm93c2VyTW9kdWxlLCBIdHRwTW9kdWxlLCBBcHBSb3V0aW5nTW9kdWxlLCBIb21lTW9kdWxlLCBMZWFybk1vcmVNb2R1bGUsIERhc2hib2FyZE1vZHVsZSwgU2hhcmVkTW9kdWxlLmZvclJvb3QoKV0sXG4gIGRlY2xhcmF0aW9uczogW0FwcENvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBBUFBfQkFTRV9IUkVGLFxuICAgIHVzZVZhbHVlOiAnPCU9IEFQUF9CQVNFICU+J1xuICB9LCBXaW5kb3dSZWYsXG4gIFNjcm9sbEFuaW1hdGlvblNlcnZpY2UsXG4gIERhdGVGb3JtYXR0ZXJTZXJ2aWNlLFxuICBTdGF0ZVNlcnZpY2UsXG4gIEF1dGhTZXJ2aWNlLFxuICB7XG4gIFx0cHJvdmlkZTogQXV0aEh0dHAsXG4gIFx0dXNlRmFjdG9yeTogYXV0aEh0dHBTZXJ2aWNlRmFjdG9yeSxcbiAgXHRkZXBzOiBbSHR0cCwgUmVxdWVzdE9wdGlvbnNdXG4gIH1dLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXG5cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19
