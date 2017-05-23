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
        this.betObj = {};
        this.betReceipt = {};
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
        this.betObj = {
            name1: 'George Michael',
            name2: 'Susie McGeorge',
            title: 'NBA Finals',
            betAmount: '12.00',
            expectedEndDate: this.twoWeeksFromNow,
            betNotes: [
                {
                    name: 'George Michael',
                    bet: 'Golden State'
                }, {
                    name: 'Susie McGeorge',
                    bet: 'Cleveland Cavaliers'
                }
            ],
            confirmedOn: [
                {
                    confirmed: this.twoDaysAgo,
                    name: 'George Michael'
                }, {
                    confirmed: this.oneDayAgo,
                    name: 'Susie McGeorge'
                }
            ],
            state: 'Active'
        };
        this.betReceipt = {
            winner: 'Susie McGeorge',
            loser: 'George Michael',
            title: 'NBA Finals',
            betAmount: '12.00',
            paymentOn: [
                {
                    date: this.today,
                    name: 'George Michael'
                }
            ],
            state: 'Complete'
        };
    };
    LearnMoreComponent.prototype.smoothScroll = function (eID) {
        this.scrollTo.smoothScroll(eID, 20, 40);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sZWFybi1tb3JlL2xlYXJuLW1vcmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQThGO0FBQzlGLGdHQUE2RjtBQUM3RiwwRkFBdUY7QUFhdkYsSUFBYSxrQkFBa0I7SUFRN0IsNEJBQW1CLFFBQWdDLEVBQzNDLFVBQWdDO1FBRHJCLGFBQVEsR0FBUixRQUFRLENBQXdCO1FBQzNDLGVBQVUsR0FBVixVQUFVLENBQXNCO1FBSnhDLFdBQU0sR0FBUSxFQUFFLENBQUM7UUFDakIsZUFBVSxHQUFRLEVBQUUsQ0FBQztJQUlyQixDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUNDLElBQUksR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDckIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDaEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqQyxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxNQUFNLEdBQUc7WUFDWixLQUFLLEVBQUUsZ0JBQWdCO1lBQ3ZCLEtBQUssRUFBRSxnQkFBZ0I7WUFDdkIsS0FBSyxFQUFFLFlBQVk7WUFDbkIsU0FBUyxFQUFFLE9BQU87WUFDbEIsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLFFBQVEsRUFBRTtnQkFDUjtvQkFDRSxJQUFJLEVBQUUsZ0JBQWdCO29CQUN0QixHQUFHLEVBQUUsY0FBYztpQkFDcEIsRUFBRTtvQkFDRCxJQUFJLEVBQUUsZ0JBQWdCO29CQUN0QixHQUFHLEVBQUUscUJBQXFCO2lCQUMzQjthQUNGO1lBQ0QsV0FBVyxFQUFFO2dCQUNYO29CQUNFLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVTtvQkFDMUIsSUFBSSxFQUFFLGdCQUFnQjtpQkFDdkIsRUFBRTtvQkFDRCxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7b0JBQ3pCLElBQUksRUFBRSxnQkFBZ0I7aUJBQ3ZCO2FBQ0Y7WUFDRCxLQUFLLEVBQUUsUUFBUTtTQUNoQixDQUFDO1FBQ0YsSUFBSSxDQUFDLFVBQVUsR0FBRztZQUNoQixNQUFNLEVBQUUsZ0JBQWdCO1lBQ3hCLEtBQUssRUFBRSxnQkFBZ0I7WUFDdkIsS0FBSyxFQUFFLFlBQVk7WUFDbkIsU0FBUyxFQUFFLE9BQU87WUFDbEIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSztvQkFDaEIsSUFBSSxFQUFFLGdCQUFnQjtpQkFDdkI7YUFDRjtZQUNELEtBQUssRUFBRSxVQUFVO1NBQ2xCLENBQUM7SUFDSixDQUFDO0lBRUYseUNBQVksR0FBWixVQUFhLEdBQVE7UUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0YseUJBQUM7QUFBRCxDQW5FQSxBQW1FQyxJQUFBO0FBbkVZLGtCQUFrQjtJQVI5QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFdBQVcsRUFBRSwyQkFBMkI7UUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLEVBQUUsWUFBWSxFQUFFLDBCQUEwQixDQUFDO1FBQ2pGLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1FBQy9DLFNBQVMsRUFBRSxDQUFDLGlEQUFzQixDQUFDO0tBQ3BDLENBQUM7cUNBUzZCLGlEQUFzQjtRQUMvQiw2Q0FBb0I7R0FUN0Isa0JBQWtCLENBbUU5QjtBQW5FWSxnREFBa0IiLCJmaWxlIjoiYXBwL2xlYXJuLW1vcmUvbGVhcm4tbW9yZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTY3JvbGxBbmltYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3Njcm9sbC1hbmltYXRpb24vc2Nyb2xsLWFuaW1hdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGVGb3JtYXR0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2RhdGUtZm9ybWF0dGVyL2RhdGUtZm9ybWF0dGVyLnNlcnZpY2UnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgSG9tZUNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtbGVhcm4tbW9yZScsXG4gIHRlbXBsYXRlVXJsOiAnbGVhcm4tbW9yZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydsZWFybi1tb3JlLmNvbXBvbmVudC5jc3MnLCAnc3R5bGVzLmNzcycsICcuLi9nbG9iYWwtY3NzL2dsb2JhbC5jc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1Njcm9sbEFuaW1hdGlvblNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBMZWFybk1vcmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHR0d29XZWVrc0Zyb21Ob3c6IHN0cmluZztcblx0dHdvRGF5c0Fnbzogc3RyaW5nO1xuXHRvbmVEYXlBZ286IHN0cmluZztcbiAgdG9kYXk6IHN0cmluZztcbiAgYmV0T2JqOiBhbnkgPSB7fTtcbiAgYmV0UmVjZWlwdDogYW55ID0ge307XG5cbiAgY29uc3RydWN0b3IocHVibGljIHNjcm9sbFRvOiBTY3JvbGxBbmltYXRpb25TZXJ2aWNlLFxuICBcdHB1YmxpYyBkYXRlRm9ybWF0OiBEYXRlRm9ybWF0dGVyU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIFx0dmFyIHRtcCA9IG5ldyBEYXRlKCk7XG4gIFx0dG1wLnNldERhdGUodG1wLmdldERhdGUoKSArIDI1KTtcbiAgXHR2YXIgdG1wMiA9IG5ldyBEYXRlKCk7XG4gIFx0dG1wMi5zZXREYXRlKHRtcDIuZ2V0RGF0ZSgpIC0gMik7XG4gIFx0dmFyIHRtcDMgPSBuZXcgRGF0ZSgpO1xuICBcdHRtcDMuc2V0RGF0ZSh0bXAzLmdldERhdGUoKSAtIDEpO1xuICBcdHRoaXMub25lRGF5QWdvID0gdGhpcy5kYXRlRm9ybWF0LmZvcm1hdERhdGUodG1wMyk7XG4gIFx0dGhpcy50d29EYXlzQWdvID0gdGhpcy5kYXRlRm9ybWF0LmZvcm1hdERhdGUodG1wMik7XG4gIFx0dGhpcy50d29XZWVrc0Zyb21Ob3cgPSB0aGlzLmRhdGVGb3JtYXQuZm9ybWF0RGF0ZSh0bXApO1xuICAgIHRoaXMudG9kYXkgPSB0aGlzLmRhdGVGb3JtYXQuZm9ybWF0RGF0ZShuZXcgRGF0ZSgpKTtcbiAgICB0aGlzLmJldE9iaiA9IHtcbiAgICAgIG5hbWUxOiAnR2VvcmdlIE1pY2hhZWwnLFxuICAgICAgbmFtZTI6ICdTdXNpZSBNY0dlb3JnZScsXG4gICAgICB0aXRsZTogJ05CQSBGaW5hbHMnLFxuICAgICAgYmV0QW1vdW50OiAnMTIuMDAnLFxuICAgICAgZXhwZWN0ZWRFbmREYXRlOiB0aGlzLnR3b1dlZWtzRnJvbU5vdyxcbiAgICAgIGJldE5vdGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnR2VvcmdlIE1pY2hhZWwnLFxuICAgICAgICAgIGJldDogJ0dvbGRlbiBTdGF0ZSdcbiAgICAgICAgfSwge1xuICAgICAgICAgIG5hbWU6ICdTdXNpZSBNY0dlb3JnZScsXG4gICAgICAgICAgYmV0OiAnQ2xldmVsYW5kIENhdmFsaWVycydcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGNvbmZpcm1lZE9uOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBjb25maXJtZWQ6IHRoaXMudHdvRGF5c0FnbyxcbiAgICAgICAgICBuYW1lOiAnR2VvcmdlIE1pY2hhZWwnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBjb25maXJtZWQ6IHRoaXMub25lRGF5QWdvLFxuICAgICAgICAgIG5hbWU6ICdTdXNpZSBNY0dlb3JnZSdcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHN0YXRlOiAnQWN0aXZlJ1xuICAgIH07XG4gICAgdGhpcy5iZXRSZWNlaXB0ID0ge1xuICAgICAgd2lubmVyOiAnU3VzaWUgTWNHZW9yZ2UnLFxuICAgICAgbG9zZXI6ICdHZW9yZ2UgTWljaGFlbCcsXG4gICAgICB0aXRsZTogJ05CQSBGaW5hbHMnLFxuICAgICAgYmV0QW1vdW50OiAnMTIuMDAnLFxuICAgICAgcGF5bWVudE9uOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBkYXRlOiB0aGlzLnRvZGF5LFxuICAgICAgICAgIG5hbWU6ICdHZW9yZ2UgTWljaGFlbCdcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHN0YXRlOiAnQ29tcGxldGUnXG4gICAgfTtcbiAgfVxuXG5cdHNtb290aFNjcm9sbChlSUQ6IGFueSkge1xuXHRcdHRoaXMuc2Nyb2xsVG8uc21vb3RoU2Nyb2xsKGVJRCwgMjAsIDQwKTtcblx0fVxufVxuIl19
