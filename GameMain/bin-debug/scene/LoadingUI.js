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
 * create by tishoy
 * 2018.8.12
 */
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.initView();
        return _this;
    }
    LoadingUI.prototype.initView = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.loadGUI();
                this.createFromGUI();
                return [2 /*return*/];
            });
        });
    };
    LoadingUI.prototype.loadGUI = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, RES.loadConfig("resource/loading.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("loading_ui", 0)];
                    case 2:
                        _a.sent();
                        this.createFromGUI();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoadingUI.prototype.createFromGUI = function () {
        return __awaiter(this, void 0, void 0, function () {
            var bg, texture, loadingBoy_data, loadingBoy_image, mcFactory, loadingWord_data, loadingWord_image, mcFactory2, time;
            return __generator(this, function (_a) {
                bg = new egret.Bitmap();
                texture = RES.getRes("loading_bg_png");
                bg.texture = texture;
                bg.x = -120;
                bg.y = -120;
                bg.touchEnabled = true;
                this.addChild(bg);
                loadingBoy_data = RES.getRes("loading_boy_json");
                loadingBoy_image = RES.getRes("loading_boy_png");
                mcFactory = new egret.MovieClipDataFactory(loadingBoy_data, loadingBoy_image);
                this.loadingBoy = new egret.MovieClip(mcFactory.generateMovieClipData("runningboy"));
                this.loadingBoy.anchorOffsetX = this.loadingBoy.width / 2;
                this.loadingBoy.anchorOffsetY = this.loadingBoy.height / 2;
                this.loadingBoy.scaleX = 0.52;
                this.loadingBoy.scaleY = 0.52;
                this.loadingBoy.x = 436;
                this.loadingBoy.y = 514;
                this.addChild(this.loadingBoy);
                loadingWord_data = RES.getRes("loading_word_json");
                loadingWord_image = RES.getRes("loading_word_png");
                mcFactory2 = new egret.MovieClipDataFactory(loadingWord_data, loadingWord_image);
                this.loadingWord = new egret.MovieClip(mcFactory2.generateMovieClipData("word"));
                this.loadingWord.x = 0;
                this.loadingWord.y = 100;
                this.addChild(this.loadingWord);
                this.x = Util.x_fix();
                this.y = (Util.curHeight() - this.height) / 2 + 120;
                time = new egret.Timer(5000, 1);
                time.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.networkNotConnect, this);
                return [2 /*return*/];
            });
        });
    };
    LoadingUI.prototype.networkNotConnect = function () {
        var text = new egret.TextField();
        text.x = 100;
        text.y = 614;
        text.textColor = 0x000000;
        text.text = "您当前网络状况很差，请联网再试";
        this.addChild(text);
    };
    LoadingUI.prototype.onShow = function () {
        this.loadingBoy.play(-1);
        this.loadingWord.play(-1);
    };
    LoadingUI.prototype.onHide = function () {
        this.loadingBoy.stop();
        this.loadingWord.stop();
    };
    LoadingUI.prototype.onProgress = function (current, total) {
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI");
