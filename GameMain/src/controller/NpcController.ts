class NpcController {

    static instance: NpcController = null;

    constructor() {
        this.init();
    }

    init() {

    }

    public static getInstance(): NpcController {
        if (this.instance === null) {
            this.instance = new NpcController();
        }
        return this.instance;
    }
}