class ResourceDataMaster implements IMaster {

    private limit: number = 0;
    private datas: Array<ResourceData>;

    constructor(datas: Array<ResourceData>) {
        this.limit = datas.length;
        this.datas = new Array<ResourceData>();
        for (let i: number = 0; i < this.limit; i++) {
            this.datas[i] = new ResourceData(datas[i]);
        }
    }

    public getData(index: number): ResourceData {
        return this.datas[index];
    }

    public getLimit(): number {
        return this.limit;
    }
}