class CharController {

    static instance: CharController = null;

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
}