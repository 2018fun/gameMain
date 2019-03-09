var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var AreaDataMaster = (function () {
    function AreaDataMaster() {
    }
    AreaDataMaster.prototype.getLimit = function () {
        return 0;
    };
    return AreaDataMaster;
}());
__reflect(AreaDataMaster.prototype, "AreaDataMaster", ["IMaster"]);
