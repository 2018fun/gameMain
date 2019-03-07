var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Npc = (function () {
    function Npc(data) {
        this._name = data.name;
        this._race = data.race;
    }
    Object.defineProperty(Npc.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Npc.prototype, "race", {
        get: function () {
            return this._race;
        },
        enumerable: true,
        configurable: true
    });
    return Npc;
}());
__reflect(Npc.prototype, "Npc");
