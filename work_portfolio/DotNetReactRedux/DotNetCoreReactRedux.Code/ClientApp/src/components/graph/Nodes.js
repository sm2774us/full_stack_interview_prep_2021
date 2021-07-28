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
var EventMessager_1 = require("../utils/EventMessager");
var Node = /** @class */ (function (_super) {
    __extends(Node, _super);
    function Node() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Node.prototype.componentDidMount = function () {
        d3.select(this.ref).data([this.props.node]);
    };
    Node.prototype.render = function () {
        var _this = this;
        return (React.createElement("circle", { className: "node", r: 5, fill: this.props.color, ref: function (ref) { return _this.ref = ref; }, onClick: function () {
                _this.props.eventMessager.publish(new EventMessager_1.ShowInfoInSidePanel(_this.props.node.id));
            } },
            ">",
            React.createElement("title", null, this.props.node.id)));
    };
    return Node;
}(React.Component));
var Nodes = /** @class */ (function (_super) {
    __extends(Nodes, _super);
    function Nodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Nodes.prototype.componentDidMount = function () {
        var simulation = this.props.simulation;
        d3.selectAll(".node")
            .call(d3.drag()
            .on("start", onDragStart)
            .on("drag", onDrag)
            .on("end", onDragEnd));
        function onDragStart(d) {
            if (!d3.event.active) {
                simulation.alphaTarget(0.3).restart();
            }
            d.fx = d.x;
            d.fy = d.y;
        }
        function onDrag(d) {
            d.fx = d3.event.x;
            d.fy = d3.event.y;
        }
        function onDragEnd(d) {
            if (!d3.event.active) {
                simulation.alphaTarget(0);
            }
            d.fx = null;
            d.fy = null;
        }
    };
    Nodes.prototype.render = function () {
        var _this = this;
        var nodes = this.props.nodes.map(function (node, index) {
            return React.createElement(Node, { key: index, node: node, color: "blue", eventMessager: _this.props.eventMessager });
        });
        return (React.createElement("g", { className: "nodes" }, nodes));
    };
    return Nodes;
}(React.Component));
exports.default = Nodes;
//# sourceMappingURL=Nodes.js.map