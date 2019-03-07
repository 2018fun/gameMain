class BuildingController {

    static instance: BuildingController = null;

    constructor() {
        this.init();
    }

    init() {

    }

    public static getInstance(): BuildingController {
        if (this.instance === null) {
            this.instance = new BuildingController();
        }
        return this.instance;
    }
}