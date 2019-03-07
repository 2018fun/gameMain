var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Config = (function () {
    function Config() {
        this.init();
    }
    Config.prototype.init = function () {
        if (Config.instance !== null) {
            throw new Error("single instance error");
        }
    };
    Config.getInstance = function () {
        if (this.instance === null) {
            this.instance = new Config();
        }
        return this.instance;
    };
    Object.defineProperty(Config.prototype, "i18n", {
        get: function () {
            if (this._i18n === undefined) {
                this._i18n = RES.getRes("i18n_json");
            }
            return this._i18n;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "select_json", {
        get: function () {
            if (this._select_json === undefined) {
                this._select_json = RES.getRes("select_json");
            }
            return this._select_json;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "card_tip", {
        get: function () {
            if (this._card_tip === undefined) {
                this._card_tip = RES.getRes("card_tip_json");
            }
            return this._card_tip;
        },
        enumerable: true,
        configurable: true
    });
    Config.instance = null;
    return Config;
}());
__reflect(Config.prototype, "Config");
