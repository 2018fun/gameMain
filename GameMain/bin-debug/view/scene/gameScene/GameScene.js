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
/**
 * 游戏场景
 */
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this) || this;
        _this._index = 0;
        _this.initView();
        return _this;
    }
    GameScene.prototype.initView = function () {
        this.createMap();
        /**
         * map
         */
        /**
         * hero
         */
        /**
         * magic
         */
    };
    GameScene.prototype.createMap = function () {
        GameController.getInstance().generateMap();
    };
    GameScene.prototype.updateView = function () {
    };
    Object.defineProperty(GameScene.prototype, "index", {
        get: function () {
            return 1;
        },
        enumerable: true,
        configurable: true
    });
    GameScene.prototype._start = function () {
    };
    //--------------
    //エンターフレーム
    //--------------	
    GameScene.prototype.play_loop = function (event) {
    };
    //--------------
    //シーンの停止処理：タイマーとめたり、サウンドとめたり、広告とめたりする
    //--------------
    GameScene.prototype._remove = function () {
    };
    //--------------
    //シーンの削除：メモリ開放処理などを行う
    //--------------
    GameScene.prototype._delete = function () {
    };
    //--------------
    //シーンを待機するときに呼ばれる※AddSceneした時
    //--------------
    GameScene.prototype._taiki = function () {
    };
    //--------------
    //シーンが待機から復帰するときに呼ばれる
    //--------------
    GameScene.prototype._fukki = function () {
    };
    //--------------
    //シーンが中断されるときに呼ばれる
    //--------------
    GameScene.prototype._chudan = function () {
    };
    //--------------
    //シーンがアプリ中断からアクティブになるときに呼ばれる
    //--------------
    GameScene.prototype._active = function () {
    };
    return GameScene;
}(egret.DisplayObjectContainer));
__reflect(GameScene.prototype, "GameScene", ["IScene"]);
