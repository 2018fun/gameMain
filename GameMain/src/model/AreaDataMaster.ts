class AreaDataMaster implements IMaster {

    private limit: number = 0;
    private datas: Array<AreaData>;

    constructor(datas: Array<AreaData>) {
        this.limit = datas.length;
        this.datas = new Array<AreaData>();
        for (let i: number = 0; i < this.limit; i++) {
            this.datas[i] = new AreaData(datas[i]);
        }
    }

    public getData(index: number): AreaData {
        return this.datas[index];
    }

    public getLimit(): number {
        return this.limit;
    }
}