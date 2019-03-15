/**
 * create by tishoy
 * 2019.3.14
 * 成就数据
 */
class AchievementDataMaster implements IMaster {

    private limit: number = 0;
    private datas: Array<AchievementData>;

    constructor(datas: Array<Array<any>>) {
        this.limit = datas.length;
        this.datas = new Array<AreaData>();
        for (let i: number = 0; i < this.limit; i++) {
            this.datas[i] = new AchievementData(datas[i]);
        }
    }

    public getData(index: number): AchievementData {
        return this.datas[index];
    }

    public getLimit(): number {
        return this.limit;
    }
}