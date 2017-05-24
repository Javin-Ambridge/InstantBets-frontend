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
var router_1 = require("@angular/router");
var LearnMoreComponent = (function () {
    function LearnMoreComponent(scrollTo, dateFormat, router) {
        this.scrollTo = scrollTo;
        this.dateFormat = dateFormat;
        this.router = router;
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
        this.scrollTo.smoothScroll(eID, 20);
    };
    LearnMoreComponent.prototype.navigateToHome = function () {
        this.router.navigate(['/'], { queryParams: { betName: this.betName } });
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
        date_formatter_service_1.DateFormatterService,
        router_1.Router])
], LearnMoreComponent);
exports.LearnMoreComponent = LearnMoreComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sZWFybi1tb3JlL2xlYXJuLW1vcmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQThGO0FBQzlGLGdHQUE2RjtBQUM3RiwwRkFBdUY7QUFDdkYsMENBQXlDO0FBYXpDLElBQWEsa0JBQWtCO0lBVzdCLDRCQUFtQixRQUFnQyxFQUMzQyxVQUFnQyxFQUMvQixNQUFjO1FBRkosYUFBUSxHQUFSLFFBQVEsQ0FBd0I7UUFDM0MsZUFBVSxHQUFWLFVBQVUsQ0FBc0I7UUFDL0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVJ2QixXQUFNLEdBQVEsRUFBRSxDQUFDO1FBQ2pCLGVBQVUsR0FBUSxFQUFFLENBQUM7SUFRckIsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFDQyxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ2hDLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsTUFBTSxHQUFHO1lBQ1osS0FBSyxFQUFFLGdCQUFnQjtZQUN2QixLQUFLLEVBQUUsZ0JBQWdCO1lBQ3ZCLEtBQUssRUFBRSxZQUFZO1lBQ25CLFNBQVMsRUFBRSxPQUFPO1lBQ2xCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxRQUFRLEVBQUU7Z0JBQ1I7b0JBQ0UsSUFBSSxFQUFFLGdCQUFnQjtvQkFDdEIsR0FBRyxFQUFFLGNBQWM7aUJBQ3BCLEVBQUU7b0JBQ0QsSUFBSSxFQUFFLGdCQUFnQjtvQkFDdEIsR0FBRyxFQUFFLHFCQUFxQjtpQkFDM0I7YUFDRjtZQUNELFdBQVcsRUFBRTtnQkFDWDtvQkFDRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVU7b0JBQzFCLElBQUksRUFBRSxnQkFBZ0I7aUJBQ3ZCLEVBQUU7b0JBQ0QsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO29CQUN6QixJQUFJLEVBQUUsZ0JBQWdCO2lCQUN2QjthQUNGO1lBQ0QsS0FBSyxFQUFFLFFBQVE7U0FDaEIsQ0FBQztRQUNGLElBQUksQ0FBQyxVQUFVLEdBQUc7WUFDaEIsTUFBTSxFQUFFLGdCQUFnQjtZQUN4QixLQUFLLEVBQUUsZ0JBQWdCO1lBQ3ZCLEtBQUssRUFBRSxZQUFZO1lBQ25CLFNBQVMsRUFBRSxPQUFPO1lBQ2xCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUs7b0JBQ2hCLElBQUksRUFBRSxnQkFBZ0I7aUJBQ3ZCO2FBQ0Y7WUFDRCxLQUFLLEVBQUUsVUFBVTtTQUNsQixDQUFDO0lBQ0osQ0FBQztJQUVGLHlDQUFZLEdBQVosVUFBYSxHQUFRO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUEsMkNBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQTNFQSxBQTJFQyxJQUFBO0FBM0VZLGtCQUFrQjtJQVI5QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFdBQVcsRUFBRSwyQkFBMkI7UUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLEVBQUUsWUFBWSxFQUFFLDBCQUEwQixDQUFDO1FBQ2pGLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1FBQy9DLFNBQVMsRUFBRSxDQUFDLGlEQUFzQixDQUFDO0tBQ3BDLENBQUM7cUNBWTZCLGlEQUFzQjtRQUMvQiw2Q0FBb0I7UUFDdkIsZUFBTTtHQWJaLGtCQUFrQixDQTJFOUI7QUEzRVksZ0RBQWtCIiwiZmlsZSI6ImFwcC9sZWFybi1tb3JlL2xlYXJuLW1vcmUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2Nyb2xsQW5pbWF0aW9uU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zY3JvbGwtYW5pbWF0aW9uL3Njcm9sbC1hbmltYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBEYXRlRm9ybWF0dGVyU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9kYXRlLWZvcm1hdHRlci9kYXRlLWZvcm1hdHRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBIb21lQ29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1sZWFybi1tb3JlJyxcbiAgdGVtcGxhdGVVcmw6ICdsZWFybi1tb3JlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2xlYXJuLW1vcmUuY29tcG9uZW50LmNzcycsICdzdHlsZXMuY3NzJywgJy4uL2dsb2JhbC1jc3MvZ2xvYmFsLmNzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbU2Nyb2xsQW5pbWF0aW9uU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIExlYXJuTW9yZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdHR3b1dlZWtzRnJvbU5vdzogc3RyaW5nO1xuXHR0d29EYXlzQWdvOiBzdHJpbmc7XG5cdG9uZURheUFnbzogc3RyaW5nO1xuICB0b2RheTogc3RyaW5nO1xuICBiZXRPYmo6IGFueSA9IHt9O1xuICBiZXRSZWNlaXB0OiBhbnkgPSB7fTtcblxuICAvL2JldCBuYW1lXG4gIGJldE5hbWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2Nyb2xsVG86IFNjcm9sbEFuaW1hdGlvblNlcnZpY2UsXG4gIFx0cHVibGljIGRhdGVGb3JtYXQ6IERhdGVGb3JtYXR0ZXJTZXJ2aWNlLFxuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcikge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIFx0dmFyIHRtcCA9IG5ldyBEYXRlKCk7XG4gIFx0dG1wLnNldERhdGUodG1wLmdldERhdGUoKSArIDI1KTtcbiAgXHR2YXIgdG1wMiA9IG5ldyBEYXRlKCk7XG4gIFx0dG1wMi5zZXREYXRlKHRtcDIuZ2V0RGF0ZSgpIC0gMik7XG4gIFx0dmFyIHRtcDMgPSBuZXcgRGF0ZSgpO1xuICBcdHRtcDMuc2V0RGF0ZSh0bXAzLmdldERhdGUoKSAtIDEpO1xuICBcdHRoaXMub25lRGF5QWdvID0gdGhpcy5kYXRlRm9ybWF0LmZvcm1hdERhdGUodG1wMyk7XG4gIFx0dGhpcy50d29EYXlzQWdvID0gdGhpcy5kYXRlRm9ybWF0LmZvcm1hdERhdGUodG1wMik7XG4gIFx0dGhpcy50d29XZWVrc0Zyb21Ob3cgPSB0aGlzLmRhdGVGb3JtYXQuZm9ybWF0RGF0ZSh0bXApO1xuICAgIHRoaXMudG9kYXkgPSB0aGlzLmRhdGVGb3JtYXQuZm9ybWF0RGF0ZShuZXcgRGF0ZSgpKTtcbiAgICB0aGlzLmJldE9iaiA9IHtcbiAgICAgIG5hbWUxOiAnR2VvcmdlIE1pY2hhZWwnLFxuICAgICAgbmFtZTI6ICdTdXNpZSBNY0dlb3JnZScsXG4gICAgICB0aXRsZTogJ05CQSBGaW5hbHMnLFxuICAgICAgYmV0QW1vdW50OiAnMTIuMDAnLFxuICAgICAgZXhwZWN0ZWRFbmREYXRlOiB0aGlzLnR3b1dlZWtzRnJvbU5vdyxcbiAgICAgIGJldE5vdGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnR2VvcmdlIE1pY2hhZWwnLFxuICAgICAgICAgIGJldDogJ0dvbGRlbiBTdGF0ZSdcbiAgICAgICAgfSwge1xuICAgICAgICAgIG5hbWU6ICdTdXNpZSBNY0dlb3JnZScsXG4gICAgICAgICAgYmV0OiAnQ2xldmVsYW5kIENhdmFsaWVycydcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGNvbmZpcm1lZE9uOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBjb25maXJtZWQ6IHRoaXMudHdvRGF5c0FnbyxcbiAgICAgICAgICBuYW1lOiAnR2VvcmdlIE1pY2hhZWwnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBjb25maXJtZWQ6IHRoaXMub25lRGF5QWdvLFxuICAgICAgICAgIG5hbWU6ICdTdXNpZSBNY0dlb3JnZSdcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHN0YXRlOiAnQWN0aXZlJ1xuICAgIH07XG4gICAgdGhpcy5iZXRSZWNlaXB0ID0ge1xuICAgICAgd2lubmVyOiAnU3VzaWUgTWNHZW9yZ2UnLFxuICAgICAgbG9zZXI6ICdHZW9yZ2UgTWljaGFlbCcsXG4gICAgICB0aXRsZTogJ05CQSBGaW5hbHMnLFxuICAgICAgYmV0QW1vdW50OiAnMTIuMDAnLFxuICAgICAgcGF5bWVudE9uOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBkYXRlOiB0aGlzLnRvZGF5LFxuICAgICAgICAgIG5hbWU6ICdHZW9yZ2UgTWljaGFlbCdcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHN0YXRlOiAnQ29tcGxldGUnXG4gICAgfTtcbiAgfVxuXG5cdHNtb290aFNjcm9sbChlSUQ6IGFueSkge1xuXHRcdHRoaXMuc2Nyb2xsVG8uc21vb3RoU2Nyb2xsKGVJRCwgMjApO1xuXHR9XG5cbiAgbmF2aWdhdGVUb0hvbWUoKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10sIHsgcXVlcnlQYXJhbXM6IHsgYmV0TmFtZTogdGhpcy5iZXROYW1lIH0gfSk7XG4gIH1cbn1cbiJdfQ==
