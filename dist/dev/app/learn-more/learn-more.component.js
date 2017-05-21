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
var scroll_animation_service_1 = require("../shared/scroll-animation/scroll-animation.service");
var LearnMoreComponent = (function () {
    function LearnMoreComponent(scrollTo) {
        this.scrollTo = scrollTo;
    }
    LearnMoreComponent.prototype.smoothScroll = function (eID) {
        this.scrollTo.smoothScroll(eID);
    };
    return LearnMoreComponent;
}());
LearnMoreComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sd-learn-more',
        templateUrl: 'learn-more.component.html',
        styleUrls: ['learn-more.component.css', 'styles.css', '../global-css/global.css'],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        providers: [scroll_animation_service_1.ScrollAnimationService],
    }),
    __metadata("design:paramtypes", [scroll_animation_service_1.ScrollAnimationService])
], LearnMoreComponent);
exports.LearnMoreComponent = LearnMoreComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sZWFybi1tb3JlL2xlYXJuLW1vcmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQThGO0FBQzlGLGdHQUE2RjtBQWE3RixJQUFhLGtCQUFrQjtJQUM3Qiw0QkFBbUIsUUFBZ0M7UUFBaEMsYUFBUSxHQUFSLFFBQVEsQ0FBd0I7SUFDbkQsQ0FBQztJQUNDLHlDQUFZLEdBQVosVUFBYSxHQUFRO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRix5QkFBQztBQUFELENBTkEsQUFNQyxJQUFBO0FBTlksa0JBQWtCO0lBUjlCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGVBQWU7UUFDekIsV0FBVyxFQUFFLDJCQUEyQjtRQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSxZQUFZLEVBQUUsMEJBQTBCLENBQUM7UUFDakYsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07UUFDL0MsU0FBUyxFQUFFLENBQUMsaURBQXNCLENBQUM7S0FDcEMsQ0FBQztxQ0FFNkIsaURBQXNCO0dBRHhDLGtCQUFrQixDQU05QjtBQU5ZLGdEQUFrQiIsImZpbGUiOiJhcHAvbGVhcm4tbW9yZS9sZWFybi1tb3JlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNjcm9sbEFuaW1hdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2Nyb2xsLWFuaW1hdGlvbi9zY3JvbGwtYW5pbWF0aW9uLnNlcnZpY2UnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgSG9tZUNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtbGVhcm4tbW9yZScsXG4gIHRlbXBsYXRlVXJsOiAnbGVhcm4tbW9yZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydsZWFybi1tb3JlLmNvbXBvbmVudC5jc3MnLCAnc3R5bGVzLmNzcycsICcuLi9nbG9iYWwtY3NzL2dsb2JhbC5jc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1Njcm9sbEFuaW1hdGlvblNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBMZWFybk1vcmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2Nyb2xsVG86IFNjcm9sbEFuaW1hdGlvblNlcnZpY2UpIHtcbiAgfVxuICAgIHNtb290aFNjcm9sbChlSUQ6IGFueSkge1xuICAgIFx0dGhpcy5zY3JvbGxUby5zbW9vdGhTY3JvbGwoZUlEKTtcblx0fVxufVxuIl19
