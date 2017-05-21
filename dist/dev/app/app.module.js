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
var learn_more_module_1 = require("./learn-more/learn-more.module");
var shared_module_1 = require("./shared/shared.module");
var window_service_1 = require("./shared/window/window.service");
var scroll_animation_service_1 = require("./shared/scroll-animation/scroll-animation.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, app_routing_module_1.AppRoutingModule, home_module_1.HomeModule, learn_more_module_1.LearnMoreModule, shared_module_1.SharedModule.forRoot()],
        declarations: [app_component_1.AppComponent],
        providers: [{
                provide: common_1.APP_BASE_HREF,
                useValue: '/'
            }, window_service_1.WindowRef,
            scroll_animation_service_1.ScrollAnimationService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDhEQUEwRDtBQUMxRCwwQ0FBZ0Q7QUFDaEQsc0NBQTJDO0FBQzNDLGlEQUErQztBQUMvQywyREFBd0Q7QUFFeEQsa0RBQWdEO0FBQ2hELG9FQUFpRTtBQUNqRSx3REFBc0Q7QUFDdEQsaUVBQTJEO0FBQzNELCtGQUE0RjtBQWM1RixJQUFhLFNBQVM7SUFBdEI7SUFBeUIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBekIsQUFBMEIsSUFBQTtBQUFiLFNBQVM7SUFYckIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsZ0NBQWEsRUFBRSxpQkFBVSxFQUFFLHFDQUFnQixFQUFFLHdCQUFVLEVBQUUsbUNBQWUsRUFBRSw0QkFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzNHLFlBQVksRUFBRSxDQUFDLDRCQUFZLENBQUM7UUFDNUIsU0FBUyxFQUFFLENBQUM7Z0JBQ1YsT0FBTyxFQUFFLHNCQUFhO2dCQUN0QixRQUFRLEVBQUUsaUJBQWlCO2FBQzVCLEVBQUUsMEJBQVM7WUFDWixpREFBc0IsQ0FBQztRQUN2QixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO0tBRTFCLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsImZpbGUiOiJhcHAvYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBBUFBfQkFTRV9IUkVGIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAtcm91dGluZy5tb2R1bGUnO1xuXG5pbXBvcnQgeyBIb21lTW9kdWxlIH0gZnJvbSAnLi9ob21lL2hvbWUubW9kdWxlJztcbmltcG9ydCB7IExlYXJuTW9yZU1vZHVsZSB9IGZyb20gJy4vbGVhcm4tbW9yZS9sZWFybi1tb3JlLm1vZHVsZSc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4vc2hhcmVkL3dpbmRvdy93aW5kb3cuc2VydmljZSc7XG5pbXBvcnQgeyBTY3JvbGxBbmltYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvc2Nyb2xsLWFuaW1hdGlvbi9zY3JvbGwtYW5pbWF0aW9uLnNlcnZpY2UnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtCcm93c2VyTW9kdWxlLCBIdHRwTW9kdWxlLCBBcHBSb3V0aW5nTW9kdWxlLCBIb21lTW9kdWxlLCBMZWFybk1vcmVNb2R1bGUsIFNoYXJlZE1vZHVsZS5mb3JSb290KCldLFxuICBkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogQVBQX0JBU0VfSFJFRixcbiAgICB1c2VWYWx1ZTogJzwlPSBBUFBfQkFTRSAlPidcbiAgfSwgV2luZG93UmVmLFxuICBTY3JvbGxBbmltYXRpb25TZXJ2aWNlXSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxuXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==
