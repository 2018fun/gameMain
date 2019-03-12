/**
 * 建筑数据
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BuildingData = (function () {
    function BuildingData(data) {
        this._name = data.name;
        this._index = data._index;
    }
    Object.defineProperty(BuildingData.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BuildingData.prototype, "index", {
        get: function () {
            return this._index;
        },
        enumerable: true,
        configurable: true
    });
    return BuildingData;
}());
__reflect(BuildingData.prototype, "BuildingData");
