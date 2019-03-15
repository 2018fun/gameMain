/**
 * create by tishoy
 * 2019.3.13
 * 入口类
 */
class Main extends egret.DisplayObjectContainer {



    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin

            context.onUpdate = () => {

            }
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        this.runGame().catch(e => {
            console.log(e);
        })



    }

    private sceneManager: SceneManager;

    private async runGame() {

        console.log(BuildingEnum.MARKET);
        console.log(BuildingEnum.WAR);
        console.log(BuildingEnum.DA);
        await RES.loadConfig("resource/loading.res.json", "resource/");
        await RES.loadGroup("loading_ui", 0);

        this.sceneManager = SceneManager.getInstance();
        await this.sceneManager.init(this.stage);
        await this.sceneManager.showLoading();

        await RES.loadConfig("resource/default.res.json", "resource/");
        await RES.loadGroup("preload");

        GameController.getInstance();

        this.sceneManager.toScene(SceneEnum.GAME_SCENE);

        

        // let texture = await RES.getRes("button_png")
        // let button = new BitmapButton(texture);
        // this.addChild(button);
        // button.x = 200;
        // button.y = 400;
        this.sceneManager.hideLoading();

        await RES.loadConfig("resource/config.res.json", "resource/");
        await RES.loadGroup("preload");

        ConfigManager.getInstance();

        // await platform.login();
        // const userInfo = await platform.getUserInfo();
        // console.log(userInfo);

    }

}