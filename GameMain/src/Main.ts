//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

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
        console.log(BuildingEnum.BAR);
        console.log(BuildingEnum.DA);
        await RES.loadConfig("resource/loading.res.json", "resource/");
        await RES.loadGroup("loading_ui", 0);

        this.sceneManager = SceneManager.getInstance();
        await this.sceneManager.init(this.stage);
        await this.sceneManager.showLoading();

        GameController.getInstance();

        this.sceneManager.toScene(SceneEnum.TITLE_SCENE);

        await RES.loadConfig("resource/default.res.json", "resource/");
        await RES.loadGroup("preload");

        // let texture = await RES.getRes("button_png")
        // let button = new BitmapButton(texture);
        // this.addChild(button);
        // button.x = 200;
        // button.y = 400;
        this.sceneManager.hideLoading();

        var texture = new egret.Texture();

        //创建 Bitmap

        await RES.loadConfig("resource/default.res.json", "resource/");
        await RES.loadGroup("preload");


        //创建 ScrollView
        var scrollView: egret.ScrollView = new egret.ScrollView();
        //设置滚动内容
        scrollView.setContent(this);
        //设置滚动区域宽高
        scrollView.width = 100;
        scrollView.height = 100;
        this.addChild(scrollView);

        // await platform.login();
        // const userInfo = await platform.getUserInfo();
        // console.log(userInfo);

    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

}