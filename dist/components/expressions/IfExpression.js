"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Expression_1 = require("./Expression");
/**
 * The IfExpression allows to execute a statement if the given condition is truthy.
 * Otherwise the else part is taken.
 */
var IfExpression = /** @class */ (function (_super) {
    __extends(IfExpression, _super);
    function IfExpression(condition, _then, _else) {
        var _this = _super.call(this) || this;
        _this.condition = condition;
        _this._then = _then;
        _this._else = _else;
        return _this;
    }
    IfExpression.prototype.getCondition = function () {
        return this.condition;
    };
    IfExpression.prototype.getThenExpression = function () {
        return this._then;
    };
    IfExpression.prototype.getElseExpression = function () {
        return this._else;
    };
    IfExpression.prototype.evaluate = function (visitor) {
        return this.getCondition()
            .evaluate(visitor) ? this.getThenExpression()
            .evaluate(visitor) : this.getElseExpression()
            .evaluate(visitor);
    };
    return IfExpression;
}(Expression_1.Expression));
exports.IfExpression = IfExpression;
//# sourceMappingURL=IfExpression.js.map