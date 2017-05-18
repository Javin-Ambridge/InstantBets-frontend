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
    function AppState(n) {
        this.name = n;
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
                subscriber.next(new AppState(item));
            });
        });
    }
    StateService.prototype.updateState = function (action, data) {
        switch (action) {
            case 'ADD_STATE':
                this.dispatcher.next(data.name);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc3RhdGUvc3RhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyw4Q0FBNkM7QUFDN0Msd0NBQXVDO0FBRXZDO0lBRUUsa0JBQVksQ0FBUztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBQ0gsZUFBQztBQUFELENBTEEsQUFLQyxJQUFBO0FBTFksNEJBQVE7QUFRckIsSUFBYSxZQUFZO0lBU3ZCO1FBQUEsaUJBQWdCO1FBUGhCLGVBQVUsR0FBb0IsSUFBSSxpQkFBTyxFQUFVLENBQUM7UUFDcEQsVUFBSyxHQUF5Qix1QkFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFDLFVBQWU7WUFDOUQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFJO2dCQUM3QixVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUVZLENBQUM7SUFFaEIsa0NBQVcsR0FBWCxVQUFZLE1BQWMsRUFBRSxJQUFTO1FBQ25DLE1BQU0sQ0FBQSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDZCxLQUFLLFdBQVc7Z0JBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoQyxLQUFLLENBQUM7WUFDUixLQUFLLGNBQWM7Z0JBQ2pCLEtBQUssQ0FBQztRQUNWLENBQUM7SUFDSCxDQUFDO0lBRUgsbUJBQUM7QUFBRCxDQXJCQSxBQXFCQyxJQUFBO0FBckJZLFlBQVk7SUFEeEIsaUJBQVUsRUFBRTs7R0FDQSxZQUFZLENBcUJ4QjtBQXJCWSxvQ0FBWSIsImZpbGUiOiJhcHAvc2hhcmVkL3N0YXRlL3N0YXRlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL1N1YmplY3QnO1xuXG5leHBvcnQgY2xhc3MgQXBwU3RhdGUge1xuICBuYW1lOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKG46IHN0cmluZykge1xuICAgIHRoaXMubmFtZSA9IG47XG4gIH1cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0YXRlU2VydmljZSB7XG5cbiAgZGlzcGF0Y2hlcjogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuICBzdGF0ZTogT2JzZXJ2YWJsZTxBcHBTdGF0ZT4gPSBPYnNlcnZhYmxlLmNyZWF0ZSgoc3Vic2NyaWJlcjogYW55KSA9PiB7XG4gICAgdGhpcy5kaXNwYXRjaGVyLnN1YnNjcmliZSgoaXRlbSkgPT4ge1xuICAgICAgc3Vic2NyaWJlci5uZXh0KG5ldyBBcHBTdGF0ZShpdGVtKSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICB1cGRhdGVTdGF0ZShhY3Rpb246IHN0cmluZywgZGF0YTogYW55KTogdm9pZCB7XG4gICAgc3dpdGNoKGFjdGlvbikge1xuICAgICAgY2FzZSAnQUREX1NUQVRFJzpcbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyLm5leHQoZGF0YS5uYW1lKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdVUERBVEVfU1RBVEUnOlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxufVxuXG4iXX0=
