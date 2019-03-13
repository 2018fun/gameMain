/**
 * create by tishoy
 * 2019.3.13
 * 位图按钮
 */
class BitmapButton extends egret.Sprite {

    private texture: egret.Texture;
    private bitmap: egret.Bitmap;

    constructor(texture) {
        super();
        this.texture = texture;
        this.initView();
    }

    private initView() {
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
    }

    private onTouchTap(e) {
        // this.bitmap.scaleX = 0.8;
        // this.bitmap.scaleY = 0.8;
    }

    private onTouchCancel(e) {
        this.bitmap.scaleX = 1;
        this.bitmap.scaleY = 1;
    }

    private onTouchBegin(e) {
        this.bitmap.scaleX = 0.8;
        this.bitmap.scaleY = 0.8;
    }

    private onTouchMove(e) {

    }

    private onReleaseOutside(e) {
        this.bitmap.scaleX = 1;
        this.bitmap.scaleY = 1;
    }

    private onTouchEnd(e) {
        this.bitmap.scaleX = 1;
        this.bitmap.scaleY = 1;
    }

    private onDispose(e) {
        this.removeEventListener(egret.Event.REMOVED, this.onDispose, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onReleaseOutside, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchCancel, this);
    }
}