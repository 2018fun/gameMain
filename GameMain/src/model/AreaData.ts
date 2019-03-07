/**
 * 
 */

class AreaData {
    private _name: string;
    private _level: number;

    constructor(data) {
        this._name = data.name;
    }


    get level() {
        return this._level;
    }

    set name(input: string) {
        this._name = input;
    }

    get name() {
        return this._name;
    }

}