"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var learn_more_component_1 = require("./learn-more.component");
var learn_more_routing_module_1 = require("./learn-more-routing.module");
var shared_module_1 = require("../shared/shared.module");
var LearnMoreModule = (function () {
    function LearnMoreModule() {
    }
    return LearnMoreModule;
}());
LearnMoreModule = __decorate([
    core_1.NgModule({
        imports: [learn_more_routing_module_1.LearnMoreRoutingModule, shared_module_1.SharedModule],
        declarations: [learn_more_component_1.LearnMoreComponent],
        exports: [learn_more_component_1.LearnMoreComponent]
    })
], LearnMoreModule);
exports.LearnMoreModule = LearnMoreModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sZWFybi1tb3JlL2xlYXJuLW1vcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLCtEQUE0RDtBQUM1RCx5RUFBcUU7QUFDckUseURBQXVEO0FBT3ZELElBQWEsZUFBZTtJQUE1QjtJQUErQixDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUEvQixBQUFnQyxJQUFBO0FBQW5CLGVBQWU7SUFMM0IsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsa0RBQXNCLEVBQUUsNEJBQVksQ0FBQztRQUMvQyxZQUFZLEVBQUUsQ0FBQyx5Q0FBa0IsQ0FBQztRQUNsQyxPQUFPLEVBQUUsQ0FBQyx5Q0FBa0IsQ0FBQztLQUM5QixDQUFDO0dBQ1csZUFBZSxDQUFJO0FBQW5CLDBDQUFlIiwiZmlsZSI6ImFwcC9sZWFybi1tb3JlL2xlYXJuLW1vcmUubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExlYXJuTW9yZUNvbXBvbmVudCB9IGZyb20gJy4vbGVhcm4tbW9yZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGVhcm5Nb3JlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vbGVhcm4tbW9yZS1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtMZWFybk1vcmVSb3V0aW5nTW9kdWxlLCBTaGFyZWRNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtMZWFybk1vcmVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTGVhcm5Nb3JlQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBMZWFybk1vcmVNb2R1bGUgeyB9XG4iXX0=
