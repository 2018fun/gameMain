/**
 * 声音管理
 * create by tishoy
 * 2018.8.8
 */

class SoundManager {

    private static instance: SoundManager = null;

    private bgm: egret.Sound;

    private bgmChannel: egret.SoundChannel;
    private soundChannel: egret.SoundChannel;

    private bgmPlaying: boolean = false;

    private map: { [key: string]: egret.Sound; };

    constructor() {
        this.init();
    }

    private init(): void {
        if (SoundManager.instance !== null) {
            throw new Error("single instance error");
        }
    }

    public static getInstance(): SoundManager {
        if (this.instance === null) {
            this.instance = new SoundManager();
        }
        return this.instance;
    }

    playBGM() {
        if (GameSetting.getInstance().SoundPlaying && !this.bgmPlaying) {
            this.bgm = RES.getRes(SoundEnum.MAIN1SOUND_1_MP3);
            // sound.play(0, -1);
            this.bgmChannel = this.bgm.play(0, 0);
            this.bgmPlaying = true;
        }
    }



    playSound(sound_res, loop: number = 1) {
        if (GameSetting.getInstance().SoundPlaying) {
            let sound: egret.Sound = RES.getRes(sound_res);
            this.soundChannel = sound.play(0, loop);
        }
    }

    private onPlayOver() {
        // this.map[sound_res] = null;
    }

    public stopBGM(): void {
        if (this.bgmPlaying) {
            this.bgmChannel.stop();
            this.bgmPlaying = false;
        }
        if (this.soundChannel !== undefined) {
            this.soundChannel.stop();
        }
    }
}