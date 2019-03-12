var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * 游戏开始场景
 */
var TitleScene = (function (_super) {
    __extends(TitleScene, _super);
    function TitleScene() {
        var _this = _super.call(this) || this;
        _this.loadRes();
        return _this;
    }
    TitleScene.prototype.loadRes = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload")];
                    case 2:
                        _a.sent();
                        // let sheet = RES.getRes("titleScene");
                        this.initView();
                        return [2 /*return*/];
                }
            });
        });
    };
    TitleScene.prototype.initView = function () {
        fairygui.UIPackage.addPackage("basic");
        fairygui.UIConfig.defaultFont = "SimSun";
        fairygui.UIConfig.verticalScrollBar = "ui://Basic/ScrollBar_VT";
        fairygui.UIConfig.horizontalScrollBar = "ui://Basic/ScrollBar_HZ";
        fairygui.UIConfig.popupMenu = "ui://Basic/PopupMenu";
        fairygui.UIConfig.buttonSound = "ui://Basic/click";
        this.stage.addChild(fairygui.GRoot.inst.displayObject);
        this._view = fairygui.UIPackage.createObject("Basic", "Main").asCom;
        this._view.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        fairygui.GRoot.inst.addChild(this._view);
        var obj = fairygui.UIPackage.createObject("Basic", "Demo_" + "Grid").asCom;
        var list1 = obj.getChild("list1").asList;
        list1.removeChildrenToPool();
        var testNames = ["苹果手机操作系统", "安卓手机操作系统", "微软手机操作系统", "微软桌面操作系统", "苹果桌面操作系统", "未知操作系统"];
        var testColors = [0xFFFF00, 0xFF0000, 0xFFFFFF, 0x0000FF];
        var cnt = testNames.length;
        for (var i = 0; i < cnt; i++) {
            var item = list1.addItemFromPool().asButton;
            item.getChild("t0").text = "" + (i + 1);
            item.getChild("t1").text = testNames[i];
            item.getChild("t2").asTextField.color = testColors[Math.floor(Math.random() * 4)];
            item.getChild("star").asProgress.value = (Math.floor(Math.random() * 3) + 1) / 3 * 100;
        }
        var list2 = obj.getChild("list2").asList;
        list2.removeChildrenToPool();
        for (var i = 0; i < cnt; i++) {
            var item = list2.addItemFromPool().asButton;
            item.getChild("cb").asButton.selected = false;
            item.getChild("t1").text = testNames[i];
            item.getChild("mc").asMovieClip.playing = i % 2 == 0;
            item.getChild("t3").text = "" + Math.floor(Math.random() * 10000);
        }
        // this.mainPanel = new MainPanel();
        /**
         * 背景
         * 当前角色
         */
        /**
         * 左上角 英雄状态
         */
        /**
         * 右上角 资源状态
         */
        // let itemTexture = sheet.getTexture("itemButton");
        // this.itemButton = new BitmapButton(itemTexture);
        // let charTexture = sheet.getTexture("charButton");
        // this.charButton = new BitmapButton(charTexture);
        // let cityTexture = sheet.getTexture("cityButton");
        // this.cityButton = new BitmapButton(cityTexture);
    };
    return TitleScene;
}(egret.DisplayObjectContainer));
__reflect(TitleScene.prototype, "TitleScene");
