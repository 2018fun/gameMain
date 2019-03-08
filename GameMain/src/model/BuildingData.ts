/**
 * 建筑数据
 */

class BuildingData {
    constructor(data) {
        this._name = data.name;
        this._index = data._index;
    }

    private _name: string;
    private _index: number;

    get name() {
        return this._name;
    }

    get index() {
        return this._index;
    }
}