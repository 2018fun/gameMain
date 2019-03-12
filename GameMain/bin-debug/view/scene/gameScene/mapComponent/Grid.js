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
 * 地图上格子
 */
var Grid = (function (_super) {
    __extends(Grid, _super);
    function Grid() {
        var _this = _super.call(this) || this;
        _this.initView();
        return _this;
    }
    Grid.prototype.initView = function () {
        // texture
    };
    return Grid;
}(egret.Sprite));
__reflect(Grid.prototype, "Grid");
