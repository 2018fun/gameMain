/**
 *
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var AreaData = (function () {
    function AreaData(data) {
        this._name = data.name;
    }
    Object.defineProperty(AreaData.prototype, "level", {
        get: function () {
            return this._level;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AreaData.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (input) {
            this._name = input;
        },
        enumerable: true,
        configurable: true
    });
    return AreaData;
}());
__reflect(AreaData.prototype, "AreaData");
