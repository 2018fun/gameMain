class GameController {

    static instance: GameController = null;

    constructor() {
        this.init();
    }

    private areaDataMaster:AreaDataMaster;


    init() {
        this.areaDataMaster = new AreaDataMaster();
    }

    public static getInstance(): GameController {
        if (this.instance === null) {
            this.instance = new GameController();
        }
        return this.instance;
    }
}