class NpcDataMaster implements IMaster {

    private limit: number = 0;
    private datas: Array<NpcData>;

    constructor(datas: Array<NpcData>) {
        this.limit = datas.length;
        this.datas = new Array<NpcData>();
        for (let i: number = 0; i < this.limit; i++) {
            this.datas[i] = new NpcData(datas[i]);
        }
    }

    public getData(index: number): NpcData {
        return this.datas[index];
    }

    public getLimit(): number {
        return this.limit;
    }
}