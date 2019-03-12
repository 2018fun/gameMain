/**
 * NPC数据
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var NpcData = (function () {
    function NpcData(data) {
        this._name = data.name;
        this._race = data.race;
    }
    Object.defineProperty(NpcData.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NpcData.prototype, "race", {
        get: function () {
            return this._race;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NpcData.prototype, "profession", {
        get: function () {
            return this._profession;
        },
        enumerable: true,
        configurable: true
    });
    return NpcData;
}());
__reflect(NpcData.prototype, "NpcData");
