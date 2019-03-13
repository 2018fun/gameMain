/**
 * Create by tishoy
 * 2019.3.13
 * 
 * 多个格子组成道路
 */
class Road extends egret.Sprite {
    constructor(length) {
        super();
        this._length = length;
        this.initView();
    }

    private _length: number;

    private initView() {
        let grid: Grid;
        for (var i = 0; i < this._length; i++) {
            grid = new Grid();
            grid.y = 50 * i;
            this.addChild(grid);
        }
        // texture
    }

    get height() {
        return (this._length + 1) * 50;
    }

    get length() {
        return this._length;
    }
}