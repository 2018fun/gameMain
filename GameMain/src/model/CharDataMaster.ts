class CharDataMaster implements IMaster {

    private limit: number = 0;
    private datas: Array<CharData>;

    constructor(datas: Array<CharData>) {
        this.limit = datas.length;
        this.datas = new Array<CharData>();
        for (let i: number = 0; i < this.limit; i++) {
            this.datas[i] = new CharData(datas[i]);
        }
    }

    public getData(index: number): CharData {
        return this.datas[index];
    }

    public getLimit(): number {
        return this.limit;
    }
}