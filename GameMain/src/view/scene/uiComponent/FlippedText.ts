/**
 * 
 */
class FlippedText extends egret.Bitmap {
    constructor() {
        super();
    }

    initView() {
        let text = new egret.TextField();
        text.cacheAsBitmap = true;
    }

}