/**
 * create by tishoy
 * 2019.3.13
 * 资源控制类
 */
class ResourceController {

    static instance: ResourceController = null;

    constructor() {
        this.init();
    }

    // RMB, GOLD WOOD ORE MERCURY CRYSTAL SULFUR GEM
    private resourceList = [];

    init() {
        this.resourceList = SaveDataManager.getInstance().getResourceList();
    }

    public static getInstance(): ResourceController {
        if (this.instance === null) {
            this.instance = new ResourceController();
        }
        return this.instance;
    }

    public getResStatus() {
        return this.resourceList;
    }

    public getRes(resType) {
        return this.resourceList[resType];
    }

    public earnMoney() {

    }

    /**
     * 增加资源
     * @param resType 资源类型
     * @param amount 资源数量
     */
    public addRes(resType, amount): boolean {
        this.resourceList[resType] += amount;
        switch (resType) {
            case ResourceEnum.GOLD:

                break;
        }
        // SaveDataManager.getInstance().saveCommonData("")
        return true
    }

    /**
     * 消耗资源
     * @param resType 资源类型
     * @param amount 资源数量
     */
    public costRes(resType, amount): boolean {
        if (this.resourceList[resType] < amount) {
            return false
        }
        this.resourceList[resType] -= amount;
        return true;
    }
}