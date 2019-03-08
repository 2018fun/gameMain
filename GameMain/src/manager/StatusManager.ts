class StatusManager {
    private static instance: StatusManager;

    constructor() {
        this.init();
    }

    private init(): void {
        if (StatusManager.instance !== null) {
            throw new Error("single instance error");
        }
    }

    
    public static getInstance(): StatusManager {
        if (this.instance === null) {
            this.instance = new StatusManager();
        }
        return this.instance;
    }
}