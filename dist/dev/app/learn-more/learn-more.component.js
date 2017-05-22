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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sZWFybi1tb3JlL2xlYXJuLW1vcmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQThGO0FBQzlGLGdHQUE2RjtBQUM3RiwwRkFBdUY7QUFhdkYsSUFBYSxrQkFBa0I7SUFRN0IsNEJBQW1CLFFBQWdDLEVBQzNDLFVBQWdDO1FBRHJCLGFBQVEsR0FBUixRQUFRLENBQXdCO1FBQzNDLGVBQVUsR0FBVixVQUFVLENBQXNCO1FBSnhDLFdBQU0sR0FBUSxFQUFFLENBQUM7UUFDakIsZUFBVSxHQUFRLEVBQUUsQ0FBQztJQUlyQixDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUNDLElBQUksR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDckIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDaEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqQyxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxNQUFNLEdBQUc7WUFDWixLQUFLLEVBQUUsZ0JBQWdCO1lBQ3ZCLEtBQUssRUFBRSxnQkFBZ0I7WUFDdkIsS0FBSyxFQUFFLFlBQVk7WUFDbkIsU0FBUyxFQUFFLE9BQU87WUFDbEIsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLFFBQVEsRUFBRTtnQkFDUjtvQkFDRSxJQUFJLEVBQUUsZ0JBQWdCO29CQUN0QixHQUFHLEVBQUUsY0FBYztpQkFDcEIsRUFBRTtvQkFDRCxJQUFJLEVBQUUsZ0JBQWdCO29CQUN0QixHQUFHLEVBQUUscUJBQXFCO2lCQUMzQjthQUNGO1lBQ0QsV0FBVyxFQUFFO2dCQUNYO29CQUNFLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVTtvQkFDMUIsSUFBSSxFQUFFLGdCQUFnQjtpQkFDdkIsRUFBRTtvQkFDRCxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7b0JBQ3pCLElBQUksRUFBRSxnQkFBZ0I7aUJBQ3ZCO2FBQ0Y7WUFDRCxLQUFLLEVBQUUsUUFBUTtTQUNoQixDQUFDO1FBQ0YsSUFBSSxDQUFDLFVBQVUsR0FBRztZQUNoQixNQUFNLEVBQUUsZ0JBQWdCO1lBQ3hCLEtBQUssRUFBRSxnQkFBZ0I7WUFDdkIsS0FBSyxFQUFFLFlBQVk7WUFDbkIsU0FBUyxFQUFFLE9BQU87WUFDbEIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSztvQkFDaEIsSUFBSSxFQUFFLGdCQUFnQjtpQkFDdkI7YUFDRjtZQUNELEtBQUssRUFBRSxVQUFVO1NBQ2xCLENBQUM7SUFDSixDQUFDO0lBRUYseUNBQVksR0FBWixVQUFhLEdBQVE7UUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDRix5QkFBQztBQUFELENBbkVBLEFBbUVDLElBQUE7QUFuRVksa0JBQWtCO0lBUjlCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGVBQWU7UUFDekIsV0FBVyxFQUFFLDJCQUEyQjtRQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSxZQUFZLEVBQUUsMEJBQTBCLENBQUM7UUFDakYsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07UUFDL0MsU0FBUyxFQUFFLENBQUMsaURBQXNCLENBQUM7S0FDcEMsQ0FBQztxQ0FTNkIsaURBQXNCO1FBQy9CLDZDQUFvQjtHQVQ3QixrQkFBa0IsQ0FtRTlCO0FBbkVZLGdEQUFrQiIsImZpbGUiOiJhcHAvbGVhcm4tbW9yZS9sZWFybi1tb3JlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNjcm9sbEFuaW1hdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2Nyb2xsLWFuaW1hdGlvbi9zY3JvbGwtYW5pbWF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0ZUZvcm1hdHRlclNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvZGF0ZS1mb3JtYXR0ZXIvZGF0ZS1mb3JtYXR0ZXIuc2VydmljZSc7XG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBIb21lQ29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1sZWFybi1tb3JlJyxcbiAgdGVtcGxhdGVVcmw6ICdsZWFybi1tb3JlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2xlYXJuLW1vcmUuY29tcG9uZW50LmNzcycsICdzdHlsZXMuY3NzJywgJy4uL2dsb2JhbC1jc3MvZ2xvYmFsLmNzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbU2Nyb2xsQW5pbWF0aW9uU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIExlYXJuTW9yZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdHR3b1dlZWtzRnJvbU5vdzogc3RyaW5nO1xuXHR0d29EYXlzQWdvOiBzdHJpbmc7XG5cdG9uZURheUFnbzogc3RyaW5nO1xuICB0b2RheTogc3RyaW5nO1xuICBiZXRPYmo6IGFueSA9IHt9O1xuICBiZXRSZWNlaXB0OiBhbnkgPSB7fTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2Nyb2xsVG86IFNjcm9sbEFuaW1hdGlvblNlcnZpY2UsXG4gIFx0cHVibGljIGRhdGVGb3JtYXQ6IERhdGVGb3JtYXR0ZXJTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgXHR2YXIgdG1wID0gbmV3IERhdGUoKTtcbiAgXHR0bXAuc2V0RGF0ZSh0bXAuZ2V0RGF0ZSgpICsgMjUpO1xuICBcdHZhciB0bXAyID0gbmV3IERhdGUoKTtcbiAgXHR0bXAyLnNldERhdGUodG1wMi5nZXREYXRlKCkgLSAyKTtcbiAgXHR2YXIgdG1wMyA9IG5ldyBEYXRlKCk7XG4gIFx0dG1wMy5zZXREYXRlKHRtcDMuZ2V0RGF0ZSgpIC0gMSk7XG4gIFx0dGhpcy5vbmVEYXlBZ28gPSB0aGlzLmRhdGVGb3JtYXQuZm9ybWF0RGF0ZSh0bXAzKTtcbiAgXHR0aGlzLnR3b0RheXNBZ28gPSB0aGlzLmRhdGVGb3JtYXQuZm9ybWF0RGF0ZSh0bXAyKTtcbiAgXHR0aGlzLnR3b1dlZWtzRnJvbU5vdyA9IHRoaXMuZGF0ZUZvcm1hdC5mb3JtYXREYXRlKHRtcCk7XG4gICAgdGhpcy50b2RheSA9IHRoaXMuZGF0ZUZvcm1hdC5mb3JtYXREYXRlKG5ldyBEYXRlKCkpO1xuICAgIHRoaXMuYmV0T2JqID0ge1xuICAgICAgbmFtZTE6ICdHZW9yZ2UgTWljaGFlbCcsXG4gICAgICBuYW1lMjogJ1N1c2llIE1jR2VvcmdlJyxcbiAgICAgIHRpdGxlOiAnTkJBIEZpbmFscycsXG4gICAgICBiZXRBbW91bnQ6ICcxMi4wMCcsXG4gICAgICBleHBlY3RlZEVuZERhdGU6IHRoaXMudHdvV2Vla3NGcm9tTm93LFxuICAgICAgYmV0Tm90ZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdHZW9yZ2UgTWljaGFlbCcsXG4gICAgICAgICAgYmV0OiAnR29sZGVuIFN0YXRlJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgbmFtZTogJ1N1c2llIE1jR2VvcmdlJyxcbiAgICAgICAgICBiZXQ6ICdDbGV2ZWxhbmQgQ2F2YWxpZXJzJ1xuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgY29uZmlybWVkT246IFtcbiAgICAgICAge1xuICAgICAgICAgIGNvbmZpcm1lZDogdGhpcy50d29EYXlzQWdvLFxuICAgICAgICAgIG5hbWU6ICdHZW9yZ2UgTWljaGFlbCdcbiAgICAgICAgfSwge1xuICAgICAgICAgIGNvbmZpcm1lZDogdGhpcy5vbmVEYXlBZ28sXG4gICAgICAgICAgbmFtZTogJ1N1c2llIE1jR2VvcmdlJ1xuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgc3RhdGU6ICdBY3RpdmUnXG4gICAgfTtcbiAgICB0aGlzLmJldFJlY2VpcHQgPSB7XG4gICAgICB3aW5uZXI6ICdTdXNpZSBNY0dlb3JnZScsXG4gICAgICBsb3NlcjogJ0dlb3JnZSBNaWNoYWVsJyxcbiAgICAgIHRpdGxlOiAnTkJBIEZpbmFscycsXG4gICAgICBiZXRBbW91bnQ6ICcxMi4wMCcsXG4gICAgICBwYXltZW50T246IFtcbiAgICAgICAge1xuICAgICAgICAgIGRhdGU6IHRoaXMudG9kYXksXG4gICAgICAgICAgbmFtZTogJ0dlb3JnZSBNaWNoYWVsJ1xuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgc3RhdGU6ICdDb21wbGV0ZSdcbiAgICB9O1xuICB9XG5cblx0c21vb3RoU2Nyb2xsKGVJRDogYW55KSB7XG5cdFx0dGhpcy5zY3JvbGxUby5zbW9vdGhTY3JvbGwoZUlELCAyMCk7XG5cdH1cbn1cbiJdfQ==
