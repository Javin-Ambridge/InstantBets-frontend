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
            audience: 'https://instantbet.herokuapp.com/',
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvYXV0aC9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0MsMENBQXlDO0FBQ3pDLG9DQUFrQztBQUNsQyxnQ0FBa0M7QUFHbEMsSUFBYSxXQUFXO0lBR3ZCLHFCQUFtQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUMzQixRQUFRLEVBQUUsa0NBQWtDO1lBQzVDLE1BQU0sRUFBRSxpQkFBaUI7WUFDekIsWUFBWSxFQUFFLGdCQUFnQjtZQUM5QixRQUFRLEVBQUUsbUNBQW1DO1lBQzdDLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsS0FBSyxFQUFFLFFBQVE7U0FDbEIsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVNLDJCQUFLLEdBQVo7UUFDQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sMENBQW9CLEdBQTNCLFVBQTRCLFlBQWlCO1FBQTdDLGlCQWFDO1FBWkEsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFRLEVBQUUsVUFBZTtZQUM5QyxFQUFFLENBQUMsQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLFdBQVcsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDaEUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUMxQixLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUM1QixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLFlBQVksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7WUFDcEQsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLFlBQVksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEVBQUMsR0FBRyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7Z0JBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEIsQ0FBQztRQUNGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVPLGdDQUFVLEdBQWxCLFVBQW1CLFVBQWU7UUFDakMsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3RGLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3RCxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVNLDRCQUFNLEdBQWI7UUFDQyxZQUFZLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3hDLFlBQVksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVNLHFDQUFlLEdBQXRCO1FBQ0MsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDakUsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsU0FBUyxDQUFDO0lBQ3pDLENBQUM7SUFDRixrQkFBQztBQUFELENBbkRBLEFBbURDLElBQUE7QUFuRFksV0FBVztJQUR2QixpQkFBVSxFQUFFO3FDQUllLGVBQU07R0FIckIsV0FBVyxDQW1EdkI7QUFuRFksa0NBQVciLCJmaWxlIjoiYXBwL3NoYXJlZC9hdXRoL2F1dGguc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2ZpbHRlcic7XG5pbXBvcnQgKiBhcyBhdXRoMCBmcm9tICdhdXRoMC1qcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG5cdGF1dGgwOiBhbnk7XG5cblx0Y29uc3RydWN0b3IocHVibGljIHJvdXRlcjogUm91dGVyKSB7XG5cdFx0dGhpcy5hdXRoMCA9IG5ldyBhdXRoMC5XZWJBdXRoKHtcblx0XHQgICAgY2xpZW50SUQ6ICdoRll3NDdhNUJyMXBpWWUwM2dNTkNVaGVsVTAwTzE0OScsXG5cdFx0ICAgIGRvbWFpbjogJ2phdmluLmF1dGgwLmNvbScsXG5cdFx0ICAgIHJlc3BvbnNlVHlwZTogJ3Rva2VuIGlkX3Rva2VuJyxcblx0XHQgICAgYXVkaWVuY2U6ICdodHRwczovL2luc3RhbnRiZXQuaGVyb2t1YXBwLmNvbS8nLFxuXHRcdCAgICByZWRpcmVjdFVyaTogJ2h0dHA6Ly9sb2NhbGhvc3Q6NTU1NS9kYXNoYm9hcmQnLCAgICAgIFxuXHRcdCAgICBzY29wZTogJ29wZW5pZCdcblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBsb2dpbigpOiB2b2lkIHtcblx0XHR0aGlzLmF1dGgwLmF1dGhvcml6ZSh7fSk7XG5cdH1cblxuXHRwdWJsaWMgaGFuZGxlQXV0aGVudGljYXRpb24oc3RhdGVTZXJ2aWNlOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLmF1dGgwLnBhcnNlSGFzaCgoZXJyOiBhbnksIGF1dGhSZXN1bHQ6IGFueSkgPT4ge1xuXHRcdFx0aWYgKGF1dGhSZXN1bHQgJiYgYXV0aFJlc3VsdC5hY2Nlc3NUb2tlbiAmJiBhdXRoUmVzdWx0LmlkVG9rZW4pIHtcblx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSAnJztcblx0XHRcdFx0dGhpcy5zZXRTZXNzaW9uKGF1dGhSZXN1bHQpO1xuXHRcdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9kYXNoYm9hcmQnXSk7XG5cdFx0XHRcdHN0YXRlU2VydmljZS51cGRhdGVTdGF0ZSgnQUREX1NUQVRFJywge3ZhbDogdHJ1ZX0pO1xuXHRcdFx0fSBlbHNlIGlmIChlcnIpIHtcblx0XHRcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZGFzaGJvYXJkJ10pO1xuXHRcdFx0XHRzdGF0ZVNlcnZpY2UudXBkYXRlU3RhdGUoJ0FERF9TVEFURScsIHt2YWw6IGZhbHNlfSk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIHNldFNlc3Npb24oYXV0aFJlc3VsdDogYW55KTogdm9pZCB7XG5cdFx0Y29uc3QgZXhwaXJlc0F0ID0gSlNPTi5zdHJpbmdpZnkoKGF1dGhSZXN1bHQuZXhwaXJlc0luICogMTAwKSArIG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWNjZXNzX3Rva2VuJywgYXV0aFJlc3VsdC5hY2Nlc3NUb2tlbik7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkX3Rva2VuJywgYXV0aFJlc3VsdC5pZFRva2VuKTtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZXhwaXJlc19hdCcsIGV4cGlyZXNBdCk7XG5cdH1cblxuXHRwdWJsaWMgbG9nb3V0KCk6IHZvaWQge1xuXHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhY2Nlc3NfdG9rZW4nKTtcblx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnaWRfdG9rZW4nKTtcblx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZXhwaXJlc19hdCcpO1xuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKTtcblx0fVxuXG5cdHB1YmxpYyBpc0F1dGhlbnRpY2F0ZWQoKTogYm9vbGVhbiB7XG5cdFx0Y29uc3QgZXhwaXJlc0F0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZXhwaXJlc19hdCcpKTtcblx0XHRyZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgPCBleHBpcmVzQXQ7XG5cdH1cbn0iXX0=
