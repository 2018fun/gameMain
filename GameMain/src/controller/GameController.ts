class GameController {

    static instance: GameController = null;

    constructor() {
        this.init();
    }



    init() {

        // this.areaDataMaster = new AreaDataMaster();
    }

    public static getInstance(): GameController {
        if (this.instance === null) {
            this.instance = new GameController();
        }
        return this.instance;
    }

     /**
     * 
     * 地图长度 10 个connection
     * 每个road 5-10的长度
     */

    public generateMap() {
        let mapData = {
            connections: [],
            roads: []
        };
        for (var i = 0; i < 10; i++) {
            // 生成 connection
            let connection = new Connection();
            mapData.connections.push()
            if (i === 10) {
                break
            }
            // 生成road
            if (i < 5) {
                Util.xGetRandom(4, 5)
            } else if (i < 7) {
                Util.xGetRandom(5, 7)
            } else if (i < 8) {
                Util.xGetRandom(7, 8)
            } else if (i < 10) {
                Util.xGetRandom(8, 10)
            }


        }
        return mapData;

    }
}