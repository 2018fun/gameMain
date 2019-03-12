var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var NpcController = (function () {
    function NpcController() {
        this.init();
    }
    NpcController.prototype.init = function () {
    };
    NpcController.getInstance = function () {
        if (this.instance === null) {
            this.instance = new NpcController();
        }
        return this.instance;
    };
    NpcController.instance = null;
    return NpcController;
}());
__reflect(NpcController.prototype, "NpcController");
