var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var CharController = (function () {
    function CharController() {
        this.init();
    }
    CharController.prototype.init = function () {
    };
    CharController.getInstance = function () {
        if (this.instance === null) {
            this.instance = new CharController();
        }
        return this.instance;
    };
    CharController.prototype.getChars = function () {
        return this.chars;
    };
    CharController.instance = null;
    return CharController;
}());
__reflect(CharController.prototype, "CharController");
