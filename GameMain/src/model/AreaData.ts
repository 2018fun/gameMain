/**
 * 场景数据
 */

class AreaData {
    
    private _name: string;
    private _level: number;

    private _monster: Array<MonsterData>;

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

    get monster() {
        return this._monster;
    }

}