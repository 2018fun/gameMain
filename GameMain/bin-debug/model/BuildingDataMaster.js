var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BuildingDataMaster = (function () {
    function BuildingDataMaster(datas) {
        this.limit = 0;
        this.limit = datas.length;
        this.datas = new Array();
        for (var i = 0; i < this.limit; i++) {
            this.datas[i] = new BuildingData(datas[i]);
        }
    }
    BuildingDataMaster.prototype.getData = function (index) {
        return this.datas[index];
    };
    BuildingDataMaster.prototype.getLimit = function () {
        return this.limit;
    };
    return BuildingDataMaster;
}());
__reflect(BuildingDataMaster.prototype, "BuildingDataMaster", ["IMaster"]);
