"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var d3 = require("d3");
var Label = /** @class */ (function (_super) {
    __extends(Label, _super);
    function Label() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Label.prototype.componentDidMount = function () {
        d3.select(this.ref).data([this.props.node]);
    };
    Label.prototype.render = function () {
        var _this = this;
        return React.createElement("text", { className: "label", ref: function (ref) { return _this.ref = ref; } }, this.props.node.id);
    };
    return Label;
}(React.Component));
var Labels = /** @class */ (function (_super) {
    __extends(Labels, _super);
    function Labels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Labels.prototype.render = function () {
        var labels = this.props.nodes.map(function (node, index) {
            return React.createElement(Label, { key: index, node: node });
        });
        return (React.createElement("g", { className: "labels" }, labels));
    };
    return Labels;
}(React.Component));
exports.default = Labels;
//# sourceMappingURL=Labels.js.map