class ConfigDataController {

    static instance: ConfigDataController = null;

    private areaMaster: AreaDataMaster;

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

        for (var i = 0; i < this.configList.length; i++) {
            
            for (var key in config_json) {
                
            }
        }
        let area_json = await RES.getRes(this.configList[i]);
        for () {

        }
        this.areaMaster = new AreaDataMaster();
    }

    public static getInstance(): ConfigDataController {
        if (this.instance === null) {
            this.instance = new ConfigDataController();
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