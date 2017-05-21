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
var window_service_1 = require("../window/window.service");
var ScrollAnimationService = (function () {
    function ScrollAnimationService(window) {
        this.window = window;
        this.win = window.nativeWindow;
    }
    ScrollAnimationService.prototype.scrollTo = function (yPoint, duration) {
        var _this = this;
        setTimeout(function () {
            _this.win.window.scrollTo(0, yPoint);
        }, duration);
        return;
    };
    ScrollAnimationService.prototype.smoothScroll = function (eID) {
        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            this.win.window.scrollTo(0, stopY);
            return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20)
            speed = 20;
        var step = Math.round(distance / 100);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for (var i = startY; i < stopY; i += step) {
                this.scrollTo(leapY, timer * speed);
                leapY += step;
                if (leapY > stopY)
                    leapY = stopY;
                timer++;
            }
            return;
        }
        for (var i = startY; i > stopY; i -= step) {
            this.scrollTo(leapY, timer * speed);
            leapY -= step;
            if (leapY < stopY)
                leapY = stopY;
            timer++;
        }
    };
    return ScrollAnimationService;
}());
ScrollAnimationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [window_service_1.WindowRef])
], ScrollAnimationService);
exports.ScrollAnimationService = ScrollAnimationService;
function currentYPosition() {
    if (self.pageYOffset)
        return self.pageYOffset;
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    if (document.body.scrollTop)
        return document.body.scrollTop;
    return 0;
}
function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = (node.offsetParent);
        y += node.offsetTop;
    }
    return y;
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2Nyb2xsLWFuaW1hdGlvbi9zY3JvbGwtYW5pbWF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0MsMkRBQXFEO0FBSXJELElBQWEsc0JBQXNCO0lBRWxDLGdDQUFtQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ25DLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUNoQyxDQUFDO0lBQ0MseUNBQVEsR0FBUixVQUFTLE1BQWMsRUFBRSxRQUFnQjtRQUF6QyxpQkFLRDtRQUpBLFVBQVUsQ0FBQztZQUNWLEtBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFDcEMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2IsTUFBTSxDQUFDO0lBQ1IsQ0FBQztJQUNFLDZDQUFZLEdBQVosVUFBYSxHQUFRO1FBQ3ZCLElBQUksTUFBTSxHQUFHLGdCQUFnQixFQUFFLENBQUM7UUFDaEMsSUFBSSxLQUFLLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLElBQUksUUFBUSxHQUFHLEtBQUssR0FBRyxNQUFNLEdBQUcsS0FBSyxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2hFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUM7UUFDNUMsQ0FBQztRQUNELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7WUFBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQzVCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLElBQUksS0FBSyxHQUFHLEtBQUssR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLElBQUksR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzNELElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDO2dCQUNwQyxLQUFLLElBQUksSUFBSSxDQUFDO2dCQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7b0JBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFBQyxLQUFLLEVBQUUsQ0FBQztZQUMxRCxDQUFDO1lBQUMsTUFBTSxDQUFDO1FBQ1YsQ0FBQztRQUNELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDcEMsS0FBSyxJQUFJLElBQUksQ0FBQztZQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUFDLEtBQUssRUFBRSxDQUFDO1FBQzFELENBQUM7SUFDRixDQUFDO0lBQ0YsNkJBQUM7QUFBRCxDQWxDQSxBQWtDQyxJQUFBO0FBbENZLHNCQUFzQjtJQURsQyxpQkFBVSxFQUFFO3FDQUdlLDBCQUFTO0dBRnhCLHNCQUFzQixDQWtDbEM7QUFsQ1ksd0RBQXNCO0FBb0NuQztJQUVJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUU5QyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsZUFBZSxJQUFJLFFBQVEsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDO1FBQy9ELE1BQU0sQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQztJQUU5QyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUM1RCxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ2IsQ0FBQztBQUVELHNCQUFzQixHQUFRO0lBQzFCLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUN0QixJQUFJLElBQUksR0FBRyxHQUFHLENBQUM7SUFDZixPQUFPLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0QsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzNCLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ2YsQ0FBQyIsImZpbGUiOiJhcHAvc2hhcmVkL3Njcm9sbC1hbmltYXRpb24vc2Nyb2xsLWFuaW1hdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vd2luZG93L3dpbmRvdy5zZXJ2aWNlJztcblxuLy9UaGFua3MgdG86IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzYwOTIyMTIvc21vb3RoLXNjcm9sbC1hbmd1bGFyMi80Mjk4MjgxMVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjcm9sbEFuaW1hdGlvblNlcnZpY2Uge1xuXHR3aW46IGFueTtcblx0Y29uc3RydWN0b3IocHVibGljIHdpbmRvdzogV2luZG93UmVmKSB7XG5cdFx0dGhpcy53aW4gPSB3aW5kb3cubmF0aXZlV2luZG93O1xuXHR9XG4gIFx0c2Nyb2xsVG8oeVBvaW50OiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpIHtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMud2luLndpbmRvdy5zY3JvbGxUbygwLCB5UG9pbnQpXG5cdFx0fSwgZHVyYXRpb24pO1xuXHRcdHJldHVybjtcblx0fVxuICAgIHNtb290aFNjcm9sbChlSUQ6IGFueSkge1xuXHRcdHZhciBzdGFydFkgPSBjdXJyZW50WVBvc2l0aW9uKCk7XG5cdFx0dmFyIHN0b3BZID0gZWxtWVBvc2l0aW9uKGVJRCk7XG5cdFx0dmFyIGRpc3RhbmNlID0gc3RvcFkgPiBzdGFydFkgPyBzdG9wWSAtIHN0YXJ0WSA6IHN0YXJ0WSAtIHN0b3BZO1xuXHRcdGlmIChkaXN0YW5jZSA8IDEwMCkge1xuXHRcdFx0dGhpcy53aW4ud2luZG93LnNjcm9sbFRvKDAsIHN0b3BZKTsgcmV0dXJuO1xuXHRcdH1cblx0XHR2YXIgc3BlZWQgPSBNYXRoLnJvdW5kKGRpc3RhbmNlIC8gMTAwKTtcblx0XHRpZiAoc3BlZWQgPj0gMjApIHNwZWVkID0gMjA7XG5cdFx0dmFyIHN0ZXAgPSBNYXRoLnJvdW5kKGRpc3RhbmNlIC8gMTAwKTtcblx0XHR2YXIgbGVhcFkgPSBzdG9wWSA+IHN0YXJ0WSA/IHN0YXJ0WSArIHN0ZXAgOiBzdGFydFkgLSBzdGVwO1xuXHRcdHZhciB0aW1lciA9IDA7XG5cdFx0aWYgKHN0b3BZID4gc3RhcnRZKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gc3RhcnRZOyBpIDwgc3RvcFk7IGkgKz0gc3RlcCkge1xuXHRcdFx0XHR0aGlzLnNjcm9sbFRvKGxlYXBZLCB0aW1lciAqIHNwZWVkKTtcblx0XHRcdFx0bGVhcFkgKz0gc3RlcDsgaWYgKGxlYXBZID4gc3RvcFkpIGxlYXBZID0gc3RvcFk7IHRpbWVyKys7XG5cdFx0XHR9IHJldHVybjtcblx0XHR9XG5cdFx0Zm9yICh2YXIgaSA9IHN0YXJ0WTsgaSA+IHN0b3BZOyBpIC09IHN0ZXApIHtcblx0XHRcdHRoaXMuc2Nyb2xsVG8obGVhcFksIHRpbWVyICogc3BlZWQpO1xuXHRcdFx0bGVhcFkgLT0gc3RlcDsgaWYgKGxlYXBZIDwgc3RvcFkpIGxlYXBZID0gc3RvcFk7IHRpbWVyKys7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGN1cnJlbnRZUG9zaXRpb24oKSB7XG4gICAgLy8gRmlyZWZveCwgQ2hyb21lLCBPcGVyYSwgU2FmYXJpXG4gICAgaWYgKHNlbGYucGFnZVlPZmZzZXQpIHJldHVybiBzZWxmLnBhZ2VZT2Zmc2V0O1xuICAgIC8vIEludGVybmV0IEV4cGxvcmVyIDYgLSBzdGFuZGFyZHMgbW9kZVxuICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcClcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgLy8gSW50ZXJuZXQgRXhwbG9yZXIgNiwgNyBhbmQgOFxuICAgIGlmIChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCkgcmV0dXJuIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgIHJldHVybiAwO1xufVxuXG5mdW5jdGlvbiBlbG1ZUG9zaXRpb24oZUlEOiBhbnkpIHtcbiAgICB2YXIgZWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZUlEKTtcbiAgICB2YXIgeSA9IGVsbS5vZmZzZXRUb3A7XG4gICAgdmFyIG5vZGUgPSBlbG07XG4gICAgd2hpbGUgKG5vZGUub2Zmc2V0UGFyZW50ICYmIG5vZGUub2Zmc2V0UGFyZW50ICE9IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgbm9kZSA9IChub2RlLm9mZnNldFBhcmVudCk7XG4gICAgICAgIHkgKz0gbm9kZS5vZmZzZXRUb3A7XG4gICAgfSByZXR1cm4geTtcbn0iXX0=
