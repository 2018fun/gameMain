/**
 * 资源数据
 */

class ResourceData {
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