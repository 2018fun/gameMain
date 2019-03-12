var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ResourceDataMaster = (function () {
    function ResourceDataMaster(datas) {
        this.limit = 0;
        this.limit = datas.length;
        this.datas = new Array();
        for (var i = 0; i < this.limit; i++) {
            this.datas[i] = new ResourceData(datas[i]);
        }
    }
    ResourceDataMaster.prototype.getData = function (index) {
        return this.datas[index];
    };
    ResourceDataMaster.prototype.getLimit = function () {
        return this.limit;
    };
    return ResourceDataMaster;
}());
__reflect(ResourceDataMaster.prototype, "ResourceDataMaster", ["IMaster"]);
