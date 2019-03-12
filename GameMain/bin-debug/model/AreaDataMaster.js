var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var AreaDataMaster = (function () {
    function AreaDataMaster(datas) {
        this.limit = 0;
        this.limit = datas.length;
        this.datas = new Array();
        for (var i = 0; i < this.limit; i++) {
            this.datas[i] = new AreaData(datas[i]);
        }
    }
    AreaDataMaster.prototype.getData = function (index) {
        return this.datas[index];
    };
    AreaDataMaster.prototype.getLimit = function () {
        return this.limit;
    };
    return AreaDataMaster;
}());
__reflect(AreaDataMaster.prototype, "AreaDataMaster", ["IMaster"]);
