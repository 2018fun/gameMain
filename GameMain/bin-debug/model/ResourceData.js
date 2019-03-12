/**
 * 资源数据
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ResourceData = (function () {
    function ResourceData(data) {
        this._name = data.name;
        this._index = data._index;
    }
    Object.defineProperty(ResourceData.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResourceData.prototype, "index", {
        get: function () {
            return this._index;
        },
        enumerable: true,
        configurable: true
    });
    return ResourceData;
}());
__reflect(ResourceData.prototype, "ResourceData");
