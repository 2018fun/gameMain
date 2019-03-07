class SceneManager {

    // private static instance: SoundManager;
    static instance: SceneManager = null;

    private loading: LoadingUI;

    private gameLayer: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
    private loadingLayer: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
    private uiLayer: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
    private popLayer: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
    private tipLayer: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();

    private popSheet: egret.SpriteSheet;

    private currentPop: GameScene;
    private clearPop: GameScene;
    private gameOverPop: GameScene;
    private howToPlayPop: GameScene;
    private itemGetPop: GameScene;
    private menuPop: GameScene;
    private stageTitlePop: GameScene;
    private hintPop: GameScene;
    private cardPop: GameScene;
    private noVedioPop: GameScene;
    private collectionHintPop: GameScene;
    private jumpStagePop: GameScene;

    private gameScene: GameScene = null;
    private titleScene: TitleScene = null;
    private dataScene: GameScene = null;
    private rankScene: GameScene = null;

    private itemFullTip: egret.TextField;


    public isPopUp: boolean = false;
    public currentScene = null;

    public egretStage: egret.Stage;


    constructor() {

    }

    public init(egretStage: egret.Stage): void {
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
    }

    public setSheet(): void {
        this.popSheet = RES.getRes("pops_sheet");
    }

    public static getInstance(): SceneManager {
        if (this.instance === null) {
            this.instance = new SceneManager();
        }
        return this.instance;
    }

    private initLayer(layer) {
        layer.x = (Util.curWidth() - Util.displayWidth()) / 2;
        layer.y = (Util.curHeight() - Util.displayHeight()) / 2;
        this.egretStage.addChild(layer);
    }

    public getGameLayer(): egret.DisplayObjectContainer {
        return this.gameLayer;
    }

    public getUILayer(): egret.DisplayObjectContainer {
        return this.uiLayer;
    }

    public getLoadingLayer(): egret.DisplayObjectContainer {
        return this.loadingLayer;
    }

    public getPopLayer(): egret.DisplayObjectContainer {
        return this.popLayer;
    }

    public getTipLayer(): egret.DisplayObjectContainer {
        return this.tipLayer;
    }

    public setCurrentPop(pop) {
        this.currentPop = pop;
    }

    public getCurrentPop() {
        return this.currentPop;
    }

    // public getCurrentStage(): IFKaihiStage {
    //     return this.currentStage;
    // }

    async toRankScene() {
        this.showLoading();
        await RES.loadGroup("data_scene");
        await RES.loadGroup("game_scene");
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
    }

    public toTitleScene(): void {
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
    }

    async toGameScene() {
        this.showLoading();
        await RES.loadGroup("game_scene");
        await RES.loadGroup("tip");
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
    }

    async toDataScene() {
        this.showLoading();
        await RES.loadGroup("data_scene");
        await RES.loadGroup("game_scene");
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
    }

    public showLoading(): void {
        // if (this.loading === null) {
        //     this.loading = new LoadingUI();
        // }
        // if (this.loadingLayer.contains(this.loading)) {
        //     // return;
        // } else {
        this.loadingLayer.addChild(this.loading);
        this.loading.onShow();
        // }
    }

    public hideLoading(toStage = true): void {
        if (this.loading.parent === this.loadingLayer) {
            this.loading.onHide();
            this.loadingLayer.removeChild(this.loading);
        }
        if (toStage) {
            // platform.startRecord();
        }
    }

    public openHowToPlayPop(): void {
        // let howToPlayPop = new HowToPlayPop();
        // this.popLayer.addChild(howToPlayPop);
        // this.isPopUp = true;
        // this.currentPop = howToPlayPop;
    }

    public closeHowToPlayPop(): void {
        this.popLayer.removeChild(this.currentPop);
        this.isPopUp = false
        this.currentPop = null;
    }


    // 获取道具弹窗
    public openItemGetPop(item: string): void {
        if (this.itemGetPop == null) {
            // this.itemGetPop = new ItemGetPop();
            // this.itemGetPop.setIcon(item);
            // PopEffect.addPopUp(this.itemGetPop, true, 0, 0, 2);
            this.isPopUp = true;
            this.currentPop = this.itemGetPop;
        }
    }
    // 关闭道具弹窗
    public closeItemGetPop(): void {
        if (this.itemGetPop != null) {
            // PopEffect.removePopUp(this.itemGetPop, 1);
            // ItemCtrlView.getInstance().updateItems(true);
            this.itemGetPop = null;
            this.isPopUp = false;
            this.currentPop = null;
        }
    }

    public openMenuPop(): void {
        if (this.menuPop == null) {
            // this.menuPop = new MenuPop(this.popSheet);
            this.popLayer.addChild(this.menuPop);
            // PopEffect.addPopUp(this.menuPop, false, 0, 0, 2);
            this.isPopUp = true;
            this.currentPop = this.menuPop;
        }
    }

    public closeMenuPop(): void {
        if (this.menuPop != null) {
            this.popLayer.removeChild(this.menuPop);
            // PopEffect.removePopUp(this.menuPop, 1);
            this.menuPop = null;
            this.currentPop = null;
            this.isPopUp = false;
        }
    }

    /**
     * 打開過關彈窗
     * 打開關閉動畫 淡入淡出
     */
    public openClearPop(stage, card): void {
        this.closeAllPop();
        if (this.clearPop == null) {
            // this.clearPop = new ClearPop(stage, this.popSheet);
            // this.clearPop.setCollections(card);
            // UIManager.getInstance().getPopLayer().addChild(this.clearPop);
            // this.currentPop = this.clearPop;
            // this.isPopUp = true;
            // AdManager.getInstance().showBanner();
        }

    }

    public closeClearPop(): void {
        if (this.clearPop != null) {
            // UIManager.getInstance().getPopLayer().removeChild(this.clearPop);
            // this.clearPop = null;
            // this.currentPop = null;
            // this.isPopUp = false;
        }
    }

    /**
     * 打開失敗彈窗
     */
    public openGameOverPop(stage, card): void {
        this.closeAllPop();
        if (this.gameOverPop == null) {
            // this.gameOverPop = new GameOverPop(stage, this.popSheet);
            // this.gameOverPop.setCollections(card);
            // UIManager.getInstance().getPopLayer().addChild(this.gameOverPop);
            // this.currentPop = this.gameOverPop;
            // this.isPopUp = true;
            // AdManager.getInstance().showBanner();
        }
    }

    public closeGameOverPop(): void {
        if (this.gameOverPop != null) {
            // UIManager.getInstance().getPopLayer().removeChild(this.gameOverPop);
            // this.gameOverPop = null;
            // this.currentPop = null;
            // this.isPopUp = false;
        }
    }

    public openCardPop(cardList, index = 0): void {
        if (this.cardPop == null) {
            // this.cardPop = new CardPop(cardList, index);
            // this.popLayer.addChild(this.cardPop);
        }
    }

    public closeCardPop(): void {
        if (this.cardPop != null) {
            this.popLayer.removeChild(this.cardPop);
            // PopEffect.removePopUp(this.hintPop, 1);
            this.cardPop = null;
        }
    }

    public openCollectionHintPop(detail, status): void {
        if (this.collectionHintPop == null) {
            // this.collectionHintPop = new CollectionHintPop(detail, status);
            // this.popLayer.addChild(this.collectionHintPop);
        }
    }

    public closeCollectionHintPop(): void {
        if (this.collectionHintPop != null) {
            this.popLayer.removeChild(this.collectionHintPop);
            // PopEffect.removePopUp(this.hintPop, 1);
            this.collectionHintPop = null;
        }
    }

    public openJumpStagePop(): void {
        if (this.jumpStagePop == null) {
            // this.jumpStagePop = new JumpStagePop();
            // this.popLayer.addChild(this.jumpStagePop);
        }
    }

    public closeJumpStagePop(): void {
        if (this.jumpStagePop != null) {
            this.popLayer.removeChild(this.jumpStagePop);
            // PopEffect.removePopUp(this.hintPop, 1);
            this.jumpStagePop = null;
        }
    }

    public openHintPop(stageId, pop = false): void {
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
    }

    public closeHintPop(): void {
        if (this.hintPop != null) {
            this.popLayer.removeChild(this.hintPop);
            // PopEffect.removePopUp(this.hintPop, 1);
            this.hintPop = null;
        }
    }

    public openNoVedioPop() {
        if (this.noVedioPop == null) {
            // this.noVedioPop = new NoVedioPop();
            // this.popLayer.addChild(this.noVedioPop);
        }
    }

    public closeNoVedioPop() {
        if (this.noVedioPop != null) {
            this.popLayer.removeChild(this.noVedioPop);
            // PopEffect.removePopUp(this.hintPop, 1);
            this.noVedioPop = null;
        }
    }

    /**
     * 關卡標題彈窗
     */
    public openStageTitlePop(): void {
        if (this.stageTitlePop == null) {
            // this.stageTitlePop = new StageTitlePop(this.popSheet);
            // SceneManager.getInstance().getPopLayer().addChild(this.stageTitlePop);
            // this.currentPop = this.stageTitlePop;
            // this.isPopUp = true;
        }
    }

    public closeStageTitlePop(): void {
        if (this.stageTitlePop != null) {
            SceneManager.getInstance().getPopLayer().removeChild(this.stageTitlePop);
            this.currentPop = null;
            this.stageTitlePop = null;
            this.isPopUp = false;
        }
    }

    public closeAllPop(): void {
        this.closeItemGetPop();
        this.closeMenuPop();
        this.closeClearPop();
        this.closeGameOverPop();
        this.closeMenuPop();
        this.closeHintPop();
    }

    public showTip(): void {

    }

    public showItemFullTip(text): void {
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
        egret.Tween.get(this.itemFullTip).wait(1500).to({ alpha: 0 }, 500).call(() => {
            // this.itemFullTip.visible = false;
        })
    }

}