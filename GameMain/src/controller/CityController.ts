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

    public levelUpBulding(id) {
        
    }

    /**
     * 大厅增长金币
     */
    public hallGetMoney() {

    }

    public getBarNPC() {

    }

    public drinkAll() {

    }

    /**
     * 与某位npc 喝酒
     * 
     */
    public drinkWithNPC(id) {

    }

    /**
     * 获取图书馆书籍
     */
    public getLibraryBooks() {

    }

    /**
     * 获取市场正在出售资源
     * 获取市场正在出售物品
     */
    public getMarket() {

    }

    /**
     * 获取邮局储存的物品
     */
    public getPostal() {
        return [];
    }

    /**
     * 锻造装备
     */
    public forgeEquip() {

    }

    public getStore() {
        
    }
}