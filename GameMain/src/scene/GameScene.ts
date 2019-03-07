/**
 * 游戏场景
 */
class GameScene extends egret.DisplayObjectContainer implements IScene {
    constructor() {
        super();
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