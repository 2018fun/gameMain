var Util;
(function (Util) {
    //--------------------
    //随机数
    //--------------------
    function xGetRandom(nMin, nMax) {
        var ret = Math.floor(Math.random() * (nMax - nMin + 1)) + nMin;
        return ret;
    }
    Util.xGetRandom = xGetRandom;
    Util.TOTAL_STAGES = 30;
    function factor() {
        return egret.MainContext.instance.stage.stageWidth / 640;
    }
    Util.factor = factor;
    function x_fix() {
        return (egret.MainContext.instance.stage.stageWidth - 640) / 2;
    }
    Util.x_fix = x_fix;
    function y_fix() {
        return (egret.MainContext.instance.stage.stageHeight - 1080) / 2;
    }
    Util.y_fix = y_fix;
    function gameStage() {
        return egret.MainContext.instance.stage;
    }
    Util.gameStage = gameStage;
    //当前游戏宽度
    function curWidth() {
        return egret.MainContext.instance.stage.stageWidth;
    }
    Util.curWidth = curWidth;
    //当前游戏宽度
    function curHeight() {
        return egret.MainContext.instance.stage.stageHeight;
    }
    Util.curHeight = curHeight;
    function displayWidth() {
        return 640;
    }
    Util.displayWidth = displayWidth;
    function displayHeight() {
        return 1080;
    }
    Util.displayHeight = displayHeight;
    function scaleMode() {
        return egret.MainContext.instance.stage.scaleMode;
    }
    Util.scaleMode = scaleMode;
    function loopPlay(mc, from, to) {
        if (from === void 0) { from = 1; }
        if (to === void 0) { to = 0; }
        if (to === 0) {
            to = mc.totalFrames;
        }
        if (mc.currentFrame < from || mc.currentFrame >= to) {
            mc.gotoAndStop(from);
        }
        else {
            mc.nextFrame();
        }
    }
    Util.loopPlay = loopPlay;
    function singletonPush(ary, data) {
        if (ary.indexOf(data) === -1) {
            ary.push(data);
        }
    }
    Util.singletonPush = singletonPush;
    function setImageColor(image, color) {
        // 将16进制颜色分割成rgb值
        var spliceColor = function (color) {
            var result = { r: -1, g: -1, b: -1 };
            result.b = color % 256;
            result.g = Math.floor((color / 256)) % 256;
            result.r = Math.floor((color / 256) / 256);
            return result;
        };
        var result = spliceColor(color);
        var colorMatrix = [
            1, 0, 0, 0, 0,
            0, 1, 0, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 0, 1, 0
        ];
        colorMatrix[0] = result.r / 255;
        colorMatrix[6] = result.g / 255;
        colorMatrix[12] = result.b / 255;
        var colorFilter = new egret.ColorMatrixFilter(colorMatrix);
        image.filters = [colorFilter];
    }
    Util.setImageColor = setImageColor;
})(Util || (Util = {}));
