class CharData {
    private _name: string;

    constructor(data) {
        this._name = data.name;
    }


    set name(input: string) {
        this._name = input;
    }

    get name() {
        return name;
    }

}