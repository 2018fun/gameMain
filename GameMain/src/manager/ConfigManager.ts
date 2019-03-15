class ConfigManager {

    static instance: ConfigManager = null;

    private areaMaster: AreaDataMaster;
    private buildingMaster: BuildingDataMaster;
    private equipMaster: EquipDataMaster;
    private newsMaster: NewsDataMaster;
    private monsterMaster: MonsterDataMaster;
    private npcMaster: NpcDataMaster;
    private achievement: AchievementData

    constructor() {
        this.init();
    }

    private configList = [
        "building_json",
        "achievement_json",
        "area_json",
        "equip_json",
        "news_json",
        "monster_json",
        "npc_json"


    ];

    private async  init() {
        await RES.loadConfig("resource/config.res.json", "resource/");
        await RES.loadGroup("game_config");
        console.log(await RES.getRes("building_json"));

        let building_json = await RES.getRes("building_json");
        let area_json = await RES.getRes("area_json");
        let equip_json = await RES.getRes("equip_json");
        let achievement_json = await RES.getRes("achievement_json");
        let news_json = await RES.getRes("news_json");
        let npc_json = await RES.getRes("npc_json");

        console.log(building_json.datas);

        this.buildingMaster = new BuildingDataMaster(building_json.datas);
        this.areaMaster = new AreaDataMaster(area_json.datas);
        this.equipMaster = new EquipDataMaster(equip_json.datas);
        this.achievement = new AchievementDataMaster(achievement_json.datas);
        this.newsMaster = new NewsDataMaster(news_json.datas);
        this.monsterMaster = new MonsterDataMaster(news_json.datas);
        this.npcMaster = new NpcDataMaster(npc_json.datas);
        // this.areaMaster = new AreaDataMaster();


        console.log(this.buildingMaster)
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