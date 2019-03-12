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
/**
 * 连接点
 */
var Connection = (function (_super) {
    __extends(Connection, _super);
    function Connection(connectionData) {
        if (connectionData === void 0) { connectionData = null; }
        var _this = _super.call(this) || this;
        _this._connectionData = connectionData;
        _this.initView();
        return _this;
    }
    Connection.prototype.initView = function () {
        // texture
    };
    Object.defineProperty(Connection.prototype, "type", {
        get: function () {
            return this._connectionData.type;
        },
        enumerable: true,
        configurable: true
    });
    return Connection;
}(egret.Sprite));
__reflect(Connection.prototype, "Connection");
