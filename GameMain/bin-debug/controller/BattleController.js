var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BattleController = (function () {
    function BattleController() {
        this.init();
    }
    BattleController.prototype.init = function () {
    };
    BattleController.getInstance = function () {
        if (this.instance === null) {
            this.instance = new BattleController();
        }
        return this.instance;
    };
    BattleController.instance = null;
    return BattleController;
}());
__reflect(BattleController.prototype, "BattleController");
