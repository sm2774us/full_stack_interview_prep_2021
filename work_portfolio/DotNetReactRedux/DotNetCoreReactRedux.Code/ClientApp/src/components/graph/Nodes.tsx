﻿import * as React from "react";
import * as d3 from "d3";
import { d3Types } from "./GraphTypes";
import { IEventMessager } from "../utils/EventMessager";
import { ShowInfoInSidePanel } from "../utils/EventMessager";

class Node extends React.Component<{ node: d3Types.d3Node, color: string, eventMessager: IEventMessager }, {}> {
    ref!: SVGCircleElement;

    componentDidMount() {
        d3.select(this.ref).data([this.props.node]);
    }

    render() {
        return (
            <circle className="node" r={5} fill={this.props.color}
                ref={(ref: SVGCircleElement) => this.ref = ref}
                onClick={() => {
                    this.props.eventMessager.publish(new ShowInfoInSidePanel(this.props.node.id));
                }}>>
                <title>{this.props.node.id}</title>
            </circle>
        );
    }
}

export default class Nodes extends React.Component<{ nodes: d3Types.d3Node[], simulation: any, eventMessager: IEventMessager }, {}> {
    componentDidMount() {
        const simulation = this.props.simulation;
        d3.selectAll<any,any>(".node")
            .call(d3.drag()
                .on("start", onDragStart)
                .on("drag", onDrag)
                .on("end", onDragEnd));

        function onDragStart(d: any) {
            if (!d3.event.active) {
                simulation.alphaTarget(0.3).restart();
            }
            d.fx = d.x;
            d.fy = d.y;
        }

        function onDrag(d: any) {
            d.fx = d3.event.x;
            d.fy = d3.event.y;
        }

        function onDragEnd(d: any) {
            if (!d3.event.active) {
                simulation.alphaTarget(0);
            }
            d.fx = null;
            d.fy = null;
        }
    }

    render() {
        const nodes = this.props.nodes.map((node: d3Types.d3Node, index: number) => {
            return <Node key={index} node={node} color="blue" eventMessager={this.props.eventMessager} />;
        });

        return (
            <g className="nodes">
                {nodes}
            </g>
        );
    }
}