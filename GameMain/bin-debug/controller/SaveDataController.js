var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SaveDataController = (function () {
    function SaveDataController() {
        this.init();
    }
    SaveDataController.prototype.init = function () {
        // this.loadCharSave();
        // this.loadItemSave();
        // this.loadNpcSave();
        // this.loadCitySave();
        // this.load
    };
    SaveDataController.getInstance = function () {
        if (this.instance === null) {
            this.instance = new SaveDataController();
        }
        return this.instance;
    };
    SaveDataController.instance = null;
    return SaveDataController;
}());
__reflect(SaveDataController.prototype, "SaveDataController");
