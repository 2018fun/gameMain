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

    /**
     * 遇到npc
     */
    public meetNPC() {

    }

    /**
     * Letter to npc
     */
    public letterToNPC() {

    }

    // public 
}