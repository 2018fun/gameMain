class ResourceController {

    static instance: ResourceController = null;

    constructor() {
        this.init();
    }

    init() {

    }

    public static getInstance(): ResourceController {
        if (this.instance === null) {
            this.instance = new ResourceController();
        }
        return this.instance;
    }

    public earnMoney() {

    }

    public addRes(resType) {
        switch (resType) {
            case ResourceEnum.GOLD:

                break;
        }
        // SaveDataManager.getInstance().saveCommonData("")

    }
}