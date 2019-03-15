class SaveDataManager {

    private static instance: SaveDataManager = null;

    constructor() {
        this.init();
    }

    private init() {
        if (SaveDataManager.instance !== null) {
            throw new Error("single instance error");
        }

        this.loadNewsSave();
        this.loadCharSave();
        this.loadCitySave();
        this.loadItemSave();
        this.loadNpcSave();
        // this.load
    }

    public static getInstance(): SaveDataManager {
        if (this.instance === null) {
            this.instance = new SaveDataManager();
        }
        return this.instance;
    }

    private commonSave;
    private newsSave;
    private charSave;
    private citySave;
    private itemSave;
    private npcSave;

    private loadNewsSave() {

    }

    public loadCharSave() {

    }

    public loadCitySave() {
        /**
         * {
         *  buildingId: level
         * }
         */
        this.citySave = egret.localStorage.getItem("citySave");

    }

    public loadItemSave() {
        this.itemSave = egret.localStorage.getItem("itemSave");
    }

    public loadNpcSave() {

    }

    public loadCommonSave() {
        //资源
        this.commonSave = egret.localStorage.getItem("commonSave");

    }

    public saveUserData() {

    }

    public getUserBuildings() {
        return
    }

    public getResourceList(): Array<number> {
        let list = [];
        let saveData = egret.localStorage.getItem("resource");
        for (var i = 0; i < saveData.length; i++) {
            list.push(Util.toNumber(saveData[i]))
        }
        return list;
    }

}