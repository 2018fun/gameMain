var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameController = (function () {
    function GameController() {
        this.init();
    }
    GameController.prototype.init = function () {
        // this.areaDataMaster = new AreaDataMaster();
    };
    GameController.getInstance = function () {
        if (this.instance === null) {
            this.instance = new GameController();
        }
        return this.instance;
    };
    /**
    *
    * 地图长度 10 个connection
    * 每个road 5-10的长度
    */
    GameController.prototype.generateMap = function () {
        var mapData = {
            connections: [],
            roads: []
        };
        for (var i = 0; i < 10; i++) {
            // 生成 connection
            var connection = new Connection();
            mapData.connections.push();
            if (i === 10) {
                break;
            }
            // 生成road
            if (i < 5) {
                Util.xGetRandom(4, 5);
            }
            else if (i < 7) {
                Util.xGetRandom(5, 7);
            }
            else if (i < 8) {
                Util.xGetRandom(7, 8);
            }
            else if (i < 10) {
                Util.xGetRandom(8, 10);
            }
        }
        return mapData;
    };
    GameController.instance = null;
    return GameController;
}());
__reflect(GameController.prototype, "GameController");
