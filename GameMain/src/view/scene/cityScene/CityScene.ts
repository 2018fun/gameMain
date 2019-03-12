/**
 * 
 */
class CityScene extends egret.DisplayObjectContainer {
    constructor() {
        super();
        this.initView();
    }

    private buildingList;
    private detailPanel;
    // private 建筑实际内容面板


    private initView() {
        this.userBuildings = SaveDataController.getInstance().getUserBuildings();
    }

    private updateView() {
        for () {

        }
    }

}