var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 玩家角色
 */
var CharData = (function () {
    function CharData(data) {
        this._name = data.name;
    }
    Object.defineProperty(CharData.prototype, "index", {
        get: function () {
            return this._index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CharData.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (input) {
            this._name = input;
        },
        enumerable: true,
        configurable: true
    });
    return CharData;
}());
__reflect(CharData.prototype, "CharData");
