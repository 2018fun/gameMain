/**
 * create by tishoy
 * 2019.3.14
 * 英雄状态面板
 */
class HeroStatus extends egret.Sprite {

    constructor() {
        super();
        this.initView();
    }

    private showButton: BitmapButton;

    private initView() {
        let bg = new egret.Bitmap;

        let resText: egret.TextField;
        let list = ResourceController.getInstance().getResStatus();
        for (var i = 0; i < list.length; i++) {
            resText = new egret.TextField();
            resText.x = 0;
            resText.y = 0;
            resText.text = list[i];
            this.addChild(resText);
        }

        let texture = RES.getRes("ok_button")
        this.showButton = new BitmapButton(texture);

        this.showButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
    }

    private onTap(e) {

    }

    private updateView() {

    }



}