class Config {

    private static instance: Config = null;

    private _i18n;
    private _select_json;
    private _card_tip;
    constructor() {
        this.init();
    }

    private init(): void {
        if (Config.instance !== null) {
            throw new Error("single instance error");
        }
    }

    public static getInstance(): Config {
        if (this.instance === null) {
            this.instance = new Config();
        }
        return this.instance;
    }

    public get i18n() {
        if (this._i18n === undefined) {
            this._i18n = RES.getRes("i18n_json");
        }
        return this._i18n;
    }

    public get select_json() {
        if (this._select_json === undefined) {
            this._select_json = RES.getRes("select_json");
        }
        return this._select_json
    }

    public get card_tip() {
        if (this._card_tip === undefined) {
            this._card_tip = RES.getRes("card_tip_json");
        }
        return this._card_tip;
    }
}