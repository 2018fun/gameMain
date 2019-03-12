/**
 * 战场携带的物品
 */
var ToolEnum;
(function (ToolEnum) {
    var auto = 0;
    /**
     * 回程卷轴
     * 在战斗中，可以回到城市
     */
    ToolEnum.TELEPORT_PAPER = auto++;
    /**
     * 血瓶
     */
    ToolEnum.HEALTH_POTS = auto++;
    /**
     * 魔法
     */
    /**
     * 钥匙
     */
    ToolEnum.KEY = auto++;
    /**
     * PAPERS
     */
    //  export const PAPER = auto++;
    ToolEnum.BOOK = auto++;
})(ToolEnum || (ToolEnum = {}));
