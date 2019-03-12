/**
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

        
    }

    get type() {
        return this._connectionData.type;
    }
}