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
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
var AppState = (function () {
    function AppState(b) {
        this.loggedIn = b;
    }
    return AppState;
}());
exports.AppState = AppState;
var StateService = (function () {
    function StateService() {
        var _this = this;
        this.dispatcher = new Subject_1.Subject();
        this.state = Observable_1.Observable.create(function (subscriber) {
            _this.dispatcher.subscribe(function (item) {
                var tmpVal = false;
                if (item)
                    tmpVal = true;
                subscriber.next(new AppState(tmpVal));
            });
        });
    }
    StateService.prototype.updateState = function (action, data) {
        switch (action) {
            case 'ADD_STATE':
                this.dispatcher.next(data.val);
                break;
            case 'UPDATE_STATE':
                break;
        }
    };
    return StateService;
}());
StateService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], StateService);
exports.StateService = StateService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc3RhdGUvc3RhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyw4Q0FBNkM7QUFDN0Msd0NBQXVDO0FBRXZDO0lBRUUsa0JBQVksQ0FBVTtRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBQ0gsZUFBQztBQUFELENBTEEsQUFLQyxJQUFBO0FBTFksNEJBQVE7QUFRckIsSUFBYSxZQUFZO0lBV3ZCO1FBQUEsaUJBQWdCO1FBVGhCLGVBQVUsR0FBb0IsSUFBSSxpQkFBTyxFQUFVLENBQUM7UUFDcEQsVUFBSyxHQUF5Qix1QkFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFDLFVBQWU7WUFDOUQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFJO2dCQUM3QixJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ25CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUN4QixVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUVZLENBQUM7SUFFaEIsa0NBQVcsR0FBWCxVQUFZLE1BQWMsRUFBRSxJQUFTO1FBQ25DLE1BQU0sQ0FBQSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDZCxLQUFLLFdBQVc7Z0JBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMvQixLQUFLLENBQUM7WUFDUixLQUFLLGNBQWM7Z0JBQ2pCLEtBQUssQ0FBQztRQUNWLENBQUM7SUFDSCxDQUFDO0lBRUgsbUJBQUM7QUFBRCxDQXZCQSxBQXVCQyxJQUFBO0FBdkJZLFlBQVk7SUFEeEIsaUJBQVUsRUFBRTs7R0FDQSxZQUFZLENBdUJ4QjtBQXZCWSxvQ0FBWSIsImZpbGUiOiJhcHAvc2hhcmVkL3N0YXRlL3N0YXRlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL1N1YmplY3QnO1xuXG5leHBvcnQgY2xhc3MgQXBwU3RhdGUge1xuICBsb2dnZWRJbjogYm9vbGVhbjtcbiAgY29uc3RydWN0b3IoYjogYm9vbGVhbikge1xuICAgIHRoaXMubG9nZ2VkSW4gPSBiO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdGF0ZVNlcnZpY2Uge1xuXG4gIGRpc3BhdGNoZXI6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcbiAgc3RhdGU6IE9ic2VydmFibGU8QXBwU3RhdGU+ID0gT2JzZXJ2YWJsZS5jcmVhdGUoKHN1YnNjcmliZXI6IGFueSkgPT4ge1xuICAgIHRoaXMuZGlzcGF0Y2hlci5zdWJzY3JpYmUoKGl0ZW0pID0+IHtcbiAgICAgIHZhciB0bXBWYWwgPSBmYWxzZTtcbiAgICAgIGlmIChpdGVtKSB0bXBWYWwgPSB0cnVlO1xuICAgICAgc3Vic2NyaWJlci5uZXh0KG5ldyBBcHBTdGF0ZSh0bXBWYWwpKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHVwZGF0ZVN0YXRlKGFjdGlvbjogc3RyaW5nLCBkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICBzd2l0Y2goYWN0aW9uKSB7XG4gICAgICBjYXNlICdBRERfU1RBVEUnOlxuICAgICAgICB0aGlzLmRpc3BhdGNoZXIubmV4dChkYXRhLnZhbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnVVBEQVRFX1NUQVRFJzpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbn1cblxuIl19
