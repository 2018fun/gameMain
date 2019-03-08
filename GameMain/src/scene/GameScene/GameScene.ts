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

        /**
         * map
         */

        /**
         * hero
         */

        /**
         * magic
         */

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