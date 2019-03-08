class BuildingDataMaster implements IMaster {

    private limit: number = 0;
    private datas: Array<BuildingData>;

    constructor(datas: Array<BuildingData>) {
        this.limit = datas.length;
        this.datas = new Array<BuildingData>();
        for (let i: number = 0; i < this.limit; i++) {
            this.datas[i] = new BuildingData(datas[i]);
        }
    }

    public getData(index: number): BuildingData {
        return this.datas[index];
    }

    public getLimit(): number {
        return this.limit;
    }
}