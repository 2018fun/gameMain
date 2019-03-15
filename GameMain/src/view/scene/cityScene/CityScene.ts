/**
 * 
 */
class CityScene extends egret.DisplayObjectContainer {
    constructor() {
        super();
        this.initView();
    }

    private userBuildings;
    private buildingList;
    private detailPanel;
    // private 建筑实际内容面板


    private initView() {
        // this.userBuildings = SaveDataController.getInstance().getUserBuildings();
        for (var i = 0; i < CityController.getInstance().getBuildings().length; i++) {

        }
    }

    private updateView() {
        // for () {

        // }
    }

}