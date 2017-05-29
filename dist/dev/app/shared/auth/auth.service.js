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
var auth0 = require("auth0-js");
var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
        this.auth0 = new auth0.WebAuth({
            clientID: 'hFYw47a5Br1piYe03gMNCUhelU00O149',
            domain: 'javin.auth0.com',
            responseType: 'token id_token',
            audience: 'https://javin.auth0.com/userinfo',
            redirectUri: 'http://localhost:5555/dashboard',
            scope: 'openid'
        });
    }
    AuthService.prototype.login = function () {
        this.auth0.authorize({});
    };
    AuthService.prototype.handleAuthentication = function (stateService) {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                _this.setSession(authResult);
                _this.router.navigate(['/dashboard']);
                stateService.updateState('ADD_STATE', { val: true });
            }
            else if (err) {
                _this.router.navigate(['/dashboard']);
                stateService.updateState('ADD_STATE', { val: false });
                console.log(err);
            }
        });
    };
    AuthService.prototype.setSession = function (authResult) {
        var expiresAt = JSON.stringify((authResult.expiresIn * 100) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        this.router.navigate(['/']);
    };
    AuthService.prototype.isAuthenticated = function () {
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], AuthService);
exports.AuthService = AuthService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvYXV0aC9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0MsMENBQXlDO0FBQ3pDLG9DQUFrQztBQUNsQyxnQ0FBa0M7QUFHbEMsSUFBYSxXQUFXO0lBR3ZCLHFCQUFtQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUMzQixRQUFRLEVBQUUsa0NBQWtDO1lBQzVDLE1BQU0sRUFBRSxpQkFBaUI7WUFDekIsWUFBWSxFQUFFLGdCQUFnQjtZQUM5QixRQUFRLEVBQUUsa0NBQWtDO1lBQzVDLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsS0FBSyxFQUFFLFFBQVE7U0FDbEIsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVNLDJCQUFLLEdBQVo7UUFDQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sMENBQW9CLEdBQTNCLFVBQTRCLFlBQWlCO1FBQTdDLGlCQWFDO1FBWkEsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFRLEVBQUUsVUFBZTtZQUM5QyxFQUFFLENBQUMsQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLFdBQVcsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDaEUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUMxQixLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUM1QixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLFlBQVksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7WUFDcEQsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLFlBQVksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEVBQUMsR0FBRyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7Z0JBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEIsQ0FBQztRQUNGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVPLGdDQUFVLEdBQWxCLFVBQW1CLFVBQWU7UUFDakMsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3RGLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3RCxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVNLDRCQUFNLEdBQWI7UUFDQyxZQUFZLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3hDLFlBQVksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVNLHFDQUFlLEdBQXRCO1FBQ0MsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDakUsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsU0FBUyxDQUFDO0lBQ3pDLENBQUM7SUFDRixrQkFBQztBQUFELENBbkRBLEFBbURDLElBQUE7QUFuRFksV0FBVztJQUR2QixpQkFBVSxFQUFFO3FDQUllLGVBQU07R0FIckIsV0FBVyxDQW1EdkI7QUFuRFksa0NBQVciLCJmaWxlIjoiYXBwL3NoYXJlZC9hdXRoL2F1dGguc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2ZpbHRlcic7XG5pbXBvcnQgKiBhcyBhdXRoMCBmcm9tICdhdXRoMC1qcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG5cdGF1dGgwOiBhbnk7XG5cblx0Y29uc3RydWN0b3IocHVibGljIHJvdXRlcjogUm91dGVyKSB7XG5cdFx0dGhpcy5hdXRoMCA9IG5ldyBhdXRoMC5XZWJBdXRoKHtcblx0XHQgICAgY2xpZW50SUQ6ICdoRll3NDdhNUJyMXBpWWUwM2dNTkNVaGVsVTAwTzE0OScsXG5cdFx0ICAgIGRvbWFpbjogJ2phdmluLmF1dGgwLmNvbScsXG5cdFx0ICAgIHJlc3BvbnNlVHlwZTogJ3Rva2VuIGlkX3Rva2VuJyxcblx0XHQgICAgYXVkaWVuY2U6ICdodHRwczovL2phdmluLmF1dGgwLmNvbS91c2VyaW5mbycsXG5cdFx0ICAgIHJlZGlyZWN0VXJpOiAnaHR0cDovL2xvY2FsaG9zdDo1NTU1L2Rhc2hib2FyZCcsICAgICAgXG5cdFx0ICAgIHNjb3BlOiAnb3BlbmlkJ1xuXHRcdH0pO1xuXHR9XG5cblx0cHVibGljIGxvZ2luKCk6IHZvaWQge1xuXHRcdHRoaXMuYXV0aDAuYXV0aG9yaXplKHt9KTtcblx0fVxuXG5cdHB1YmxpYyBoYW5kbGVBdXRoZW50aWNhdGlvbihzdGF0ZVNlcnZpY2U6IGFueSk6IHZvaWQge1xuXHRcdHRoaXMuYXV0aDAucGFyc2VIYXNoKChlcnI6IGFueSwgYXV0aFJlc3VsdDogYW55KSA9PiB7XG5cdFx0XHRpZiAoYXV0aFJlc3VsdCAmJiBhdXRoUmVzdWx0LmFjY2Vzc1Rva2VuICYmIGF1dGhSZXN1bHQuaWRUb2tlbikge1xuXHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcnO1xuXHRcdFx0XHR0aGlzLnNldFNlc3Npb24oYXV0aFJlc3VsdCk7XG5cdFx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Rhc2hib2FyZCddKTtcblx0XHRcdFx0c3RhdGVTZXJ2aWNlLnVwZGF0ZVN0YXRlKCdBRERfU1RBVEUnLCB7dmFsOiB0cnVlfSk7XG5cdFx0XHR9IGVsc2UgaWYgKGVycikge1xuXHRcdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9kYXNoYm9hcmQnXSk7XG5cdFx0XHRcdHN0YXRlU2VydmljZS51cGRhdGVTdGF0ZSgnQUREX1NUQVRFJywge3ZhbDogZmFsc2V9KTtcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgc2V0U2Vzc2lvbihhdXRoUmVzdWx0OiBhbnkpOiB2b2lkIHtcblx0XHRjb25zdCBleHBpcmVzQXQgPSBKU09OLnN0cmluZ2lmeSgoYXV0aFJlc3VsdC5leHBpcmVzSW4gKiAxMDApICsgbmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY2Nlc3NfdG9rZW4nLCBhdXRoUmVzdWx0LmFjY2Vzc1Rva2VuKTtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWRfdG9rZW4nLCBhdXRoUmVzdWx0LmlkVG9rZW4pO1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdleHBpcmVzX2F0JywgZXhwaXJlc0F0KTtcblx0fVxuXG5cdHB1YmxpYyBsb2dvdXQoKTogdm9pZCB7XG5cdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FjY2Vzc190b2tlbicpO1xuXHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdpZF90b2tlbicpO1xuXHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdleHBpcmVzX2F0Jyk7XG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xuXHR9XG5cblx0cHVibGljIGlzQXV0aGVudGljYXRlZCgpOiBib29sZWFuIHtcblx0XHRjb25zdCBleHBpcmVzQXQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdleHBpcmVzX2F0JykpO1xuXHRcdHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKSA8IGV4cGlyZXNBdDtcblx0fVxufSJdfQ==
