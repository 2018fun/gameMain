var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 怪物数据
 */
var MonsterData = (function () {
    function MonsterData(data) {
        this._name = data.name;
    }
    return MonsterData;
}());
__reflect(MonsterData.prototype, "MonsterData");
