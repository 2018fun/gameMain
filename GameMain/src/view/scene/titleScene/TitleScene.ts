/**
 * 游戏开始场景
 */
class TitleScene extends egret.DisplayObjectContainer {
    constructor() {
        super();
        this.loadRes();
    }

    private async loadRes() {
        await RES.loadConfig("resource/default.res.json", "resource/");
        await RES.loadGroup("preload");
        // let sheet = RES.getRes("titleScene");
        this.initView();
    }

    private currentCharView;    //当前角色形象
    // private char //当前角色状态

    private itemButton;     //物品项目
    private cityButton;     //城建
    private charButton;     //角色

    private _view: fairygui.GComponent;
    private _backBtn: fairygui.GObject;
    private _demoContainer: fairygui.GComponent;
    private _cc: fairygui.Controller;

    private _demoObjects: any;

    private initView() {

        fairygui.UIPackage.addPackage("basic");
        
        fairygui.UIConfig.defaultFont = "SimSun";
        fairygui.UIConfig.verticalScrollBar = "ui://Basic/ScrollBar_VT";
        fairygui.UIConfig.horizontalScrollBar = "ui://Basic/ScrollBar_HZ";
        fairygui.UIConfig.popupMenu = "ui://Basic/PopupMenu";
        fairygui.UIConfig.buttonSound = "ui://Basic/click";
        
        this.stage.addChild(fairygui.GRoot.inst.displayObject);

        this._view = fairygui.UIPackage.createObject("Basic","Main").asCom;
        this._view.setSize(fairygui.GRoot.inst.width,fairygui.GRoot.inst.height);
        fairygui.GRoot.inst.addChild(this._view);
        
        var obj = fairygui.UIPackage.createObject("Basic","Demo_" + "Grid").asCom;
        var list1:fairygui.GList = obj.getChild("list1").asList;
        list1.removeChildrenToPool();
        var testNames: Array<string> = ["苹果手机操作系统","安卓手机操作系统","微软手机操作系统","微软桌面操作系统","苹果桌面操作系统","未知操作系统"];
        var testColors: Array<number> = [ 0xFFFF00,0xFF0000,0xFFFFFF,0x0000FF ];
        var cnt:number = testNames.length;
        for(var i:number = 0;i < cnt; i++)
        {
            var item:fairygui.GButton = list1.addItemFromPool().asButton;
            item.getChild("t0").text = "" + (i + 1);
            item.getChild("t1").text = testNames[i];
            item.getChild("t2").asTextField.color = testColors[Math.floor(Math.random()*4)];
            item.getChild("star").asProgress.value = (Math.floor(Math.random() * 3)+1) / 3 * 100;
        }

        var list2: fairygui.GList = obj.getChild("list2").asList;
        list2.removeChildrenToPool();
        for(var i: number = 0;i < cnt;i++)
        {
            var item: fairygui.GButton = list2.addItemFromPool().asButton;
            item.getChild("cb").asButton.selected = false;
            item.getChild("t1").text = testNames[i];
            item.getChild("mc").asMovieClip.playing = i % 2 == 0;
            item.getChild("t3").text = "" + Math.floor(Math.random() * 10000)
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
    }
}