class Npc {
    constructor(data) {
        this._name = data.name;
        this._race = data.race;
    }

    private _name: string;
    private _race: number;

    get name() {
        return this._name;
    }

    get race() {
        return this._race;
    }
}