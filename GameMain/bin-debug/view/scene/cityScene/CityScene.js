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
 *
 */
var CityScene = (function (_super) {
    __extends(CityScene, _super);
    function CityScene() {
        var _this = _super.call(this) || this;
        _this.initView();
        return _this;
    }
    // private 建筑实际内容面板
    CityScene.prototype.initView = function () {
    };
    return CityScene;
}(egret.DisplayObjectContainer));
__reflect(CityScene.prototype, "CityScene");
