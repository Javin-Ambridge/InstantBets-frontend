"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var learn_more_component_1 = require("./learn-more.component");
var LearnMoreRoutingModule = (function () {
    function LearnMoreRoutingModule() {
    }
    return LearnMoreRoutingModule;
}());
LearnMoreRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild([
                { path: 'learn-more', component: learn_more_component_1.LearnMoreComponent }
            ])
        ],
        exports: [router_1.RouterModule]
    })
], LearnMoreRoutingModule);
exports.LearnMoreRoutingModule = LearnMoreRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sZWFybi1tb3JlL2xlYXJuLW1vcmUtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMsMENBQStDO0FBQy9DLCtEQUE0RDtBQVU1RCxJQUFhLHNCQUFzQjtJQUFuQztJQUFzQyxDQUFDO0lBQUQsNkJBQUM7QUFBRCxDQUF0QyxBQUF1QyxJQUFBO0FBQTFCLHNCQUFzQjtJQVJsQyxlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxxQkFBWSxDQUFDLFFBQVEsQ0FBQztnQkFDcEIsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSx5Q0FBa0IsRUFBRTthQUN0RCxDQUFDO1NBQ0g7UUFDRCxPQUFPLEVBQUUsQ0FBQyxxQkFBWSxDQUFDO0tBQ3hCLENBQUM7R0FDVyxzQkFBc0IsQ0FBSTtBQUExQix3REFBc0IiLCJmaWxlIjoiYXBwL2xlYXJuLW1vcmUvbGVhcm4tbW9yZS1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTGVhcm5Nb3JlQ29tcG9uZW50IH0gZnJvbSAnLi9sZWFybi1tb3JlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xuICAgICAgeyBwYXRoOiAnbGVhcm4tbW9yZScsIGNvbXBvbmVudDogTGVhcm5Nb3JlQ29tcG9uZW50IH1cbiAgICBdKVxuICBdLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBMZWFybk1vcmVSb3V0aW5nTW9kdWxlIHsgfVxuIl19
