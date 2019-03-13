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

    /**
     * 增加资源
     * @param resType 资源类型
     * @param amount 资源数量
     */
    public addRes(resType, amount) {
        switch (resType) {
            case ResourceEnum.GOLD:

                break;
        }
        // SaveDataManager.getInstance().saveCommonData("")

    }

    /**
     * 消耗资源
     * @param resType 资源类型
     * @param amount 资源数量
     */
    public costRes(resType, amount) {

    }
}