var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 装备数据
 */
var EquipData = (function () {
    function EquipData(data) {
        this._name = data.name;
        this._index = data._index;
    }
    Object.defineProperty(EquipData.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EquipData.prototype, "index", {
        get: function () {
            return this._index;
        },
        enumerable: true,
        configurable: true
    });
    return EquipData;
}());
__reflect(EquipData.prototype, "EquipData");
