var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameSetting = (function () {
    function GameSetting() {
        this.init();
    }
    GameSetting.prototype.init = function () {
    };
    GameSetting.getInstance = function () {
        if (this.instance === null) {
            this.instance = new GameSetting();
        }
        return this.instance;
    };
    Object.defineProperty(GameSetting.prototype, "SoundPlaying", {
        get: function () {
            if (this._soundPlaying === undefined) {
                var soundPlaying = LocalSaveData.getInstance().getSoundStatus();
                if (soundPlaying === null || soundPlaying === undefined || soundPlaying === "" || soundPlaying === "1") {
                    this.SoundPlaying = true;
                }
                else {
                    this._soundPlaying = soundPlaying === "1" ? true : false;
                }
            }
            return this._soundPlaying;
        },
        set: function (playing) {
            this._soundPlaying = playing;
            if (playing) {
                LocalSaveData.getInstance().saveSoundStatus("1");
                SoundManager.getInstance().playBGM();
                SoundManager.getInstance().playSound(SoundEnum.SELECTSOUND_MP3);
            }
            else {
                LocalSaveData.getInstance().saveSoundStatus("0");
                SoundManager.getInstance().stopBGM();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameSetting.prototype, "EffectPlaying", {
        get: function () {
            return this._effectPlaying;
        },
        set: function (playing) {
            if (playing) {
            }
            else {
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameSetting.prototype, "Lang", {
        get: function () {
            if (this._lang === undefined) {
                var lang = LocalSaveData.getInstance().getLang();
                if (lang === null || lang === undefined || lang === "") {
                    this.Lang = "zh_CN";
                }
                else {
                    this._lang = lang;
                }
            }
            return this._lang;
        },
        set: function (lang) {
            LocalSaveData.getInstance().setLang(lang);
            this._lang = lang;
        },
        enumerable: true,
        configurable: true
    });
    GameSetting.instance = null;
    return GameSetting;
}());
__reflect(GameSetting.prototype, "GameSetting");
