var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameEventDataMaster = (function () {
    function GameEventDataMaster(datas) {
        this.limit = 0;
        this.limit = datas.length;
        this.datas = new Array();
        for (var i = 0; i < this.limit; i++) {
            this.datas[i] = new GameEventData(datas[i]);
        }
    }
    GameEventDataMaster.prototype.getData = function (index) {
        return this.datas[index];
    };
    GameEventDataMaster.prototype.getLimit = function () {
        return this.limit;
    };
    return GameEventDataMaster;
}());
__reflect(GameEventDataMaster.prototype, "GameEventDataMaster", ["IMaster"]);
