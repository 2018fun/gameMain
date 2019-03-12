var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var CharDataMaster = (function () {
    function CharDataMaster(datas) {
        this.limit = 0;
        this.limit = datas.length;
        this.datas = new Array();
        for (var i = 0; i < this.limit; i++) {
            this.datas[i] = new CharData(datas[i]);
        }
    }
    CharDataMaster.prototype.getData = function (index) {
        return this.datas[index];
    };
    CharDataMaster.prototype.getLimit = function () {
        return this.limit;
    };
    return CharDataMaster;
}());
__reflect(CharDataMaster.prototype, "CharDataMaster", ["IMaster"]);
