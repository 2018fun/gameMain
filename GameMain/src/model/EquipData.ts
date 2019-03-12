/**
 * 装备数据
 */
class EquipData {

    constructor(data) {
        this._name = data.name;
        this._index = data.index;
        this._damage = data.damage;
        this._defense = data.defense;
        this._hp = data.hp;
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
    private _damage: number;
    private _defense: number;
    /**
     * 生命值
     */
    private _hp: number;

    get name() {
        return this._name;
    }

    get index() {
        return this._index;
    }
}