/**
 * NPC数据
 */

class NpcData {
    constructor(data) {
        this._id = data[0];
        this._name = data[1];
        this._lv = data[2];
        this._profession = data[3];
    }

    private _id: number
    private _name: string;
    private _lv: number;
    private _profession: number;

    public getId(): number {
        return this._id;
    }

    public getName(): string {
        return this._name;
    }

    public getLv(): number {
        return this._lv;
    }

    public getProfession(): number {
        return this._profession;
    }
}