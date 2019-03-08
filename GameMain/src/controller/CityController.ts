class CityController {

    static instance: CityController = null;

    constructor() {
        this.init();
    }

    init() {

    }

    public static getInstance(): CityController {
        if (this.instance === null) {
            this.instance = new CityController();
        }
        return this.instance;
    }
}