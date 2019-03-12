var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Progress = (function (_super) {
    __extends(Progress, _super);
    function Progress() {
        var _this = _super.call(this) || this;
        _this.initView();
        return _this;
    }
    Progress.prototype.initView = function () {
    };
    return Progress;
}(egret.Sprite));
__reflect(Progress.prototype, "Progress");
