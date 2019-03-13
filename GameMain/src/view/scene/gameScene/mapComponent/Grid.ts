/**
 * Create by tishoy
 * 2019.3.13
 * 
 * 地图上格子
 */
class Grid extends egret.Sprite {
    constructor() {
        super();
        this.initView();
    }

    private initView() {
        this.graphics.clear();
        this.graphics.beginFill(0x000000, 0.3);
        this.graphics.drawRect(0, 0, 50, 50);
        this.graphics.endFill();
        // texture
    }
}