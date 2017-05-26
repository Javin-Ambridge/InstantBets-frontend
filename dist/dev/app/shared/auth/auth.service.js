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
            redirectUri: 'http://localhost:5555/',
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
                _this.router.navigate(['/']);
                stateService.updateState('ADD_STATE', { val: true });
            }
            else if (err) {
                _this.router.navigate(['/']);
                console.log(err);
            }
            console.log("this shouldnt have happened!");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvYXV0aC9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0MsMENBQXlDO0FBQ3pDLG9DQUFrQztBQUNsQyxnQ0FBa0M7QUFHbEMsSUFBYSxXQUFXO0lBR3ZCLHFCQUFtQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUMzQixRQUFRLEVBQUUsa0NBQWtDO1lBQzVDLE1BQU0sRUFBRSxpQkFBaUI7WUFDekIsWUFBWSxFQUFFLGdCQUFnQjtZQUM5QixRQUFRLEVBQUUsa0NBQWtDO1lBQzVDLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsS0FBSyxFQUFFLFFBQVE7U0FDbEIsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVNLDJCQUFLLEdBQVo7UUFDQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sMENBQW9CLEdBQTNCLFVBQTRCLFlBQWlCO1FBQTdDLGlCQWFDO1FBWkEsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFRLEVBQUUsVUFBZTtZQUM5QyxFQUFFLENBQUMsQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLFdBQVcsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDaEUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUMxQixLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUM1QixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLFlBQVksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7WUFDcEQsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEIsQ0FBQztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFTyxnQ0FBVSxHQUFsQixVQUFtQixVQUFlO1FBQ2pDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUN0RixZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0QsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JELFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTSw0QkFBTSxHQUFiO1FBQ0MsWUFBWSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN4QyxZQUFZLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BDLFlBQVksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFTSxxQ0FBZSxHQUF0QjtRQUNDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLFNBQVMsQ0FBQztJQUN6QyxDQUFDO0lBQ0Ysa0JBQUM7QUFBRCxDQW5EQSxBQW1EQyxJQUFBO0FBbkRZLFdBQVc7SUFEdkIsaUJBQVUsRUFBRTtxQ0FJZSxlQUFNO0dBSHJCLFdBQVcsQ0FtRHZCO0FBbkRZLGtDQUFXIiwiZmlsZSI6ImFwcC9zaGFyZWQvYXV0aC9hdXRoLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXInO1xuaW1wb3J0ICogYXMgYXV0aDAgZnJvbSAnYXV0aDAtanMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuXHRhdXRoMDogYW55O1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZXI6IFJvdXRlcikge1xuXHRcdHRoaXMuYXV0aDAgPSBuZXcgYXV0aDAuV2ViQXV0aCh7XG5cdFx0ICAgIGNsaWVudElEOiAnaEZZdzQ3YTVCcjFwaVllMDNnTU5DVWhlbFUwME8xNDknLFxuXHRcdCAgICBkb21haW46ICdqYXZpbi5hdXRoMC5jb20nLFxuXHRcdCAgICByZXNwb25zZVR5cGU6ICd0b2tlbiBpZF90b2tlbicsXG5cdFx0ICAgIGF1ZGllbmNlOiAnaHR0cHM6Ly9qYXZpbi5hdXRoMC5jb20vdXNlcmluZm8nLFxuXHRcdCAgICByZWRpcmVjdFVyaTogJ2h0dHA6Ly9sb2NhbGhvc3Q6NTU1NS8nLCAgICAgIFxuXHRcdCAgICBzY29wZTogJ29wZW5pZCdcblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBsb2dpbigpOiB2b2lkIHtcblx0XHR0aGlzLmF1dGgwLmF1dGhvcml6ZSh7fSk7XG5cdH1cblxuXHRwdWJsaWMgaGFuZGxlQXV0aGVudGljYXRpb24oc3RhdGVTZXJ2aWNlOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLmF1dGgwLnBhcnNlSGFzaCgoZXJyOiBhbnksIGF1dGhSZXN1bHQ6IGFueSkgPT4ge1xuXHRcdFx0aWYgKGF1dGhSZXN1bHQgJiYgYXV0aFJlc3VsdC5hY2Nlc3NUb2tlbiAmJiBhdXRoUmVzdWx0LmlkVG9rZW4pIHtcblx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSAnJztcblx0XHRcdFx0dGhpcy5zZXRTZXNzaW9uKGF1dGhSZXN1bHQpO1xuXHRcdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XG5cdFx0XHRcdHN0YXRlU2VydmljZS51cGRhdGVTdGF0ZSgnQUREX1NUQVRFJywge3ZhbDogdHJ1ZX0pO1xuXHRcdFx0fSBlbHNlIGlmIChlcnIpIHtcblx0XHRcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnIpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc29sZS5sb2coXCJ0aGlzIHNob3VsZG50IGhhdmUgaGFwcGVuZWQhXCIpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRTZXNzaW9uKGF1dGhSZXN1bHQ6IGFueSk6IHZvaWQge1xuXHRcdGNvbnN0IGV4cGlyZXNBdCA9IEpTT04uc3RyaW5naWZ5KChhdXRoUmVzdWx0LmV4cGlyZXNJbiAqIDEwMCkgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjY2Vzc190b2tlbicsIGF1dGhSZXN1bHQuYWNjZXNzVG9rZW4pO1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpZF90b2tlbicsIGF1dGhSZXN1bHQuaWRUb2tlbik7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2V4cGlyZXNfYXQnLCBleHBpcmVzQXQpO1xuXHR9XG5cblx0cHVibGljIGxvZ291dCgpOiB2b2lkIHtcblx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYWNjZXNzX3Rva2VuJyk7XG5cdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2lkX3Rva2VuJyk7XG5cdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2V4cGlyZXNfYXQnKTtcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XG5cdH1cblxuXHRwdWJsaWMgaXNBdXRoZW50aWNhdGVkKCk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IGV4cGlyZXNBdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2V4cGlyZXNfYXQnKSk7XG5cdFx0cmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpIDwgZXhwaXJlc0F0O1xuXHR9XG59Il19
