class SaveDataController {

    static instance: SaveDataController = null;

    constructor() {
        this.init();
    }

    init() {
        // this.loadCharSave();
        // this.loadItemSave();
        // this.loadNpcSave();
        // this.loadCitySave();
        // this.load
    }

    public static getInstance(): SaveDataController {
        if (this.instance === null) {
            this.instance = new SaveDataController();
        }
        return this.instance;
    }
}