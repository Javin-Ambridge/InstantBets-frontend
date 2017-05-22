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
var date_formatter_service_1 = require("../shared/date-formatter/date-formatter.service");
var LearnMoreComponent = (function () {
    function LearnMoreComponent(scrollTo, dateFormat) {
        this.scrollTo = scrollTo;
        this.dateFormat = dateFormat;
    }
    LearnMoreComponent.prototype.ngOnInit = function () {
        var tmp = new Date();
        tmp.setDate(tmp.getDate() + 25);
        var tmp2 = new Date();
        tmp2.setDate(tmp2.getDate() - 2);
        var tmp3 = new Date();
        tmp3.setDate(tmp3.getDate() - 1);
        this.oneDayAgo = this.dateFormat.formatDate(tmp3);
        this.twoDaysAgo = this.dateFormat.formatDate(tmp2);
        this.twoWeeksFromNow = this.dateFormat.formatDate(tmp);
        this.today = this.dateFormat.formatDate(new Date());
    };
    LearnMoreComponent.prototype.smoothScroll = function (eID) {
        this.scrollTo.smoothScroll(eID, 20);
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
    __metadata("design:paramtypes", [scroll_animation_service_1.ScrollAnimationService,
        date_formatter_service_1.DateFormatterService])
], LearnMoreComponent);
exports.LearnMoreComponent = LearnMoreComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sZWFybi1tb3JlL2xlYXJuLW1vcmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQThGO0FBQzlGLGdHQUE2RjtBQUM3RiwwRkFBdUY7QUFhdkYsSUFBYSxrQkFBa0I7SUFLM0IsNEJBQW1CLFFBQWdDLEVBQzNDLFVBQWdDO1FBRHJCLGFBQVEsR0FBUixRQUFRLENBQXdCO1FBQzNDLGVBQVUsR0FBVixVQUFVLENBQXNCO0lBQ3hDLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQ0MsSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNyQixHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNoQyxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVKLHlDQUFZLEdBQVosVUFBYSxHQUFRO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0YseUJBQUM7QUFBRCxDQXpCQSxBQXlCQyxJQUFBO0FBekJZLGtCQUFrQjtJQVI5QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFdBQVcsRUFBRSwyQkFBMkI7UUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLEVBQUUsWUFBWSxFQUFFLDBCQUEwQixDQUFDO1FBQ2pGLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1FBQy9DLFNBQVMsRUFBRSxDQUFDLGlEQUFzQixDQUFDO0tBQ3BDLENBQUM7cUNBTStCLGlEQUFzQjtRQUMvQiw2Q0FBb0I7R0FOL0Isa0JBQWtCLENBeUI5QjtBQXpCWSxnREFBa0IiLCJmaWxlIjoiYXBwL2xlYXJuLW1vcmUvbGVhcm4tbW9yZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTY3JvbGxBbmltYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3Njcm9sbC1hbmltYXRpb24vc2Nyb2xsLWFuaW1hdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGVGb3JtYXR0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2RhdGUtZm9ybWF0dGVyL2RhdGUtZm9ybWF0dGVyLnNlcnZpY2UnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgSG9tZUNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtbGVhcm4tbW9yZScsXG4gIHRlbXBsYXRlVXJsOiAnbGVhcm4tbW9yZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydsZWFybi1tb3JlLmNvbXBvbmVudC5jc3MnLCAnc3R5bGVzLmNzcycsICcuLi9nbG9iYWwtY3NzL2dsb2JhbC5jc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1Njcm9sbEFuaW1hdGlvblNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBMZWFybk1vcmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHR0d29XZWVrc0Zyb21Ob3c6IHN0cmluZztcblx0dHdvRGF5c0Fnbzogc3RyaW5nO1xuXHRvbmVEYXlBZ286IHN0cmluZztcbiAgdG9kYXk6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgc2Nyb2xsVG86IFNjcm9sbEFuaW1hdGlvblNlcnZpY2UsXG4gICAgXHRwdWJsaWMgZGF0ZUZvcm1hdDogRGF0ZUZvcm1hdHRlclNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBcdHZhciB0bXAgPSBuZXcgRGF0ZSgpO1xuICAgIFx0dG1wLnNldERhdGUodG1wLmdldERhdGUoKSArIDI1KTtcbiAgICBcdHZhciB0bXAyID0gbmV3IERhdGUoKTtcbiAgICBcdHRtcDIuc2V0RGF0ZSh0bXAyLmdldERhdGUoKSAtIDIpO1xuICAgIFx0dmFyIHRtcDMgPSBuZXcgRGF0ZSgpO1xuICAgIFx0dG1wMy5zZXREYXRlKHRtcDMuZ2V0RGF0ZSgpIC0gMSk7XG4gICAgXHR0aGlzLm9uZURheUFnbyA9IHRoaXMuZGF0ZUZvcm1hdC5mb3JtYXREYXRlKHRtcDMpO1xuICAgIFx0dGhpcy50d29EYXlzQWdvID0gdGhpcy5kYXRlRm9ybWF0LmZvcm1hdERhdGUodG1wMik7XG4gICAgXHR0aGlzLnR3b1dlZWtzRnJvbU5vdyA9IHRoaXMuZGF0ZUZvcm1hdC5mb3JtYXREYXRlKHRtcCk7XG4gICAgICB0aGlzLnRvZGF5ID0gdGhpcy5kYXRlRm9ybWF0LmZvcm1hdERhdGUobmV3IERhdGUoKSk7XG4gICAgfVxuXG5cdHNtb290aFNjcm9sbChlSUQ6IGFueSkge1xuXHRcdHRoaXMuc2Nyb2xsVG8uc21vb3RoU2Nyb2xsKGVJRCwgMjApO1xuXHR9XG59XG4iXX0=
