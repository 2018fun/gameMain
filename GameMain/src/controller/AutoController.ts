class AutoController {

    static instance: AutoController = null;

    constructor() {
        this.init();
    }

    init() {

    }

    public static getInstance(): AutoController {
        if (this.instance === null) {
            this.instance = new AutoController();
        }
        return this.instance;
    }
}