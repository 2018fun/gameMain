class BattleController {

    static instance: BattleController = null;

    constructor() {
        this.init();
    }

    init() {

    }

    public static getInstance(): BattleController {
        if (this.instance === null) {
            this.instance = new BattleController();
        }
        return this.instance;
    }
}