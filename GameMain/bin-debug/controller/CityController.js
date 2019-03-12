var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var CityController = (function () {
    function CityController() {
        this.init();
    }
    CityController.prototype.init = function () {
    };
    CityController.getInstance = function () {
        if (this.instance === null) {
            this.instance = new CityController();
        }
        return this.instance;
    };
    CityController.instance = null;
    return CityController;
}());
__reflect(CityController.prototype, "CityController");
