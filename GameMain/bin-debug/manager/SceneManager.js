var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
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
var SceneManager = (function () {
    function SceneManager() {
        this.gameLayer = new egret.DisplayObjectContainer();
        this.loadingLayer = new egret.DisplayObjectContainer();
        this.uiLayer = new egret.DisplayObjectContainer();
        this.popLayer = new egret.DisplayObjectContainer();
        this.tipLayer = new egret.DisplayObjectContainer();
        this.gameScene = null;
        this.titleScene = null;
        this.dataScene = null;
        this.rankScene = null;
        this.isPopUp = false;
        this.currentScene = null;
    }
    SceneManager.prototype.init = function (egretStage) {
        this.egretStage = egretStage;
        this.loading = new LoadingUI();
        // this.loading.y = -Util.y_fix() + 150;
        this.initLayer(this.gameLayer);
        this.initLayer(this.uiLayer);
        this.egretStage.addChild(this.popLayer);
        this.egretStage.addChild(this.tipLayer);
        this.egretStage.addChild(this.loadingLayer);
        if (this.egretStage.scaleMode === egret.StageScaleMode.FIXED_WIDTH) {
            // this.gameLayerMask = new egret.Shape();
            // this.gameLayerMask.graphics.beginFill(0x000000, 1);
            // this.gameLayerMask.graphics.drawRect(this.gameLayer.x, this.gameLayer.y, Util.displayWidth(), Util.displayHeight());
            // this.gameLayerMask.graphics.endFill();
            // this.egretStage.addChild(this.gameLayerMask);
            // this.gameLayer.mask = this.gameLayerMask;
        }
    };
    SceneManager.prototype.setSheet = function () {
        this.popSheet = RES.getRes("pops_sheet");
    };
    SceneManager.getInstance = function () {
        if (this.instance === null) {
            this.instance = new SceneManager();
        }
        return this.instance;
    };
    SceneManager.prototype.initLayer = function (layer) {
        layer.x = (Util.curWidth() - Util.displayWidth()) / 2;
        layer.y = (Util.curHeight() - Util.displayHeight()) / 2;
        this.egretStage.addChild(layer);
    };
    SceneManager.prototype.getGameLayer = function () {
        return this.gameLayer;
    };
    SceneManager.prototype.getUILayer = function () {
        return this.uiLayer;
    };
    SceneManager.prototype.getLoadingLayer = function () {
        return this.loadingLayer;
    };
    SceneManager.prototype.getPopLayer = function () {
        return this.popLayer;
    };
    SceneManager.prototype.getTipLayer = function () {
        return this.tipLayer;
    };
    SceneManager.prototype.setCurrentPop = function (pop) {
        this.currentPop = pop;
    };
    SceneManager.prototype.getCurrentPop = function () {
        return this.currentPop;
    };
    // public getCurrentStage(): IFKaihiStage {
    //     return this.currentStage;
    // }
    SceneManager.prototype.toRankScene = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.showLoading();
                        return [4 /*yield*/, RES.loadGroup("data_scene")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("game_scene")];
                    case 2:
                        _a.sent();
                        if (this.currentScene !== null) {
                            if (this.currentScene.parent === this.gameLayer) {
                                this.gameLayer.removeChild(this.currentScene);
                            }
                            if (this.currentScene !== this.rankScene) {
                                this.uiLayer.removeChildren();
                            }
                            // this.gameScene = null;
                            // this.dataScene = null;
                            this.currentScene = null;
                        }
                        if (this.rankScene === null) {
                            // this.rankScene = new RankScene(this.egretStage)
                        }
                        this.currentScene = this.rankScene;
                        this.gameLayer.addChild(this.currentScene);
                        this.hideLoading(false);
                        return [2 /*return*/];
                }
            });
        });
    };
    SceneManager.prototype.toTitleScene = function () {
        this.showLoading();
        if (this.currentScene !== null) {
            // if (this.currentScene.parent === this.gameLayer) {
            //     this.gameLayer.removeChild(this.currentScene);
            // }
            this.gameLayer.removeChildren();
            if (this.currentScene !== this.titleScene) {
                this.uiLayer.removeChildren();
            }
            // this.gameScene = null;
            // this.dataScene = null;
        }
        if (this.titleScene === null) {
            // this.titleScene = new TitleScene(this.egretStage)
        }
        this.currentScene = this.titleScene;
        this.gameLayer.addChild(this.currentScene);
        this.hideLoading(false);
    };
    SceneManager.prototype.toGameScene = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.showLoading();
                        return [4 /*yield*/, RES.loadGroup("game_scene")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("tip")];
                    case 2:
                        _a.sent();
                        if (this.currentScene !== null) {
                            // if (this.currentScene.parent === this.gameLayer) {
                            //     this.gameLayer.removeChild(this.currentScene);
                            // }
                            if (this.currentScene !== this.gameScene) {
                                this.gameLayer.removeChildren();
                                this.uiLayer.removeChildren();
                            }
                            // this.titleScene = null;
                            // this.dataScene = null;
                        }
                        // this.gameScene = await new GameScene(this.egretStage);
                        this.currentScene = this.gameScene;
                        this.currentScene.setGameStage();
                        this.gameLayer.addChild(this.currentScene);
                        return [2 /*return*/];
                }
            });
        });
    };
    SceneManager.prototype.toDataScene = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.showLoading();
                        return [4 /*yield*/, RES.loadGroup("data_scene")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("game_scene")];
                    case 2:
                        _a.sent();
                        if (this.currentScene !== null) {
                            // if (this.currentScene.parent === this.gameLayer) {
                            //     this.gameLayer.removeChild(this.currentScene);
                            // }
                            this.gameLayer.removeChildren();
                            if (this.currentScene !== this.dataScene) {
                                this.uiLayer.removeChildren();
                            }
                            // this.gameScene = null;
                            // this.titleScene = null;
                            this.currentScene = null;
                        }
                        if (this.dataScene === null) {
                            // this.dataScene = new DataScene(this.egretStage);
                        }
                        this.currentScene = null;
                        // this.dataScene.setGameStage();
                        this.currentScene = this.dataScene;
                        this.gameLayer.addChild(this.currentScene);
                        this.hideLoading(false);
                        return [2 /*return*/];
                }
            });
        });
    };
    SceneManager.prototype.showLoading = function () {
        // if (this.loading === null) {
        //     this.loading = new LoadingUI();
        // }
        // if (this.loadingLayer.contains(this.loading)) {
        //     // return;
        // } else {
        this.loadingLayer.addChild(this.loading);
        this.loading.onShow();
        // }
    };
    SceneManager.prototype.hideLoading = function (toStage) {
        if (toStage === void 0) { toStage = true; }
        if (this.loading.parent === this.loadingLayer) {
            this.loading.onHide();
            this.loadingLayer.removeChild(this.loading);
        }
        if (toStage) {
            // platform.startRecord();
        }
    };
    SceneManager.prototype.openHowToPlayPop = function () {
        // let howToPlayPop = new HowToPlayPop();
        // this.popLayer.addChild(howToPlayPop);
        // this.isPopUp = true;
        // this.currentPop = howToPlayPop;
    };
    SceneManager.prototype.closeHowToPlayPop = function () {
        this.popLayer.removeChild(this.currentPop);
        this.isPopUp = false;
        this.currentPop = null;
    };
    // 获取道具弹窗
    SceneManager.prototype.openItemGetPop = function (item) {
        if (this.itemGetPop == null) {
            // this.itemGetPop = new ItemGetPop();
            // this.itemGetPop.setIcon(item);
            // PopEffect.addPopUp(this.itemGetPop, true, 0, 0, 2);
            this.isPopUp = true;
            this.currentPop = this.itemGetPop;
        }
    };
    // 关闭道具弹窗
    SceneManager.prototype.closeItemGetPop = function () {
        if (this.itemGetPop != null) {
            // PopEffect.removePopUp(this.itemGetPop, 1);
            // ItemCtrlView.getInstance().updateItems(true);
            this.itemGetPop = null;
            this.isPopUp = false;
            this.currentPop = null;
        }
    };
    SceneManager.prototype.openMenuPop = function () {
        if (this.menuPop == null) {
            // this.menuPop = new MenuPop(this.popSheet);
            this.popLayer.addChild(this.menuPop);
            // PopEffect.addPopUp(this.menuPop, false, 0, 0, 2);
            this.isPopUp = true;
            this.currentPop = this.menuPop;
        }
    };
    SceneManager.prototype.closeMenuPop = function () {
        if (this.menuPop != null) {
            this.popLayer.removeChild(this.menuPop);
            // PopEffect.removePopUp(this.menuPop, 1);
            this.menuPop = null;
            this.currentPop = null;
            this.isPopUp = false;
        }
    };
    /**
     * 打開過關彈窗
     * 打開關閉動畫 淡入淡出
     */
    SceneManager.prototype.openClearPop = function (stage, card) {
        this.closeAllPop();
        if (this.clearPop == null) {
            // this.clearPop = new ClearPop(stage, this.popSheet);
            // this.clearPop.setCollections(card);
            // UIManager.getInstance().getPopLayer().addChild(this.clearPop);
            // this.currentPop = this.clearPop;
            // this.isPopUp = true;
            // AdManager.getInstance().showBanner();
        }
    };
    SceneManager.prototype.closeClearPop = function () {
        if (this.clearPop != null) {
            // UIManager.getInstance().getPopLayer().removeChild(this.clearPop);
            // this.clearPop = null;
            // this.currentPop = null;
            // this.isPopUp = false;
        }
    };
    /**
     * 打開失敗彈窗
     */
    SceneManager.prototype.openGameOverPop = function (stage, card) {
        this.closeAllPop();
        if (this.gameOverPop == null) {
            // this.gameOverPop = new GameOverPop(stage, this.popSheet);
            // this.gameOverPop.setCollections(card);
            // UIManager.getInstance().getPopLayer().addChild(this.gameOverPop);
            // this.currentPop = this.gameOverPop;
            // this.isPopUp = true;
            // AdManager.getInstance().showBanner();
        }
    };
    SceneManager.prototype.closeGameOverPop = function () {
        if (this.gameOverPop != null) {
            // UIManager.getInstance().getPopLayer().removeChild(this.gameOverPop);
            // this.gameOverPop = null;
            // this.currentPop = null;
            // this.isPopUp = false;
        }
    };
    SceneManager.prototype.openCardPop = function (cardList, index) {
        if (index === void 0) { index = 0; }
        if (this.cardPop == null) {
            // this.cardPop = new CardPop(cardList, index);
            // this.popLayer.addChild(this.cardPop);
        }
    };
    SceneManager.prototype.closeCardPop = function () {
        if (this.cardPop != null) {
            this.popLayer.removeChild(this.cardPop);
            // PopEffect.removePopUp(this.hintPop, 1);
            this.cardPop = null;
        }
    };
    SceneManager.prototype.openCollectionHintPop = function (detail, status) {
        if (this.collectionHintPop == null) {
            // this.collectionHintPop = new CollectionHintPop(detail, status);
            // this.popLayer.addChild(this.collectionHintPop);
        }
    };
    SceneManager.prototype.closeCollectionHintPop = function () {
        if (this.collectionHintPop != null) {
            this.popLayer.removeChild(this.collectionHintPop);
            // PopEffect.removePopUp(this.hintPop, 1);
            this.collectionHintPop = null;
        }
    };
    SceneManager.prototype.openJumpStagePop = function () {
        if (this.jumpStagePop == null) {
            // this.jumpStagePop = new JumpStagePop();
            // this.popLayer.addChild(this.jumpStagePop);
        }
    };
    SceneManager.prototype.closeJumpStagePop = function () {
        if (this.jumpStagePop != null) {
            this.popLayer.removeChild(this.jumpStagePop);
            // PopEffect.removePopUp(this.hintPop, 1);
            this.jumpStagePop = null;
        }
    };
    SceneManager.prototype.openHintPop = function (stageId, pop) {
        if (pop === void 0) { pop = false; }
        if (this.hintPop == null) {
            // this.hintPop = new HintPop(stageId);
            // this.popLayer.addChild(this.hintPop);
            // if (pop) {
            //     PopEffect.addPopUp(this.hintPop, true, 0, 0, 2);
            // } else {
            //     this.popLayer.addChild(this.hintPop);
            // }
            // PopEffect.addPopUp(this.hintPop, true, 0, 0, 2);
            // this.currentPop = this.hintPop;
        }
    };
    SceneManager.prototype.closeHintPop = function () {
        if (this.hintPop != null) {
            this.popLayer.removeChild(this.hintPop);
            // PopEffect.removePopUp(this.hintPop, 1);
            this.hintPop = null;
        }
    };
    SceneManager.prototype.openNoVedioPop = function () {
        if (this.noVedioPop == null) {
            // this.noVedioPop = new NoVedioPop();
            // this.popLayer.addChild(this.noVedioPop);
        }
    };
    SceneManager.prototype.closeNoVedioPop = function () {
        if (this.noVedioPop != null) {
            this.popLayer.removeChild(this.noVedioPop);
            // PopEffect.removePopUp(this.hintPop, 1);
            this.noVedioPop = null;
        }
    };
    /**
     * 關卡標題彈窗
     */
    SceneManager.prototype.openStageTitlePop = function () {
        if (this.stageTitlePop == null) {
            // this.stageTitlePop = new StageTitlePop(this.popSheet);
            // SceneManager.getInstance().getPopLayer().addChild(this.stageTitlePop);
            // this.currentPop = this.stageTitlePop;
            // this.isPopUp = true;
        }
    };
    SceneManager.prototype.closeStageTitlePop = function () {
        if (this.stageTitlePop != null) {
            SceneManager.getInstance().getPopLayer().removeChild(this.stageTitlePop);
            this.currentPop = null;
            this.stageTitlePop = null;
            this.isPopUp = false;
        }
    };
    SceneManager.prototype.closeAllPop = function () {
        this.closeItemGetPop();
        this.closeMenuPop();
        this.closeClearPop();
        this.closeGameOverPop();
        this.closeMenuPop();
        this.closeHintPop();
    };
    SceneManager.prototype.showTip = function () {
    };
    SceneManager.prototype.showItemFullTip = function (text) {
        if (this.itemFullTip === undefined) {
            this.itemFullTip = new egret.TextField();
            this.itemFullTip.text = text;
            this.itemFullTip.alpha = 0;
            this.itemFullTip.x = Util.curWidth() / 2;
            this.itemFullTip.y = Util.curHeight() / 2;
            this.itemFullTip.anchorOffsetX = this.itemFullTip.width / 2;
            this.itemFullTip.anchorOffsetY = this.itemFullTip.height / 2;
            this.tipLayer.addChild(this.itemFullTip);
        }
        if (this.itemFullTip.alpha > 0) {
            return;
        }
        this.itemFullTip.alpha = 1;
        egret.Tween.get(this.itemFullTip).wait(1500).to({ alpha: 0 }, 500).call(function () {
            // this.itemFullTip.visible = false;
        });
    };
    // private static instance: SoundManager;
    SceneManager.instance = null;
    return SceneManager;
}());
__reflect(SceneManager.prototype, "SceneManager");
