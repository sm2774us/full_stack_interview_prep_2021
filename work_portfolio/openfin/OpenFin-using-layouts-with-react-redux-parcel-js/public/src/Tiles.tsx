import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Layouts from "openfin-layouts"

//scss
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../scss/index.scss';

//components
import { Button } from 'react-bootstrap';
import HoverImage from "react-hover-image"
import { Tile } from './Tile';
import { TileInfo } from './common/commonModels';
import dockGrayLogo from '../img/dock16Gray.png';
import dockWhiteLogo from '../img/dock16White.png';
import dockAllGrayLogo from '../img/dock16AllGray.png';
import dockAllWhiteLogo from '../img/dock16AllWhite.png';

//Redux
import { Provider } from 'react-redux'
import { store } from './redux/store';
import { RootState } from './redux/root';
import { connect } from 'react-redux';
import { fetchTilesFromEndpoint } from './redux/tiles';

//images
import loaderLogo from '../img/ajax-loader.gif';


interface TilesProps {
    tileInfos: TileInfo[];
    tileLoadingError: Boolean
}

interface TilesActions {
    fetchTilesFromEndpoint: any;
}

interface TilesState { }

class TilesInner extends React.Component<TilesProps & TilesActions, TilesState> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            (this.props.tileInfos === undefined)
                ? <div className="Loader">
                    <div className="LoaderImage">
                        <span>
                            <img src={loaderLogo} />
                            <br />
                            <span className="Text">Loading</span>
                        </span>
                    </div>
                  </div>
                : 
                <div>
                    <div>
                        <span>
                        <HoverImage className="unDockButton"
                            src={dockGrayLogo}
                            hoverSrc={dockWhiteLogo}
                            onClick={this.handleUndockClick} />
                        </span>
                        &nbsp;&nbsp;
                        <span>
                        <HoverImage className="unDockallButton"
                            src={dockAllGrayLogo}
                            hoverSrc={dockAllWhiteLogo}
                            onClick={this.handleUndockAllClick} />
                        </span>
                    </div>
                    <div id="tileContainer">
                        <ul id="listOfTiles">
                            {
                                this.props.tileInfos.map(d => <Tile tilePair={d.tilePair} tilePrice={d.tilePrice} />)
                            }
                        </ul>
                    </div>
                </div>
        );
    }

    componentDidMount() {
        this.props.fetchTilesFromEndpoint();
    }

    //static getDerivedStateFromProps(nextProps, prevState) {
    //    if (nextProps.blotterInfos !== prevState.blotterInfos) {
    //        return { someState: nextProps.blotterInfos };
    //    }
    //    else return null;
    //}

    //componentDidUpdate(prevProps, prevState) {
    //    if (prevProps.blotterInfos !== this.props.blotterInfos) {
    //        //Perform some operation here
    //        this.setState({
    //            ...this.state,
    //            blotterInfos: this.props.blotterInfos
    //        })

    //    }
    //}


    //NOTE : This method will be deprecated in near future should use above methods
    componentWillReceiveProps = (nextProps) => {
        var wasTileLoadingError = nextProps.tileLoadingError;
        if (wasTileLoadingError) {
            alert("Could not load tiles");
        }
    }

    handleUndockClick = () => {
        Layouts.snapAndDock.undockWindow();
    }

    handleUndockAllClick = () => {
        Layouts.snapAndDock.undockGroup();
    }
}

export const Tiles = connect<TilesProps, TilesActions, RootState>(
    state => ({
        tileInfos: state.tiles.tileInfos,
        tileLoadingError: state.tiles.tileLoadingError
    }),
    {
        fetchTilesFromEndpoint: fetchTilesFromEndpoint,
    }
)(TilesInner);


export const TilesComponent = () => (
    <Provider store={store}>
        <Tiles />
    </Provider>
);
