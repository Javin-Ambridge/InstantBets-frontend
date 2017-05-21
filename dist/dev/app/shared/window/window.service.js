"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
function _window() {
    return window;
}
var WindowRef = (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    return WindowRef;
}());
WindowRef = __decorate([
    core_1.Injectable()
], WindowRef);
exports.WindowRef = WindowRef;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvd2luZG93L3dpbmRvdy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBRTNDO0lBRUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNqQixDQUFDO0FBR0QsSUFBYSxTQUFTO0lBQXRCO0lBSUEsQ0FBQztJQUhFLHNCQUFJLG1DQUFZO2FBQWhCO1lBQ0csTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBQ0osZ0JBQUM7QUFBRCxDQUpBLEFBSUMsSUFBQTtBQUpZLFNBQVM7SUFEckIsaUJBQVUsRUFBRTtHQUNBLFNBQVMsQ0FJckI7QUFKWSw4QkFBUyIsImZpbGUiOiJhcHAvc2hhcmVkL3dpbmRvdy93aW5kb3cuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZnVuY3Rpb24gX3dpbmRvdygpIDogYW55IHtcbiAgIC8vIHJldHVybiB0aGUgZ2xvYmFsIG5hdGl2ZSBicm93c2VyIHdpbmRvdyBvYmplY3RcbiAgIHJldHVybiB3aW5kb3c7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXaW5kb3dSZWYge1xuICAgZ2V0IG5hdGl2ZVdpbmRvdygpIDogYW55IHtcbiAgICAgIHJldHVybiBfd2luZG93KCk7XG4gICB9XG59Il19
