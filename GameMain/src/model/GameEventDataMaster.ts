class GameEventDataMaster implements IMaster {

    private limit: number = 0;
    private datas: Array<GameEventData>;

    constructor(datas: Array<GameEventData>) {
        this.limit = datas.length;
        this.datas = new Array<GameEventData>();
        for (let i: number = 0; i < this.limit; i++) {
            this.datas[i] = new GameEventData(datas[i]);
        }
    }

    public getData(index: number): GameEventData {
        return this.datas[index];
    }

    public getLimit(): number {
        return this.limit;
    }
}