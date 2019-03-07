var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BuildingController = (function () {
    function BuildingController() {
        this.init();
    }
    BuildingController.prototype.init = function () {
    };
    BuildingController.getInstance = function () {
        if (this.instance === null) {
            this.instance = new BuildingController();
        }
        return this.instance;
    };
    BuildingController.instance = null;
    return BuildingController;
}());
__reflect(BuildingController.prototype, "BuildingController");
