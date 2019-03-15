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