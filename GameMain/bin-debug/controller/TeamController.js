var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var TeamController = (function () {
    function TeamController() {
        this.init();
    }
    TeamController.prototype.init = function () {
    };
    TeamController.getInstance = function () {
        if (this.instance === null) {
            this.instance = new TeamController();
        }
        return this.instance;
    };
    TeamController.instance = null;
    return TeamController;
}());
__reflect(TeamController.prototype, "TeamController");
