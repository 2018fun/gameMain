/**
 * Create by tishoy
 * 2019.3.13
 * 
 * 连接点
 */
class Connection extends egret.Sprite {

    private _type;
    private _connectionData;

    constructor(connectionData = null) {
        super();
        this._connectionData = connectionData;
        this.initView();

    }

    private initView() {
        // texture

        this.graphics.clear();
        this.graphics.beginFill(0x000000, 0.3);
        this.graphics.drawCircle(0, 0, 100);
        this.graphics.endFill();
    }

    get type() {
        return this._connectionData.type;
    }

    get center() {
        return new egret.Point(this.x, this.y);
    }
}