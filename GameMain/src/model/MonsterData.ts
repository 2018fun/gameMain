/**
 * 怪物数据
 */
class MonsterData {

    private _id: number;
    private _lv: number;
    private _name: string;
    private _damage: number;
    private _defense: number;

    constructor(data) {
        this._id = data[1];
        this._name = data[1];
    }


    public getId() {
        return this._id;
    }

    public getLv() {
        return this._lv;
    }

    public getName() {
        return this._name;
    }

    public getDamage() {
        return this._damage;
    }

    public getDefense() {
        return this._defense;
    }
}