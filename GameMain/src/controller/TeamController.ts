class TeamController {

    static instance: TeamController = null;

    constructor() {
        this.init();
    }

    init() {

    }

    public static getInstance(): TeamController {
        if (this.instance === null) {
            this.instance = new TeamController();
        }
        return this.instance;
    }
}