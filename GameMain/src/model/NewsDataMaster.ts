class NewsDataMaster implements IMaster {

    private limit: number = 0;
    private datas: Array<NewsData>;

    constructor(datas: Array<NewsData>) {
        this.limit = datas.length;
        this.datas = new Array<NewsData>();
        for (let i: number = 0; i < this.limit; i++) {
            this.datas[i] = new NewsData(datas[i]);
        }
    }

    public getData(index: number): NewsData {
        return this.datas[index];
    }

    public getLimit(): number {
        return this.limit;
    }
}