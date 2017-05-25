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
var router_1 = require("@angular/router");
require("rxjs/add/operator/filter");
var auth0_js_1 = require("auth0-js");
var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
        this.auth0 = new auth0_js_1.WebAuth({
            clientID: 'hFYw47a5Br1piYe03gMNCUhelU00O149',
            domain: 'javin.auth0.com',
            responseType: 'token id_token',
            audience: 'https://javin.auth0.com/userinfo',
            redirectUri: 'http://localhost:4200/',
            scope: 'openid'
        });
    }
    AuthService.prototype.login = function () {
        this.auth0.authorize({});
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], AuthService);
exports.AuthService = AuthService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvYXV0aC9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0MsMENBQXlDO0FBQ3pDLG9DQUFrQztBQUNsQyxxQ0FBb0M7QUFHcEMsSUFBYSxXQUFXO0lBR3ZCLHFCQUFtQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksa0JBQU8sQ0FBQztZQUNyQixRQUFRLEVBQUUsa0NBQWtDO1lBQzVDLE1BQU0sRUFBRSxpQkFBaUI7WUFDekIsWUFBWSxFQUFFLGdCQUFnQjtZQUM5QixRQUFRLEVBQUUsa0NBQWtDO1lBQzVDLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsS0FBSyxFQUFFLFFBQVE7U0FDbEIsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVNLDJCQUFLLEdBQVo7UUFDQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0Ysa0JBQUM7QUFBRCxDQWpCQSxBQWlCQyxJQUFBO0FBakJZLFdBQVc7SUFEdkIsaUJBQVUsRUFBRTtxQ0FJZSxlQUFNO0dBSHJCLFdBQVcsQ0FpQnZCO0FBakJZLGtDQUFXIiwiZmlsZSI6ImFwcC9zaGFyZWQvYXV0aC9hdXRoLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXInO1xuaW1wb3J0IHsgV2ViQXV0aCwgfSBmcm9tICdhdXRoMC1qcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG5cdGF1dGgwOiBXZWJBdXRoO1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZXI6IFJvdXRlcikge1xuXHRcdHRoaXMuYXV0aDAgPSBuZXcgV2ViQXV0aCh7XG5cdFx0ICAgIGNsaWVudElEOiAnaEZZdzQ3YTVCcjFwaVllMDNnTU5DVWhlbFUwME8xNDknLFxuXHRcdCAgICBkb21haW46ICdqYXZpbi5hdXRoMC5jb20nLFxuXHRcdCAgICByZXNwb25zZVR5cGU6ICd0b2tlbiBpZF90b2tlbicsXG5cdFx0ICAgIGF1ZGllbmNlOiAnaHR0cHM6Ly9qYXZpbi5hdXRoMC5jb20vdXNlcmluZm8nLFxuXHRcdCAgICByZWRpcmVjdFVyaTogJ2h0dHA6Ly9sb2NhbGhvc3Q6NDIwMC8nLCAgICAgIFxuXHRcdCAgICBzY29wZTogJ29wZW5pZCdcblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBsb2dpbigpOiB2b2lkIHtcblx0XHR0aGlzLmF1dGgwLmF1dGhvcml6ZSh7fSk7XG5cdH1cbn0iXX0=
