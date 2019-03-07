var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * create by tishoy
 * 2018.10.1
 * 为了中国国际化地位，要做个强大的多语言适配
 */
var I18nManager = (function () {
    function I18nManager() {
        this.init();
    }
    I18nManager.prototype.init = function () {
        if (I18nManager.instance !== null) {
            throw new Error("single instance error");
        }
        this.lang = Config.getInstance().i18n;
    };
    I18nManager.getInstance = function () {
        if (this.instance === null) {
            this.instance = new I18nManager();
        }
        return this.instance;
    };
    I18nManager.prototype.getLanguageInGroupByName = function (group, name) {
        return this.lang[GameSetting.getInstance().Lang][group][name];
    };
    I18nManager.prototype.getLanguageByGroup = function (group) {
        return this.lang[GameSetting.getInstance().Lang][group];
    };
    I18nManager.prototype.getLanguageByName = function (name) {
        return this.lang[GameSetting.getInstance().Lang][name];
    };
    Object.defineProperty(I18nManager.prototype, "language", {
        get: function () {
            return this.lang[GameSetting.getInstance().Lang];
        },
        enumerable: true,
        configurable: true
    });
    I18nManager.instance = null;
    return I18nManager;
}());
__reflect(I18nManager.prototype, "I18nManager");
