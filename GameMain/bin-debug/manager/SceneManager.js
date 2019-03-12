var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SceneManager = (function () {
    function SceneManager() {
        /**
         * 最上层
         */
        this.loadingLayer = new egret.DisplayObjectContainer();
        /**
         * 漂浮
         */
        this.tipLayer = new egret.DisplayObjectContainer();
        this.guideLayer = new egret.DisplayObjectContainer();
        this.maskLayer = new egret.DisplayObjectContainer();
        /**
         * 弹窗层
         */
        this.popLayer = new egret.DisplayObjectContainer();
        this.sceneLayer = new egret.DisplayObjectContainer();
        this.gameScene = null;
        this.titleScene = null;
        this.charScene = null;
        this.cityScene = null;
        this.itemScene = null;
        this.sceneList = [this.titleScene, this.gameScene, this.charScene, this.cityScene, this.itemScene];
        this.isPopUp = false;
        this.currentScene = null;
    }
    SceneManager.prototype.init = function (egretStage) {
        this.egretStage = egretStage;
        this.loading = new LoadingUI();
        // this.loading.y = -Util.y_fix() + 150;
        // this.initLayer(this.gameLayer);
        this.initLayer(this.sceneLayer);
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
    SceneManager.getInstance = function () {
        if (this.instance === null) {
            this.instance = new SceneManager();
        }
        return this.instance;
    };
    /**
     * 初始化层级 调整适配
     * @param layer
     */
    SceneManager.prototype.initLayer = function (layer) {
        layer.x = (Util.curWidth() - Util.displayWidth()) / 2;
        layer.y = (Util.curHeight() - Util.displayHeight()) / 2;
        this.egretStage.addChild(layer);
    };
    // public getGameLayer(): egret.DisplayObjectContainer {
    //     return this.gameLayer;
    // }
    SceneManager.prototype.getSceneLayer = function () {
        return this.sceneLayer;
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
    SceneManager.prototype.toScene = function (index) {
        if (index < 0 || index >= this.sceneList.length) {
            console.log("scene error");
            return;
        }
        this.showLoading();
        if (this.currentScene !== null) {
            if (this.currentScene.index !== index) {
                this.sceneLayer.removeChildren();
                this.currentScene = null;
            }
        }
        if (this.sceneList[index] === null) {
            switch (index) {
                case 0:
                    this.sceneList[index] = new TitleScene();
                    break;
            }
        }
        this.currentScene = this.sceneList[index];
        this.sceneLayer.addChild(this.currentScene);
        console.log(this.sceneLayer.numChildren);
        this.hideLoading();
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
