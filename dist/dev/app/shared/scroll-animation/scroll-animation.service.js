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
    ScrollAnimationService.prototype.smoothScroll = function (eID, sub) {
        var startY = currentYPosition();
        var stopY = elmYPosition(eID) - sub;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2Nyb2xsLWFuaW1hdGlvbi9zY3JvbGwtYW5pbWF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0MsMkRBQXFEO0FBSXJELElBQWEsc0JBQXNCO0lBRWxDLGdDQUFtQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ25DLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUNoQyxDQUFDO0lBQ0MseUNBQVEsR0FBUixVQUFTLE1BQWMsRUFBRSxRQUFnQjtRQUF6QyxpQkFLRDtRQUpBLFVBQVUsQ0FBQztZQUNWLEtBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFDcEMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2IsTUFBTSxDQUFDO0lBQ1IsQ0FBQztJQUNFLDZDQUFZLEdBQVosVUFBYSxHQUFRLEVBQUUsR0FBVztRQUNwQyxJQUFJLE1BQU0sR0FBRyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ2hDLElBQUksS0FBSyxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDcEMsSUFBSSxRQUFRLEdBQUcsS0FBSyxHQUFHLE1BQU0sR0FBRyxLQUFLLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDaEUsRUFBRSxDQUFDLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUM1QyxDQUFDO1FBQ0QsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDdkMsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDNUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDdEMsSUFBSSxLQUFLLEdBQUcsS0FBSyxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsSUFBSSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDM0QsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDcEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO2dCQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUM7Z0JBQ3BDLEtBQUssSUFBSSxJQUFJLENBQUM7Z0JBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztvQkFBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUFDLEtBQUssRUFBRSxDQUFDO1lBQzFELENBQUM7WUFBQyxNQUFNLENBQUM7UUFDVixDQUFDO1FBQ0QsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQztZQUNwQyxLQUFLLElBQUksSUFBSSxDQUFDO1lBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUQsQ0FBQztJQUNGLENBQUM7SUFDRiw2QkFBQztBQUFELENBbENBLEFBa0NDLElBQUE7QUFsQ1ksc0JBQXNCO0lBRGxDLGlCQUFVLEVBQUU7cUNBR2UsMEJBQVM7R0FGeEIsc0JBQXNCLENBa0NsQztBQWxDWSx3REFBc0I7QUFvQ25DO0lBRUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBRTlDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7UUFDL0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDO0lBRTlDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzVELE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDYixDQUFDO0FBRUQsc0JBQXNCLEdBQVE7SUFDMUIsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2QyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBQ3RCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUNmLE9BQU8sSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM3RCxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDM0IsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDZixDQUFDIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2Nyb2xsLWFuaW1hdGlvbi9zY3JvbGwtYW5pbWF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuLi93aW5kb3cvd2luZG93LnNlcnZpY2UnO1xuXG4vL1RoYW5rcyB0bzogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zNjA5MjIxMi9zbW9vdGgtc2Nyb2xsLWFuZ3VsYXIyLzQyOTgyODExXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2Nyb2xsQW5pbWF0aW9uU2VydmljZSB7XG5cdHdpbjogYW55O1xuXHRjb25zdHJ1Y3RvcihwdWJsaWMgd2luZG93OiBXaW5kb3dSZWYpIHtcblx0XHR0aGlzLndpbiA9IHdpbmRvdy5uYXRpdmVXaW5kb3c7XG5cdH1cbiAgXHRzY3JvbGxUbyh5UG9pbnQ6IG51bWJlciwgZHVyYXRpb246IG51bWJlcikge1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy53aW4ud2luZG93LnNjcm9sbFRvKDAsIHlQb2ludClcblx0XHR9LCBkdXJhdGlvbik7XG5cdFx0cmV0dXJuO1xuXHR9XG4gICAgc21vb3RoU2Nyb2xsKGVJRDogYW55LCBzdWI6IG51bWJlcikge1xuXHRcdHZhciBzdGFydFkgPSBjdXJyZW50WVBvc2l0aW9uKCk7XG5cdFx0dmFyIHN0b3BZID0gZWxtWVBvc2l0aW9uKGVJRCkgLSBzdWI7XG5cdFx0dmFyIGRpc3RhbmNlID0gc3RvcFkgPiBzdGFydFkgPyBzdG9wWSAtIHN0YXJ0WSA6IHN0YXJ0WSAtIHN0b3BZO1xuXHRcdGlmIChkaXN0YW5jZSA8IDEwMCkge1xuXHRcdFx0dGhpcy53aW4ud2luZG93LnNjcm9sbFRvKDAsIHN0b3BZKTsgcmV0dXJuO1xuXHRcdH1cblx0XHR2YXIgc3BlZWQgPSBNYXRoLnJvdW5kKGRpc3RhbmNlIC8gMTAwKTtcblx0XHRpZiAoc3BlZWQgPj0gMjApIHNwZWVkID0gMjA7XG5cdFx0dmFyIHN0ZXAgPSBNYXRoLnJvdW5kKGRpc3RhbmNlIC8gMTAwKTtcblx0XHR2YXIgbGVhcFkgPSBzdG9wWSA+IHN0YXJ0WSA/IHN0YXJ0WSArIHN0ZXAgOiBzdGFydFkgLSBzdGVwO1xuXHRcdHZhciB0aW1lciA9IDA7XG5cdFx0aWYgKHN0b3BZID4gc3RhcnRZKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gc3RhcnRZOyBpIDwgc3RvcFk7IGkgKz0gc3RlcCkge1xuXHRcdFx0XHR0aGlzLnNjcm9sbFRvKGxlYXBZLCB0aW1lciAqIHNwZWVkKTtcblx0XHRcdFx0bGVhcFkgKz0gc3RlcDsgaWYgKGxlYXBZID4gc3RvcFkpIGxlYXBZID0gc3RvcFk7IHRpbWVyKys7XG5cdFx0XHR9IHJldHVybjtcblx0XHR9XG5cdFx0Zm9yICh2YXIgaSA9IHN0YXJ0WTsgaSA+IHN0b3BZOyBpIC09IHN0ZXApIHtcblx0XHRcdHRoaXMuc2Nyb2xsVG8obGVhcFksIHRpbWVyICogc3BlZWQpO1xuXHRcdFx0bGVhcFkgLT0gc3RlcDsgaWYgKGxlYXBZIDwgc3RvcFkpIGxlYXBZID0gc3RvcFk7IHRpbWVyKys7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGN1cnJlbnRZUG9zaXRpb24oKSB7XG4gICAgLy8gRmlyZWZveCwgQ2hyb21lLCBPcGVyYSwgU2FmYXJpXG4gICAgaWYgKHNlbGYucGFnZVlPZmZzZXQpIHJldHVybiBzZWxmLnBhZ2VZT2Zmc2V0O1xuICAgIC8vIEludGVybmV0IEV4cGxvcmVyIDYgLSBzdGFuZGFyZHMgbW9kZVxuICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcClcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgLy8gSW50ZXJuZXQgRXhwbG9yZXIgNiwgNyBhbmQgOFxuICAgIGlmIChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCkgcmV0dXJuIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgIHJldHVybiAwO1xufVxuXG5mdW5jdGlvbiBlbG1ZUG9zaXRpb24oZUlEOiBhbnkpIHtcbiAgICB2YXIgZWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZUlEKTtcbiAgICB2YXIgeSA9IGVsbS5vZmZzZXRUb3A7XG4gICAgdmFyIG5vZGUgPSBlbG07XG4gICAgd2hpbGUgKG5vZGUub2Zmc2V0UGFyZW50ICYmIG5vZGUub2Zmc2V0UGFyZW50ICE9IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgbm9kZSA9IChub2RlLm9mZnNldFBhcmVudCk7XG4gICAgICAgIHkgKz0gbm9kZS5vZmZzZXRUb3A7XG4gICAgfSByZXR1cm4geTtcbn0iXX0=
