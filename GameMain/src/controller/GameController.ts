class GameController {

    static instance: GameController = null;

    constructor() {
        this.init();
    }

    private areaDataMaster: AreaDataMaster;


    init() {

        this.loadConfig();
        this.loadSave();
        // this.areaDataMaster = new AreaDataMaster();
    }

    public static getInstance(): GameController {
        if (this.instance === null) {
            this.instance = new GameController();
        }
        return this.instance;
    }

    /**
     * cdn 加载
     */
    private async loadConfig() {
        await RES.loadConfig("resource/config.res.json", "resource/");
    }

    /**
     * 
     */
    private async loadSave() {
        LocalSaveData.getInstance();
    }
}