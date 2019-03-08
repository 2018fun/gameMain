/**
 * create by tishoy
 * 2018.8.12
 */
class LoadingUI extends egret.Sprite {

    public constructor() {
        super();
        this.initView();
    }

    private loadingBoy: egret.MovieClip;
    private loadingWord: egret.MovieClip;
    private loadingTip: egret.TextField;

    private async initView() {
        this.loadGUI();
        this.createFromGUI()
    }

    private async loadGUI() {
        await RES.loadConfig("resource/loading.res.json", "resource/");
        await RES.loadGroup("loading_ui", 0);
        this.createFromGUI();
    }

    private async createFromGUI() {



        let bg = new egret.Bitmap();

        let texture: egret.Texture = RES.getRes("loading_bg_png");
        bg.texture = texture;
        bg.x = -120;
        bg.y = -120;
        bg.touchEnabled = true;
        this.addChild(bg);

        let loadingBoy_data = RES.getRes("loading_boy_json");
        let loadingBoy_image = RES.getRes("loading_boy_png");
        let mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(loadingBoy_data, loadingBoy_image);
        this.loadingBoy = new egret.MovieClip(mcFactory.generateMovieClipData("runningboy"));
        this.loadingBoy.anchorOffsetX = this.loadingBoy.width / 2;
        this.loadingBoy.anchorOffsetY = this.loadingBoy.height / 2;
        this.loadingBoy.scaleX = 0.52;
        this.loadingBoy.scaleY = 0.52;
        this.loadingBoy.x = 436;
        this.loadingBoy.y = 514;
        this.addChild(this.loadingBoy);


        let loadingWord_data = RES.getRes("loading_word_json");
        let loadingWord_image = RES.getRes("loading_word_png");
        let mcFactory2: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(loadingWord_data, loadingWord_image);
        this.loadingWord = new egret.MovieClip(mcFactory2.generateMovieClipData("word"));
        this.loadingWord.x = 0;
        this.loadingWord.y = 100;
        this.addChild(this.loadingWord);

        this.x = Util.x_fix();
        this.y = (Util.curHeight() - this.height) / 2 + 120;

        let time = new egret.Timer(5000, 1);
        time.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.networkNotConnect, this);
        // this.networkNotConnect();
    }

    private networkNotConnect() {
        this.loadingTip = new egret.TextField();
        this.loadingTip.x = 100;
        this.loadingTip.y = 614;
        this.loadingTip.textColor = 0x000000;
        this.loadingTip.text = "您当前网络状况很差，请联网再试";
        this.addChild(this.loadingTip);
    }


    public onShow() {
        this.loadingBoy.play(-1)
        this.loadingWord.play(-1);
        this.loadingTip.visible = true;
    }


    public onHide() {
        this.loadingBoy.stop()
        this.loadingWord.stop();
        this.loadingTip.visible = false;
    }

    public onProgress(current: number, total: number): void {

    }
}
