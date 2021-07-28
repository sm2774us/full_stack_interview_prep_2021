import React from 'react';
import { CSSTransition } from 'react-transition-group';
import '../css/SlidingPanel.css';


export enum PanelType {
    Top = 1,
    Right,
    Bottom,
    Left,
}

//http://reactcommunity.org/react-transition-group/transition#Transition-prop-onEntering
type Nullable<T> = T | null;
export interface SliderProps {
    type: PanelType;
    size: number;
    panelClassName?: string;
    isOpen: boolean;
    children: Nullable<React.ReactElement>;
    backdropClicked: () => void;
}


const getPanelGlassStyle = (type: PanelType, size: number, hidden: boolean): React.CSSProperties => {
    const horizontal = type === PanelType.Bottom || type === PanelType.Top;
    return {
        width: horizontal ? `${hidden ? '0' : '100'}vw` : `${100 - size}vw`,
        height: horizontal ? `${100 - size}vh` : `${hidden ? '0' : '100'}vh`,
        ...(type === PanelType.Right && { left: 0 }),
        ...(type === PanelType.Top && { bottom: 0 }),
        position: 'inherit',
    };
};

const getPanelStyle = (type: PanelType, size: number): React.CSSProperties => {
    const horizontal = type === PanelType.Bottom || type === PanelType.Top;
    return {
        width: horizontal ? '100vw' : `${size}vw`,
        height: horizontal ? `${size}vh` : '100vh',
        ...(type === PanelType.Right && { right: 0 }),
        ...(type === PanelType.Bottom && { bottom: 0 }),
        position: 'inherit',
        overflow: 'auto',
    };
};


function getNameFromPanelTypeEnum(type: PanelType): string {

    let result = "";
    switch (type) {
        case PanelType.Right:
            result = "right";
            break;
        case PanelType.Left:
            result = "left";
            break;
        case PanelType.Top:
            result = "top";
            break;
        case PanelType.Bottom:
            result = "bottom";
            break;
    }
    return result;
}

const SlidingPanel: React.SFC<SliderProps> = (props) => {

    const glassBefore = props.type === PanelType.Right || props.type === PanelType.Bottom;
    const horizontal = props.type === PanelType.Bottom || props.type === PanelType.Top;
    return (
        <div>
            <div className={`sliding-panel-container ${props.isOpen ? 'active' : ''} 'click-through' `}>
                <div className={`sliding-panel-container ${props.isOpen ? 'active' : ''} 'click-through' `}>
                    <CSSTransition
                        in={props.isOpen}
                        timeout={500}
                        classNames={`panel-container-${getNameFromPanelTypeEnum(props.type)}`}
                        unmountOnExit
                        style={{ display: horizontal ? 'block' : 'flex' }}
                    >
                        <div>
                            {glassBefore && (
                                <div
                                    className="glass"
                                    style={getPanelGlassStyle(props.type, props.size, false)}
                                    onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => { props.backdropClicked(); }}
                                />
                            )}
                            <div className="panel" style={getPanelStyle(props.type, props.size)}>
                                <div className={`panel-content ${props.panelClassName || ''}`}>{props.children}</div>
                            </div>
                            {!glassBefore && (
                                <div
                                    className="glass"
                                    style={getPanelGlassStyle(props.type, props.size, false)}
                                    onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => { props.backdropClicked(); }}
                                />
                            )}
                        </div>
                    </CSSTransition>
                </div>
            </div>
        </div>
    );
}


SlidingPanel.defaultProps = {
    type: PanelType.Left,
    size: 50,
    panelClassName: '',
    isOpen: false,
    children: null,
    backdropClicked: () => null
}

export default SlidingPanel;			