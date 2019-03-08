/**
 * 装备数据
 */
class EquipData {

    constructor(data) {
        this._name = data.name;
        this._index = data._index;
    }

    private _name: string;
    /**
     * 
     */
    private _index: number;
    /**
     * 
     */
    private _type: number;
    private damage: number;


    get name() {
        return this._name;
    }

    get index() {
        return this._index;
    }
}