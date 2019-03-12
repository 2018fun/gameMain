var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var StatusManager = (function () {
    function StatusManager() {
        this.init();
    }
    StatusManager.prototype.init = function () {
        if (StatusManager.instance !== null) {
            throw new Error("single instance error");
        }
    };
    StatusManager.getInstance = function () {
        if (this.instance === null) {
            this.instance = new StatusManager();
        }
        return this.instance;
    };
    return StatusManager;
}());
__reflect(StatusManager.prototype, "StatusManager");
