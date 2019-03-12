/**
 *
 */
var PaperTypeEnum;
(function (PaperTypeEnum) {
    var auto = 0;
    PaperTypeEnum.NO_WRITE = auto++; //白纸
    PaperTypeEnum.MAGIC_SCROLL = auto++; //魔法卷轴
    PaperTypeEnum.RECIPE = auto++; //合成书
    PaperTypeEnum.TREASURE_MAP = auto++; //宝藏地图
    PaperTypeEnum.TOWN_PORTAL = auto++; //回程卷轴
})(PaperTypeEnum || (PaperTypeEnum = {}));
