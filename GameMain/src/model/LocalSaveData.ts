class LocalSaveData {

    private static instance: LocalSaveData = null;

    /**
     * 
     */
    private charSave;
    private saveData;
    private stageSave;
    private cardSave;
    private _isNewPlayer = true;
    private gameEventSave;

    constructor() {
        this.init();
    }


    private init(): void {
        if (LocalSaveData.instance !== null) {
            throw new Error("single instance error");
        }
        let userSave = egret.localStorage.getItem("userSave");

        if (userSave === null || userSave === undefined || userSave === "") {
            this.cardSave = [null];
            for (var i = 0; i < 143; i++) {
                this.cardSave.push(0);
            }
            this.stageSave = [null, 0]
            // this.cardSave = [null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            this.saveData = {
                "charSave": this.stageSave,
                "cardSave": this.cardSave,
                "guide": "0"
            }
            this.saveUserData();
        } else {
            this.saveData = JSON.parse(userSave);
            this.stageSave = this.saveData.stageSave;
            this.cardSave = this.saveData.cardSave;
            this._isNewPlayer = this.saveData.guide === "0" ? true : false;
        }
        // localStorage.getItem();

    }

    public static getInstance(): LocalSaveData {
        if (this.instance === null) {
            this.instance = new LocalSaveData();
        }
        return this.instance;
    }

    /**
     *  存储用户数据
     */
    private saveUserData() {
        this.saveData = {
            "stageSave": this.stageSave,
            "cardSave": this.cardSave,
            "guide": this._isNewPlayer ? "0" : "1"
        }
        egret.localStorage.setItem("userSave", JSON.stringify(this.saveData));
    }

    /***
     * 获取开启的关卡
     */
    public getStageOpen() {
        return this.stageSave.length - 1;
    }

    /**
     * 图鉴界面开启
     */
    public getDataSceneOpen() {
        return this.cardSave.length - 1 === 0 ? false : true;
    }

    /**
     * 存储关卡过关
     * @param stageId 
     */
    public saveStagePass(stageId): boolean {
        if (this.stageSave[stageId] < 4) {
            this.stageSave[stageId] += 4;
            // 一共30个关卡
            if (stageId === 1) {
                this.stageSave.push(0);
                this.stageSave.push(0);
                this.stageSave.push(0);
                this.stageSave.push(0);
                this.stageSave.push(0);
            } else if (this.stageSave.length < 31) {
                this.stageSave.push(0);
            }
            let newStage = this.getStageOpen();
            // for (let i = this.cardSave.length; i < this.cardConfig.length; i++) {
                // if (this.cardConfig[i]['stage'] > newStage) {
                //     break;
                // } else if (this.cardConfig[i]['stage'] === newStage) {
                //     this.cardSave.push(0);
                // } else {
                //     // 补齐之前关卡结束遗漏的0
                //     this.cardSave.push(0);
                // }
            // }
            this.saveUserData();
            return true;
        } else {
            return false;
        }
    }

    public passGuide() {
        this._isNewPlayer = false;
        this.saveUserData();
    }

    /**
     * 存储玩家阅读过的关卡提示
     * @param stageId 
     */
    public saveStageHintRead(stageId) {
        this.stageSave[stageId] += 1;
        this.saveUserData();
    }

    /**
     * 获取单个关卡的状态
     * @param stageId 
     */
    public getStageStatus(stageId) {
        let status = { pass: false, hint: 0 }
        let temp = this.stageSave[stageId] - 4;
        status.pass = temp >= 0 ? true : false;
        status.hint = temp >= 0 ? temp : this.stageSave[stageId];
        return status;
    }

    /**
     * 获取关卡存档
     */
    public getStageSave() {
        return this.stageSave;
    }

    /**
     * 存储玩家阅读过的卡片提示
     * @param cardId 
     */
    public saveCardHintRead(cardId) {
        if (this.cardSave[cardId] === 0) {
            this.cardSave[cardId] = 1;
            this.saveUserData();
        }
    }

    /**
     * 存储获得到的卡片
     * @param cardId 
     */
    public saveCardGot(cardId) {
        this.cardSave[cardId] = 3;
        this.saveUserData();
    }

    /**
     * 获得卡片状态
     * @param cardId 
     */
    public getCardStatus(cardId) {
        if (this.cardSave.length < cardId) {
        }
        return this.cardSave[cardId];
    }


    /**
     * 声音存储
     * status: "1" playing "0" silence
     */
    public saveSoundStatus(status) {
        egret.localStorage.setItem("soundPlaying", status);
    }

    public getSoundStatus() {
        return egret.localStorage.getItem("soundPlaying");
    }

    /**
     * 语言设置
     */
    public getLang() {
        return egret.localStorage.getItem("lang")
    }

    public setLang(lang) {
        egret.localStorage.setItem("lang", lang);
    }
    /**
     * 上一次玩的关卡
     */
    public getLastPlay() {
        let lastPlay = egret.localStorage.getItem("lastPlay");
        if (lastPlay === null || lastPlay === undefined || lastPlay === "") {
            return 1;
        }
        return parseInt(lastPlay);
    }

    public saveLastPlay(stageId) {
        egret.localStorage.setItem("lastPlay", stageId);
    }

    public get isNewPlayer() {
        return this._isNewPlayer;
    }
}