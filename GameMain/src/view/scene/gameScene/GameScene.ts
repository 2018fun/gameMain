/**
 * 游戏场景
 */
class GameScene extends egret.DisplayObjectContainer implements IScene {
    private _index: number;

    constructor() {
        super();
        this._index = 0;
        this.initView();
    }

    private initView() {
        this.createMap();
        let connection = new Connection();
        connection.x = Util.curWidth() / 2;
        connection.y = Util.curHeight() * 5 / 8;
        this.addChild(connection);

        let road = new Road(5);
        road.x = connection.center.x - 25;
        road.y = connection.center.y - road.height - 50;
        this.addChild(road);

        let connection2 = new Connection();
        connection2.x = connection.x;
        connection2.y = road.y - connection.height / 2;
        this.addChild(connection2);
        /**
         * map
         */

        /**
         * hero
         */
        let hero = new egret.Bitmap();
        hero.texture = RES.getRes("button_png");
        hero.x = connection.x;
        hero.y = connection.center.y;
        this.addChild(hero);

        /**
         * magic
         */

        let magic: egret.Bitmap;
        for (var i = 0; i < 4; i++) {

            magic = new egret.Bitmap();
            magic.texture = RES.getRes("button_png");
            magic.x = 100 + 100 * i;
            magic.y = Util.curHeight() * 6 / 8;
            this.addChild(magic);
        }

        let bag: egret.Bitmap;

    }

    private createMap() {
        GameController.getInstance().generateMap();
    }

    private updateView() {

    }

    get index(): number {
        return 1;
    }

    _start(): void {

    }

    //--------------
    //エンターフレーム
    //--------------	
    play_loop(event: Event): void {

    }

    //--------------
    //シーンの停止処理：タイマーとめたり、サウンドとめたり、広告とめたりする
    //--------------
    _remove(): void {

    }
    //--------------
    //シーンの削除：メモリ開放処理などを行う
    //--------------
    _delete(): void {

    }

    //--------------
    //シーンを待機するときに呼ばれる※AddSceneした時
    //--------------
    _taiki(): void {

    }

    //--------------
    //シーンが待機から復帰するときに呼ばれる
    //--------------
    _fukki(): void {

    }

    //--------------
    //シーンが中断されるときに呼ばれる
    //--------------
    _chudan(): void {

    }

    //--------------
    //シーンがアプリ中断からアクティブになるときに呼ばれる
    //--------------
    _active(): void {

    }

}