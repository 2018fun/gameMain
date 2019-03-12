var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var BitmapButton = (function (_super) {
    __extends(BitmapButton, _super);
    function BitmapButton(texture) {
        var _this = _super.call(this) || this;
        _this.texture = texture;
        _this.initView();
        return _this;
    }
    BitmapButton.prototype.initView = function () {
        this.bitmap = new egret.Bitmap(this.texture);
        this.bitmap.anchorOffsetX = this.bitmap.width / 2;
        this.bitmap.anchorOffsetY = this.bitmap.height / 2;
        this.addChild(this.bitmap);
        this.bitmap.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onReleaseOutside, this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchCancel, this);
        this.addEventListener(egret.Event.REMOVED, this.onDispose, this);
    };
    BitmapButton.prototype.onTouchTap = function (e) {
        // this.bitmap.scaleX = 0.8;
        // this.bitmap.scaleY = 0.8;
    };
    BitmapButton.prototype.onTouchCancel = function (e) {
        this.bitmap.scaleX = 1;
        this.bitmap.scaleY = 1;
    };
    BitmapButton.prototype.onTouchBegin = function (e) {
        this.bitmap.scaleX = 0.8;
        this.bitmap.scaleY = 0.8;
    };
    BitmapButton.prototype.onTouchMove = function (e) {
    };
    BitmapButton.prototype.onReleaseOutside = function (e) {
        this.bitmap.scaleX = 1;
        this.bitmap.scaleY = 1;
    };
    BitmapButton.prototype.onTouchEnd = function (e) {
        this.bitmap.scaleX = 1;
        this.bitmap.scaleY = 1;
    };
    BitmapButton.prototype.onDispose = function (e) {
        this.removeEventListener(egret.Event.REMOVED, this.onDispose, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onReleaseOutside, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchCancel, this);
    };
    return BitmapButton;
}(egret.Sprite));
__reflect(BitmapButton.prototype, "BitmapButton");
