class ConfigManager {

    static instance: ConfigManager = null;

    private areaMaster: AreaDataMaster;
    private buildingMaster: BuildingDataMaster;

    constructor() {
        this.init();
    }

    private configList = [
        "building_json",
        "achievement_json",
        "area_json",
        "equip_json",
        "game_event_json",
        "monster_json",
        "npc_json"


    ];

    private async  init() {
        await RES.loadConfig("resource/config.res.json", "resource/");
        await RES.loadGroup("game_config");

        let building_json = await RES.getRes("building_json");
        let area_json = await RES.getRes("area_json");

        this.buildingMaster = new BuildingDataMaster(building_json.datas);
        // this.areaMaster = new AreaDataMaster();
    }

    public static getInstance(): ConfigManager {
        if (this.instance === null) {
            this.instance = new ConfigManager();
        }
        return this.instance;
    }



    /**
     * 
     */
    private async loadSave() {
        LocalSaveData.getInstance();
    }


}