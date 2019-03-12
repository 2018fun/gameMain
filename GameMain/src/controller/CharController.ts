class CharController {

    static instance: CharController = null;

    private chars: Array<CharData>;

    private currentChar: CharData;

    constructor() {
        this.init();
    }

    init() {

    }

    public static getInstance(): CharController {
        if (this.instance === null) {
            this.instance = new CharController();
        }
        return this.instance;
    }

    public getChars(): Array<CharData> {
        return this.chars
    }

    public changeChar(id) {
        this.currentChar = this.chars[id];
    }

    public charLevelUp() {
        this.currentChar.setLevelUp();
    }
}