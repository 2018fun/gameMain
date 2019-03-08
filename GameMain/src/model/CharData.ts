/**
 * 玩家角色
 */
class CharData {
    private _name: string;
    private _index: number;
    private _profession: number;
    private _equip: Array<EquipData>;
    private _faceIndex: number;
    private _bodyIndex: number;
    private _level: number;

    constructor(data) {
        this._name = data.name;
    }

    get index() {
        return this._index;
    }

    set name(input: string) {
        this._name = input;
    }

    get name() {
        return this._name;
    }



}