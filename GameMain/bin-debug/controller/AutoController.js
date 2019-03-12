var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var AutoController = (function () {
    function AutoController() {
        this.init();
    }
    AutoController.prototype.init = function () {
    };
    AutoController.getInstance = function () {
        if (this.instance === null) {
            this.instance = new AutoController();
        }
        return this.instance;
    };
    AutoController.instance = null;
    return AutoController;
}());
__reflect(AutoController.prototype, "AutoController");
