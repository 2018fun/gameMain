class GameSetting {
    static instance: GameSetting = null;

    private _soundPlaying: boolean;
    private _effectPlaying: boolean;
    private _lang: string;

    constructor() {
        this.init();
    }

    init() {

    }

    public static getInstance(): GameSetting {
        if (this.instance === null) {
            this.instance = new GameSetting();
        }
        return this.instance;
    }


    get SoundPlaying() {
        if (this._soundPlaying === undefined) {
            let soundPlaying = LocalSaveData.getInstance().getSoundStatus();
            if (soundPlaying === null || soundPlaying === undefined || soundPlaying === "" || soundPlaying === "1") {
                this.SoundPlaying = true;
            } else {
                this._soundPlaying = soundPlaying === "1" ? true : false;
            }
        }
        return this._soundPlaying
    }

    set SoundPlaying(playing: boolean) {
        this._soundPlaying = playing;
        if (playing) {
            LocalSaveData.getInstance().saveSoundStatus("1");
            SoundManager.getInstance().playBGM();
            SoundManager.getInstance().playSound(SoundEnum.SELECTSOUND_MP3);
        } else {
            LocalSaveData.getInstance().saveSoundStatus("0");
            SoundManager.getInstance().stopBGM();
        }
    }

    get EffectPlaying() {
        return this._effectPlaying;
    }

    set EffectPlaying(playing: boolean) {
        if (playing) {

        } else {

        }
    }

    get Lang() {
        if (this._lang === undefined) {
            let lang = LocalSaveData.getInstance().getLang();
            if (lang === null || lang === undefined || lang === "") {
                this.Lang = "zh_CN"
            } else {
                this._lang = lang;
            }
        }
        return this._lang
    }

    set Lang(lang) {
        LocalSaveData.getInstance().setLang(lang);
        this._lang = lang;
    }
}