var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LocalSaveData = (function () {
    function LocalSaveData() {
        this._isNewPlayer = true;
        this.init();
    }
    LocalSaveData.prototype.init = function () {
        if (LocalSaveData.instance !== null) {
            throw new Error("single instance error");
        }
        var userSave = egret.localStorage.getItem("userSave");
        if (userSave === null || userSave === undefined || userSave === "") {
            this.cardSave = [null];
            for (var i = 0; i < 143; i++) {
                this.cardSave.push(0);
            }
            this.stageSave = [null, 0];
            // this.cardSave = [null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            this.saveData = {
                "charSave": this.stageSave,
                "cardSave": this.cardSave,
                "guide": "0"
            };
            this.saveUserData();
        }
        else {
            this.saveData = JSON.parse(userSave);
            this.stageSave = this.saveData.stageSave;
            this.cardSave = this.saveData.cardSave;
            this._isNewPlayer = this.saveData.guide === "0" ? true : false;
        }
        // localStorage.getItem();
    };
    LocalSaveData.getInstance = function () {
        if (this.instance === null) {
            this.instance = new LocalSaveData();
        }
        return this.instance;
    };
    /**
     *  存储用户数据
     */
    LocalSaveData.prototype.saveUserData = function () {
        this.saveData = {
            "stageSave": this.stageSave,
            "cardSave": this.cardSave,
            "guide": this._isNewPlayer ? "0" : "1"
        };
        egret.localStorage.setItem("userSave", JSON.stringify(this.saveData));
    };
    /***
     * 获取开启的关卡
     */
    LocalSaveData.prototype.getStageOpen = function () {
        return this.stageSave.length - 1;
    };
    /**
     * 图鉴界面开启
     */
    LocalSaveData.prototype.getDataSceneOpen = function () {
        return this.cardSave.length - 1 === 0 ? false : true;
    };
    /**
     * 存储关卡过关
     * @param stageId
     */
    LocalSaveData.prototype.saveStagePass = function (stageId) {
        if (this.stageSave[stageId] < 4) {
            this.stageSave[stageId] += 4;
            // 一共30个关卡
            if (stageId === 1) {
                this.stageSave.push(0);
                this.stageSave.push(0);
                this.stageSave.push(0);
                this.stageSave.push(0);
                this.stageSave.push(0);
            }
            else if (this.stageSave.length < 31) {
                this.stageSave.push(0);
            }
            var newStage = this.getStageOpen();
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
        }
        else {
            return false;
        }
    };
    LocalSaveData.prototype.passGuide = function () {
        this._isNewPlayer = false;
        this.saveUserData();
    };
    /**
     * 存储玩家阅读过的关卡提示
     * @param stageId
     */
    LocalSaveData.prototype.saveStageHintRead = function (stageId) {
        this.stageSave[stageId] += 1;
        this.saveUserData();
    };
    /**
     * 获取单个关卡的状态
     * @param stageId
     */
    LocalSaveData.prototype.getStageStatus = function (stageId) {
        var status = { pass: false, hint: 0 };
        var temp = this.stageSave[stageId] - 4;
        status.pass = temp >= 0 ? true : false;
        status.hint = temp >= 0 ? temp : this.stageSave[stageId];
        return status;
    };
    /**
     * 获取关卡存档
     */
    LocalSaveData.prototype.getStageSave = function () {
        return this.stageSave;
    };
    /**
     * 存储玩家阅读过的卡片提示
     * @param cardId
     */
    LocalSaveData.prototype.saveCardHintRead = function (cardId) {
        if (this.cardSave[cardId] === 0) {
            this.cardSave[cardId] = 1;
            this.saveUserData();
        }
    };
    /**
     * 存储获得到的卡片
     * @param cardId
     */
    LocalSaveData.prototype.saveCardGot = function (cardId) {
        this.cardSave[cardId] = 3;
        this.saveUserData();
    };
    /**
     * 获得卡片状态
     * @param cardId
     */
    LocalSaveData.prototype.getCardStatus = function (cardId) {
        if (this.cardSave.length < cardId) {
        }
        return this.cardSave[cardId];
    };
    /**
     * 声音存储
     * status: "1" playing "0" silence
     */
    LocalSaveData.prototype.saveSoundStatus = function (status) {
        egret.localStorage.setItem("soundPlaying", status);
    };
    LocalSaveData.prototype.getSoundStatus = function () {
        return egret.localStorage.getItem("soundPlaying");
    };
    /**
     * 语言设置
     */
    LocalSaveData.prototype.getLang = function () {
        return egret.localStorage.getItem("lang");
    };
    LocalSaveData.prototype.setLang = function (lang) {
        egret.localStorage.setItem("lang", lang);
    };
    /**
     * 上一次玩的关卡
     */
    LocalSaveData.prototype.getLastPlay = function () {
        var lastPlay = egret.localStorage.getItem("lastPlay");
        if (lastPlay === null || lastPlay === undefined || lastPlay === "") {
            return 1;
        }
        return parseInt(lastPlay);
    };
    LocalSaveData.prototype.saveLastPlay = function (stageId) {
        egret.localStorage.setItem("lastPlay", stageId);
    };
    Object.defineProperty(LocalSaveData.prototype, "isNewPlayer", {
        get: function () {
            return this._isNewPlayer;
        },
        enumerable: true,
        configurable: true
    });
    LocalSaveData.instance = null;
    return LocalSaveData;
}());
__reflect(LocalSaveData.prototype, "LocalSaveData");
