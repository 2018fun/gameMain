class EquipDataMaster implements IMaster {

    private limit: number = 0;
    private datas: Array<EquipData>;

    constructor(datas: Array<EquipData>) {
        this.limit = datas.length;
        this.datas = new Array<EquipData>();
        for (let i: number = 0; i < this.limit; i++) {
            this.datas[i] = new EquipData(datas[i]);
        }
    }

    public getData(index: number): EquipData {
        return this.datas[index];
    }

    public getLimit(): number {
        return this.limit;
    }
}