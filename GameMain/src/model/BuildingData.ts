/**
 * 建筑数据
 */

class BuildingData {
    constructor(data) {
        this._id = data[0];
        this._name = data[1];
        this._index = data[2];
        for (var i = 3; i < data.length; i++) {
            this._mustExps[i - 3] = data[i];
        }
        this._maxLv = this._mustExps.length - 1;
    }

    public getId(): number {
        return this._id;
    }


    public getMaxLv(): number {
        return this._maxLv;
    }

    public getLvupCost(lv: number): Number {
        return this._mustExps[lv];
    }

    private _id: number;
    private _name: string;
    private _index: number;
    private _mustExps: Array<number> = [];
    private _maxLv: number = 0;

    get name() {
        return this._name;
    }

    get index() {
        return this._index;
    }
}