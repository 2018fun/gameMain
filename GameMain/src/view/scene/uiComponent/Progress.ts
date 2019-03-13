class Progress extends egret.Sprite {
    constructor() {
        super();
        this.initView();
    }

    private initView() {
        let bg = new egret.Bitmap();
        let progress = new egret.Bitmap();
        progress.scale9Grid = new egret.Rectangle(1, 1, 2, 4);
        // this.addChild(progress);
    }


}