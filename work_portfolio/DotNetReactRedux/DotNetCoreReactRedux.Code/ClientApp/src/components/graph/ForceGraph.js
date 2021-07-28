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
var Links_1 = require("./Links");
var Nodes_1 = require("./Nodes");
var Labels_1 = require("./Labels");
require("../css/ForceGraph.css");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.simulation = d3.forceSimulation()
            .force("link", d3.forceLink().id(function (node, i, nodesData) {
            return node.id;
        }))
            .force("charge", d3.forceManyBody().strength(-100))
            .force("center", d3.forceCenter(_this.props.width / 2, _this.props.height / 2))
            .nodes(_this.props.graph.nodes);
        _this.simulation.force("link").links(_this.props.graph.links);
        return _this;
    }
    App.prototype.componentDidMount = function () {
        var node = d3.selectAll(".node");
        var link = d3.selectAll(".link");
        var label = d3.selectAll(".label");
        this.simulation.nodes(this.props.graph.nodes).on("tick", ticked);
        function ticked() {
            link
                .attr("x1", function (d) {
                return d.source.x;
            })
                .attr("y1", function (d) {
                return d.source.y;
            })
                .attr("x2", function (d) {
                return d.target.x;
            })
                .attr("y2", function (d) {
                return d.target.y;
            });
            node
                .attr("cx", function (d) {
                return d.x;
            })
                .attr("cy", function (d) {
                return d.y;
            });
            label
                .attr("x", function (d) {
                return d.x + 5;
            })
                .attr("y", function (d) {
                return d.y + 5;
            });
        }
    };
    App.prototype.render = function () {
        var _a = this.props, width = _a.width, height = _a.height, graph = _a.graph, eventMessager = _a.eventMessager;
        return (React.createElement("svg", { className: "graph-container", width: width, height: height },
            React.createElement(Links_1.default, { links: graph.links }),
            React.createElement(Nodes_1.default, { nodes: graph.nodes, simulation: this.simulation, eventMessager: eventMessager }),
            React.createElement(Labels_1.default, { nodes: graph.nodes })));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=ForceGraph.js.map