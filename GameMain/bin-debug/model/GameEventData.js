/**
 * 游戏事件
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameEventData = (function () {
    function GameEventData(data) {
        this._name = data.name;
        this._index = data._index;
    }
    Object.defineProperty(GameEventData.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameEventData.prototype, "index", {
        get: function () {
            return this._index;
        },
        enumerable: true,
        configurable: true
    });
    return GameEventData;
}());
__reflect(GameEventData.prototype, "GameEventData");
