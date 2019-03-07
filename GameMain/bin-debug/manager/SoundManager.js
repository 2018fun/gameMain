/**
 * 声音管理
 * create by tishoy
 * 2018.8.8
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SoundManager = (function () {
    function SoundManager() {
        this.bgmPlaying = false;
        this.init();
    }
    SoundManager.prototype.init = function () {
        if (SoundManager.instance !== null) {
            throw new Error("single instance error");
        }
    };
    SoundManager.getInstance = function () {
        if (this.instance === null) {
            this.instance = new SoundManager();
        }
        return this.instance;
    };
    SoundManager.prototype.playBGM = function () {
        if (GameSetting.getInstance().SoundPlaying && !this.bgmPlaying) {
            this.bgm = RES.getRes(SoundEnum.MAIN1SOUND_1_MP3);
            // sound.play(0, -1);
            this.bgmChannel = this.bgm.play(0, 0);
            this.bgmPlaying = true;
        }
    };
    SoundManager.prototype.playSound = function (sound_res, loop) {
        if (loop === void 0) { loop = 1; }
        if (GameSetting.getInstance().SoundPlaying) {
            var sound = RES.getRes(sound_res);
            this.soundChannel = sound.play(0, loop);
        }
    };
    SoundManager.prototype.onPlayOver = function () {
        // this.map[sound_res] = null;
    };
    SoundManager.prototype.stopBGM = function () {
        if (this.bgmPlaying) {
            this.bgmChannel.stop();
            this.bgmPlaying = false;
        }
        if (this.soundChannel !== undefined) {
            this.soundChannel.stop();
        }
    };
    SoundManager.instance = null;
    return SoundManager;
}());
__reflect(SoundManager.prototype, "SoundManager");
