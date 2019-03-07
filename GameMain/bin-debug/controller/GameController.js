var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameController = (function () {
    function GameController() {
        this.init();
    }
    GameController.prototype.init = function () {
        this.areaDataMaster = new AreaDataMaster();
    };
    GameController.getInstance = function () {
        if (this.instance === null) {
            this.instance = new GameController();
        }
        return this.instance;
    };
    GameController.instance = null;
    return GameController;
}());
__reflect(GameController.prototype, "GameController");
