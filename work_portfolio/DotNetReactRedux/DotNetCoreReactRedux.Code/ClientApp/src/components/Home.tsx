import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ForceGraph from './graph/ForceGraph';
import data from "./electronic-genres";
import { Scrollbars } from 'react-custom-scrollbars';
import SlidingPanel, { PanelType } from './slidingpanel/SlidingPanel';
import './css/SlidingPanel.css';
import { IEventMessager } from "./utils/EventMessager";
import { IMessage, ShowInfoInSidePanel } from "./utils/EventMessager";
import { filter, map } from 'rxjs/operators';
import HoverImage from './HoverImage';
import circleLogo from './img/circle.png';
import circleHoverLogo from './img/circleHover.png';


//css
import './css/ForceGraph.css';


//redux
import { ApplicationState } from '../store';
import * as GenreStore from '../store/Genre';



class CustomScrollbars extends React.Component<any> {
    render() {
        return (
            <Scrollbars
                renderThumbHorizontal={props => <div {...props} className="thumb-horizontal" />}
                renderThumbVertical={props => <div {...props} className="thumb-vertical" />}
                renderView={props => <div {...props} className="view" />}>
                {this.props.children}
            </Scrollbars>
        );
    }
}

export interface HomeProps {
    eventMessager: IEventMessager;
}


const initialState = {
    isopen: false,
    selectedNodeText : ''
}


const Home: React.FunctionComponent<HomeProps> = (props) => {

    const dispatch = useDispatch();

    const [currentState, setState] = useState(initialState);
                
    useEffect(() => {

        //TODO : SHould call out to redux to dispatch an action, and should also
        //listen to state changes here
        //https://stackoverflow.com/questions/54002792/should-i-use-one-or-many-useeffect-in-component
        const sub = props.eventMessager.observe()
        .pipe(
            filter((event: IMessage) => event instanceof ShowInfoInSidePanel),
            map((event: IMessage) => event as ShowInfoInSidePanel)
        )
        .subscribe(x => {
            //pass callback to setState to prevent currentState
            //  being a dependency
            setState(
                (currentState) => ({
                    ...currentState,
                    isopen: true,
                    selectedNodeText: x.itemClicked
                })
            );
        });

        return () => {
            sub.unsubscribe();
        }
    }, [props.eventMessager]);


    React.useEffect(() => {
        dispatch(GenreStore.actionCreators.requestGenreInfo(currentState.selectedNodeText));
    }, [currentState.selectedNodeText]);


    const storeState: GenreStore.GenreInfoState = useSelector(
        (state: ApplicationState) => state.genres as GenreStore.GenreInfoState
    );


    return (
        <div>
            <div>
                <SlidingPanel
                    type={PanelType.Left}
                    isOpen={currentState.isopen}
                    size={300}
                    backdropClicked={() => alert("fdfdsfd")}>
                    <div className="slidePanel">
                        <div>
                            <div className="close-button"
                                onClick={() => { setState({ ...currentState, isopen: false, selectedNodeText: '' }); }}>
                                <HoverImage hoverSrc={circleHoverLogo} src={circleLogo} />
                            </div>
                            <Scrollbars
                                autoHeight
                                autoHeightMin={200}
                                autoHeightMax={600}
                                style={{ width: 300 }}>
                                <div className="mainHeader" style={{ color: "orange" }}>{currentState.selectedNodeText}</div>
                                <div className="subHeader">
                                    {storeState.genreInfo.paragraphs.map((para, index) => (
                                        <p key={index}>{para}</p>
                                  ))}
                                </div>
                            </Scrollbars>
                        </div>
                    </div>
                </SlidingPanel>
            </div>
            <div>
                <div className="mainHeader" style={{ color: "orange" }}>Music genre graph</div>
                <div className="subHeader">Explore the graph and click on the nodes to read more about the selected Genre</div>
            </div>
            <div className="graph-holder">
                <Scrollbars className="force-graph-scroll">
                    <ForceGraph
                        width={window.screen.availHeight}
                        height={window.screen.availHeight}
                        eventMessager={props.eventMessager}
                        graph={data} />
                </Scrollbars>
            </div>
        </div>
    );
}

export default Home;
