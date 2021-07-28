import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { interval } from 'rxjs';

//scss
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import '../scss/index.scss';

//images
import chartColoredLogo from '../img/chartColored.png';
import chartGrayLogo from '../img/chartGray.png';
import tableColoredLogo from '../img/tableColored.png';
import tableGrayLogo from '../img/tableGray.png';
import tilesColoredLogo from '../img/tilesColored.png';
import tilesGrayLogo from '../img/tilesGray.png';
import HoverImage from "react-hover-image"

//components
import { showChartWindow } from "./utils/ChartUtils"
import { LayoutService } from "./utils/LayoutUtils"


document.addEventListener("DOMContentLoaded", function () {
    init();
});


function init() {
    console.log("Dom Loaded ", this);

    try {
        fin.desktop.main(function () {
            initWithOpenFin();
        })
    } catch (err) {
        initNoOpenFin();
    }
};

async function initWithOpenFin() {

    const app = await fin.Application.getCurrent();
    const mainWindow = await app.getWindow();
    console.log("mainWindow",mainWindow);

    await LayoutService.getInstance().hydrateWindows(mainWindow);

    interval(1000).subscribe(async x => {
        await LayoutService.getInstance().persistWindows(mainWindow);
    });
}

function initNoOpenFin() {
    alert("OpenFin is not available - you are probably running in a browser.");
}


class Launcher extends React.Component<undefined, undefined> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div id="launcherDiv">
                
                <HoverImage className="launcherImages"
                    src={tableGrayLogo}
                    hoverSrc={tableColoredLogo}
                    onClick={this.handleTableClick} />
                <HoverImage className="launcherImages"
                    src={chartGrayLogo}
                    hoverSrc={chartColoredLogo}
                    onClick={this.handleChartClick} />
                <HoverImage className="launcherImages"
                    src={tilesGrayLogo}
                    hoverSrc={tilesColoredLogo}
                    onClick={this.handleTilesClick} />
            </div>
        );
    }

    handleTableClick = async (e) => {
        await LayoutService.getInstance().showChildWindow("Blotter", '/blotter', 800, 200, true);
    }

    handleChartClick = async (e) => {
        await showChartWindow('BTCEUR');
    }

    handleTilesClick = async (e) => {
        await LayoutService.getInstance().showChildWindow("Tiles", '/tiles', 560, 350, false);
    }
}



export const LauncherComponent = () => (
    <Launcher/>
);
