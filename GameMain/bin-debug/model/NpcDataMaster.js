var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var NpcDataMaster = (function () {
    function NpcDataMaster() {
    }
    NpcDataMaster.prototype.getLimit = function () {
        return 0;
    };
    return NpcDataMaster;
}());
__reflect(NpcDataMaster.prototype, "NpcDataMaster", ["IMaster"]);
