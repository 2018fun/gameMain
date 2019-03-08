class MonsterDataMaster implements IMaster {

    private limit: number = 0;
    private datas: Array<MonsterData>;

    constructor(datas: Array<MonsterData>) {
        this.limit = datas.length;
        this.datas = new Array<MonsterData>();
        for (let i: number = 0; i < this.limit; i++) {
            this.datas[i] = new MonsterData(datas[i]);
        }
    }

    public getData(index: number): MonsterData {
        return this.datas[index];
    }

    public getLimit(): number {
        return this.limit;
    }
}