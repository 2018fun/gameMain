/**
 * NPC数据
 */

class NpcData {
    constructor(data) {
        this._name = data.name;
        this._race = data.race;
    }

    private _name: string;
    private _race: number;
    private _profession: number;

    get name(): string {
        return this._name;
    }

    get race(): number {
        return this._race;
    }

    get profession(): number {
        return this._profession;
    }
}