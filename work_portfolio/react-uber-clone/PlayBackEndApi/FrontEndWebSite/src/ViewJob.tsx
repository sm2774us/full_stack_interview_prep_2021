import * as React from "react";
import * as ReactDOM from "react-dom";
import * as _ from "lodash";
import Measure from 'react-measure'
import { RatingDialog } from "./components/RatingDialog";
import { YesNoDialog } from "./components/YesNoDialog";
import { OkDialog } from "./components/OkDialog";
import { AcceptList } from "./components/AcceptList";
import 'bootstrap/dist/css/bootstrap.css';
import {
    Well,
    Grid,
    Row,
    Col,
    ButtonInput,
    ButtonGroup,
    Button,
    Modal,
    Popover,
    Tooltip,
    OverlayTrigger
} from "react-bootstrap";
import { AuthService } from "./services/AuthService";
import { JobService } from "./services/JobService";
import { JobStreamService } from "./services/JobStreamService";
import { PositionService } from "./services/PositionService";
import { Position } from "./domain/Position";
import { PositionMarker } from "./domain/PositionMarker";
import { hashHistory } from 'react-router';
import { withGoogleMap, GoogleMap, Marker, OverlayView } from "react-google-maps";

const STYLES = {
    overlayView: {
        background: `white`,
        border: `1px solid #ccc`,
        padding: 15,
    }
}


const GetPixelPositionOffset = (width, height) => {
    return { x: -(width / 2), y: -(height / 2) };
}



const ViewJobGoogleMap = withGoogleMap(props => (

    <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={16}
        defaultCenter={{ lat: 50.8202949, lng: -0.1406958 }}
        onClick={props.onMapClick}>
        {props.markers.map((marker, index) => (
            <OverlayView
                key={marker.key}
                mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                position={marker.position}
                getPixelPositionOffset={GetPixelPositionOffset}>
                <div style={STYLES.overlayView}>
                    <img src={marker.icon} />
                    <strong>{marker.key}</strong>
                </div>
            </OverlayView>
        ))}
    </GoogleMap>
));


export interface ViewJobState {
    markers: Array<PositionMarker>;
    okDialogOpen: boolean;
    okDialogKey: number;
    okDialogHeaderText: string;
    okDialogBodyText: string;
    dimensions: {
        width: number,
        height: number
    },
    currentPosition: Position;
    isJobAccepted: boolean;
    finalActionHasBeenClicked: boolean;
}

type DoneCallback = (jdata: any, textStatus: any, jqXHR: any) => void


export class ViewJob extends React.Component<undefined, ViewJobState> {

    private _authService: AuthService;
    private _jobService: JobService;
    private _jobStreamService: JobStreamService;
    private _positionService: PositionService;
    private _subscription: any; 
    private _currentJobUUID: any;

    constructor(props: any) {
        super(props);
        this._authService = props.route.authService;
        this._jobStreamService = props.route.jobStreamService;
        this._jobService = props.route.jobService;
        this._positionService = props.route.positionService;
        
        if (!this._authService.isAuthenticated()) {
            hashHistory.push('/');
        }

        let savedMarkers: Array<PositionMarker> = new Array<PositionMarker>();
        if (this._positionService.hasJobPositions()) {
            savedMarkers = this._positionService.userJobPositions();
        }

        this.state = {
            markers: savedMarkers,
            okDialogHeaderText: '',
            okDialogBodyText: '',
            okDialogOpen: false,
            okDialogKey: 0,
            dimensions: { width: -1, height: -1 },
            currentPosition: this._authService.isDriver() ? null :
                this._positionService.currentPosition(),
            isJobAccepted: false,
            finalActionHasBeenClicked: false
        };
    }

    componentWillMount() {
        var self = this;
        this._subscription =
            this._jobStreamService.getJobStream()
            .retry()
            .where(function (x, idx, obs) {
                return self.shouldShowMarkerForJob(x.detail);
            })
            .subscribe(
                jobArgs => {

                    console.log('RX saw onJobChanged');
                    console.log('RX x = ', jobArgs.detail);

                    this._jobService.clearUserIssuedJob();
                    this._jobService.storeUserIssuedJob(jobArgs.detail);
                    this.addMarkerForJob(jobArgs.detail);
                },
                error => {
                    console.log('RX saw ERROR');
                    console.log('RX error = ', error);
                },
                () => {
                    console.log('RX saw COMPLETE');
                }
            );
    }

    componentWillUnmount() {
        this._subscription.dispose();
        this._positionService.storeUserJobPositions(this.state.markers);
    }

    render() {

        const adjustedwidth = this.state.dimensions.width;

        return (
            <Well className="outer-well">
                <Grid>
                    <Row className="show-grid">
                        <Col xs={10} md={6}>
                            <h4>CURRENT JOB</h4>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={10} md={6}>
                            <AcceptList
                                markers={_.filter(this.state.markers, { isDriverIcon: true })}
                                currentUserIsDriver={this._authService.isDriver()}
                                clickCallback={this.handleMarkerClick}
                            />
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={10} md={6}>
                            <Measure
                                bounds
                                onResize={(contentRect) => {
                                    this.setState({ dimensions: contentRect.bounds })
                                }}>
                                {({ measureRef }) =>
                                    <div ref={measureRef}>
                                        <ViewJobGoogleMap
                                            containerElement={
                                                <div style={{
                                                    position: 'relative',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    width: { adjustedwidth },
                                                    height: 600,
                                                    justifyContent: 'flex-end',
                                                    alignItems: 'center',
                                                    marginTop: 20,
                                                    marginLeft: 0,
                                                    marginRight: 0,
                                                    marginBottom: 20
                                                }} />
                                            }
                                            mapElement={
                                                <div style={{
                                                    position: 'relative',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    width: { adjustedwidth },
                                                    height: 600,
                                                    marginTop: 20,
                                                    marginLeft: 0,
                                                    marginRight: 0,
                                                    marginBottom: 20
                                                }} />
                                            }
                                            markers={this.state.markers}
                                            onMapClick={this.handleMapClick}
                                        />
                                    </div>
                                }
                            </Measure>
                        </Col>
                    </Row>

                    {this.state.isJobAccepted === true ?
                        <Row className="show-grid">
                            <span>
                                <RatingDialog
                                    theId="viewJobCompleteBtn"
                                    headerText="Rate your driver/passenger"
                                    okCallBack={this.ratingsDialogOkCallBack}
                                    actionPerformed={this.state.finalActionHasBeenClicked} />

                                {!(this._authService.isDriver() === true) ?

                                    <YesNoDialog
                                        theId="viewJobCancelBtn"
                                        launchButtonText="Cancel"
                                        actionPerformed={this.state.finalActionHasBeenClicked} 
                                        yesCallBack={this.jobCancelledCallBack}
                                        noCallBack={this.jobNotCancelledCallBack}
                                        headerText="Cancel the job" />
                                    : 
                                    null
                                }

                                <OkDialog
                                    open={this.state.okDialogOpen}
                                    okCallBack={this.okDialogCallBack}
                                    headerText={this.state.okDialogHeaderText}
                                    bodyText={this.state.okDialogBodyText}
                                    key={this.state.okDialogKey} />
                            </span>
                        </Row> :
                        null
                    }
                </Grid>
            </Well>
        );
    }

    handleMapClick = (event) => {

        let currentUser = this._authService.user();
        let isDriver = this._authService.isDriver();
        let matchedMarker = _.find(this.state.markers, { 'email': currentUser.email });
        let newPosition = new Position(event.latLng.lat(), event.latLng.lng());
        let currentJob = this._jobService.currentJob();
        this._positionService.clearUserPosition();
        this._positionService.storeUserPosition(newPosition);

        if (matchedMarker != undefined) {
            let newMarkersList = this.state.markers;
            _.remove(newMarkersList, function (n) {
                return n.email === matchedMarker.email;
            });
            matchedMarker.position = newPosition;
            newMarkersList.push(matchedMarker);
            const newState = Object.assign({}, this.state, {
                currentPosition: newPosition,
                markers: newMarkersList
            })
            this.setState(newState);
            currentJob = matchedMarker.jobForMarker;
        }
        else {
            if (isDriver) {
                let newDriverMarker =
                    this.createDriverMarker(currentUser, event);
                let newMarkersList = this.state.markers;
                newMarkersList.push(newDriverMarker);
                const newState = Object.assign({}, this.state, {
                    currentPosition: newPosition,
                    markers: newMarkersList
                })
                this.setState(newState);
            }
        }
        this._positionService.clearUserJobPositions();
        this._positionService.storeUserJobPositions(this.state.markers);
        this.pushOutJob(newPosition, currentJob);
    }

    handleMarkerClick = (targetMarker) => {

        console.log('button on AcceptList clicked:' + targetMarker.key);
        console.log(targetMarker);

        let currentJob = this._jobService.currentJob();
        let jobForMarker = targetMarker.jobForMarker;

        let clientMarker = _.find(this.state.markers, { 'isDriverIcon': false });
        if (clientMarker != undefined && clientMarker != null) {

            let clientJob = clientMarker.jobForMarker;
            clientJob.driverFullName = jobForMarker.driverFullName;
            clientJob.driverEmail = jobForMarker.driverEmail;
            clientJob.driverPosition = jobForMarker.driverPosition;
            clientJob.vehicleDescription = jobForMarker.vehicleDescription;
            clientJob.vehicleRegistrationNumber = jobForMarker.vehicleRegistrationNumber;
            clientJob.isAssigned = true;
            
            let self = this;
            console.log("handleMarkerClick job");
            console.log(clientJob);

            this.makePOSTRequest('job/submit', clientJob, this,
                function (jdata, textStatus, jqXHR) {
                    console.log("After is accepted");
                    const newState = Object.assign({}, self.state, {
                        isJobAccepted: true
                    })
                    self.setState(newState);
                });
        }
    }

    addMarkerForJob = (jobArgs: any): void => {

        console.log("addMarkerForJob");
        console.log(this.state);

        if (this.state.isJobAccepted || jobArgs.isAssigned) {
            this.processAcceptedMarkers(jobArgs);
        }
        else {
            this.processNotAcceptedMarkers(jobArgs);
        }
    }

    processAcceptedMarkers = (jobArgs: any): void => {

        if (jobArgs.jobUUID != undefined && jobArgs.jobUUID != '')
            this._currentJobUUID = jobArgs.jobUUID;

        let isDriver = this._authService.isDriver();
        let jobClientEmail = jobArgs.clientEmail;
        let jobDriverEmail = jobArgs.driverEmail;
        let newMarkersList = this.state.markers;
        let newPositionForUser = null;
        let newPositionForDriver = null;

        console.log("JOB ACCEPTED WE NEED TO ONLY SHOW THE RELEVANT MARKERS + CURRENT USER");
        //1. Should set all the jobs in markers to assigned now
        //2. Should only show the pair that are in the job if current user is one of them 
        //   otherwise just current user
        let allowedNamed = [this._authService.userEmail()];
        if (this._authService.userEmail() == jobArgs.clientEmail ||
            this._authService.userEmail() == jobArgs.driverEmail) {
            allowedNamed = [jobArgs.clientEmail, jobArgs.driverEmail];
        }
        let finalList: Array<PositionMarker> = new Array<PositionMarker>();
        for (var i = 0; i < this.state.markers.length; i++) {
            if (allowedNamed.indexOf(this.state.markers[i].email) >= 0) {
                let theMarker = this.state.markers[i];
                theMarker.jobForMarker.isAssigned = true;
                finalList.push(theMarker);
            }
        }
        newMarkersList = finalList;

        if (this._authService.userEmail() == jobArgs.clientEmail ||
            this._authService.userEmail() == jobArgs.driverEmail) {

            let clientMarker = _.find(newMarkersList, { 'email': jobArgs.clientEmail });
            if (clientMarker != undefined && clientMarker != null) {
                newPositionForUser = jobArgs.clientPosition;
                clientMarker.position = jobArgs.clientPosition;
            }

            let driverMarker = _.find(newMarkersList, { 'email': jobArgs.driverEmail });
            if (driverMarker != undefined && driverMarker != null) {
                newPositionForUser = jobArgs.driverPosition;
                driverMarker.position = jobArgs.driverPosition;
            }
        }
        else {
            let matchedMarker = _.find(newMarkersList, { 'email': this._authService.userEmail() });
            newPositionForUser = matchedMarker.position;
        }

        //update the state
        this.addClientDetailsToDrivers(newMarkersList);
        var newState = this.updateStateForAcceptedMarker(newMarkersList, newPositionForUser);
        this.updateStateForMarkers(newState, newMarkersList, newPositionForUser, jobArgs);
    }


    processNotAcceptedMarkers = (jobArgs: any): void => {

        if (jobArgs.jobUUID != undefined && jobArgs.jobUUID != '')
            this._currentJobUUID = jobArgs.jobUUID;

        let isDriver = this._authService.isDriver();
        let jobClientEmail = jobArgs.clientEmail;
        let jobDriverEmail = jobArgs.driverEmail;
        let newMarkersList = this.state.markers;
        let newPositionForUser = null;
        let newPositionForDriver = null;

        console.log("JOB NOT ACCEPTED WE NEED TO ONLY ALL");


        //see if the client is in the list (which it may not be). If its not add it, otherwise update it
        if (jobArgs.clientPosition != undefined && jobArgs.clientPosition != null) {
            newPositionForUser = new Position(jobArgs.clientPosition.latitude, jobArgs.clientPosition.longitude);
        }

        if (jobClientEmail != undefined && jobClientEmail != null &&
            newPositionForUser != undefined && newPositionForUser != null) {
            let matchedMarker = _.find(this.state.markers, { 'email': jobClientEmail });
            if (matchedMarker == null) {
                newMarkersList.push(new PositionMarker(
                    jobArgs.clientFullName,
                    newPositionForUser,
                    jobArgs.clientFullName,
                    jobArgs.clientEmail,
                    false,
                    isDriver,
                    jobArgs)
                );
            }
            else {
                if (jobArgs.clientPosition != undefined && jobArgs.clientPosition != null) {
                    this.updateMatchedUserMarker(
                        jobClientEmail,
                        newMarkersList,
                        newPositionForUser,
                        jobArgs);
                }
            }
        }

        //see if the driver is in the list (which it may not be). If its not add it, otherwise update it
        if (jobArgs.driverPosition != undefined && jobArgs.driverPosition != null) {
            newPositionForDriver = new Position(jobArgs.driverPosition.latitude, jobArgs.driverPosition.longitude);
        }

        if (jobDriverEmail != undefined && jobDriverEmail != null &&
            newPositionForDriver != undefined && newPositionForDriver != null) {
            let matchedMarker = _.find(this.state.markers, { 'email': jobDriverEmail });
            if (matchedMarker == null) {
                newMarkersList.push(new PositionMarker(
                    jobArgs.driverFullName,
                    newPositionForDriver,
                    jobArgs.driverFullName,
                    jobArgs.driverEmail,
                    true,
                    isDriver,
                    jobArgs));
            }
            else {
                this.updateMatchedUserMarker(
                    jobDriverEmail,
                    newMarkersList,
                    newPositionForDriver,
                    jobArgs);
            }
        }

        if (isDriver) {
            newPositionForUser = newPositionForDriver;
        }

        //update the state
        this.addClientDetailsToDrivers(newMarkersList);
        var newState = this.updateStateForNewMarker(newMarkersList, newPositionForUser);
        this.updateStateForMarkers(newState, newMarkersList, newPositionForUser, jobArgs);
    }

    addClientDetailsToDrivers = (newMarkersList: PositionMarker[]): void => {
        let clientMarker = _.find(newMarkersList, { 'isDriverIcon': false });
        if (clientMarker != undefined && clientMarker != null) {
            let driverMarkers = _.filter(newMarkersList, { 'isDriverIcon': true });
            for (var i = 0; i < driverMarkers.length; i++) {
                let driversJob = driverMarkers[i].jobForMarker;
                driversJob.jobUUID = clientMarker.jobForMarker.jobUUID;
                driversJob.clientFullName = clientMarker.jobForMarker.clientFullName;
                driversJob.clientEmail = clientMarker.jobForMarker.clientEmail;
                driversJob.clientPosition = clientMarker.jobForMarker.clientPosition;
            }
        }
    }


    updateStateForMarkers = (newState: any, newMarkersList: PositionMarker[], newPositionForUser: Position, jobArgs:any): void => {

        //Update the list of position markers in the PositionService
        this._positionService.clearUserJobPositions();
        this._positionService.storeUserJobPositions(newMarkersList);

        //Update the position in the PositionService
        if (newPositionForUser != undefined && newPositionForUser != null) {
            this._positionService.clearUserPosition();
            this._positionService.storeUserPosition(newPositionForUser);
        }

        this._jobService.clearUserIssuedJob();
        this._jobService.storeUserIssuedJob(jobArgs);

        //update the state
        this.setState(newState);
    }

    updateMatchedUserMarker = (jobEmailToCheck: string, newMarkersList: PositionMarker[],
        jobPosition: Position, jobForMarker:any): void => {

        if (jobEmailToCheck != undefined && jobEmailToCheck != null) {

            let matchedMarker = _.find(this.state.markers, { 'email': jobEmailToCheck });
            if (matchedMarker != null) {
                //update its position
                matchedMarker.position = jobPosition;
                matchedMarker.jobForMarker = jobForMarker;
            }
        }
    }


    updateStateForNewMarker = (newMarkersList:PositionMarker[], position: Position): any => {

        if (position != null) {
            return Object.assign({}, this.state, {
                currentPosition: position,
                markers: newMarkersList
            })
        }
        else {
           return Object.assign({}, this.state, {
                markers: newMarkersList
            })
        }
    }

    updateStateForAcceptedMarker = (newMarkersList: PositionMarker[], position: Position): any => {

        if (position != null) {
            return Object.assign({}, this.state, {
                currentPosition: position,
                markers: newMarkersList,
                isJobAccepted: true
            })
        }
        else {
            return Object.assign({}, this.state, {
                markers: newMarkersList,
                isJobAccepted: true
            })
        }
    }


    shouldShowMarkerForJob = (jobArgs: any): boolean => {

        let isDriver = this._authService.isDriver();
        let currentJob = this._jobService.currentJob();
        let hasJob = currentJob != undefined && currentJob != null;

        //case 1 - No job exists, to allow driver to add their mark initially
        if (!hasJob && isDriver)
            return true;
        
        //case 2 - Job exists and is unassigned and if there is no other active 
        //         job for this client/ driver
        if (hasJob && !currentJob.isAssigned)
            return true;

        //case 3 - If the job isAssigned and its for the current logged in client/driver
        if (hasJob && currentJob.isAssigned) {
            if (currentJob.clientEmail == jobArgs.clientEmail) {
                return true;
            }
            if (currentJob.driverEmail == jobArgs.driverEmail) {
                return true;
            }
        }
        return false;
    }


    pushOutJob = (newPosition: Position, jobForMarker : any): void => {
        var self = this;
        let currentUser = this._authService.user();
        let isDriver = this._authService.isDriver();
        let hasIssuedJob = this._jobService.hasIssuedJob();
        let currentJob = jobForMarker;
        let currentPosition = this._positionService.currentPosition();
        var localClientFullName = '';
        var localClientEmail = '';
        var localClientPosition = null;
        var localDriverFullName = '';
        var localDriverEmail = '';
        var localDriverPosition = null;
        var localIsAssigned = false;

        if (hasIssuedJob) {
            if (currentJob.isAssigned != undefined && currentJob.isAssigned != null) {
                localIsAssigned = currentJob.isAssigned;
            }
            else {
                localIsAssigned = false;
            }
        }

        //clientFullName
        if (hasIssuedJob) {
            if (currentJob.clientFullName != undefined && currentJob.clientFullName != "") {
                localClientFullName = currentJob.clientFullName;
            }
            else {
                localClientFullName = !isDriver ? currentUser.fullName : '';
            }
        }
        //clientEmail
        if (hasIssuedJob) {
            if (currentJob.clientEmail != undefined && currentJob.clientEmail != "") {
                localClientEmail = currentJob.clientEmail;
            }
            else {
                localClientEmail = !isDriver ? currentUser.email : '';
            }
        }
        //clientPosition
        if (hasIssuedJob) {
            if (!isDriver) {
                localClientPosition = newPosition
            }
            else {
                if (currentJob.clientPosition != undefined && currentJob.clientPosition != null) {
                    localClientPosition = currentJob.clientPosition;
                }
            }
        }

        if (hasIssuedJob) {
            //driverFullName
            if (currentJob.driverFullName != undefined && currentJob.driverFullName != "") {
                localDriverFullName = currentJob.driverFullName;
            }
            else {
                localDriverFullName = isDriver ? currentUser.fullName : '';
            }
            //driverEmail
            if (currentJob.driverEmail != undefined && currentJob.driverEmail != "") {
                localDriverEmail = currentJob.driverEmail;
            }
            else {
                localDriverEmail = isDriver ? currentUser.email : '';
            }

            //driverPosition
            if (isDriver) {
                localDriverPosition = newPosition
            }
            else {
                if(currentJob.driverPosition != undefined && currentJob.driverPosition != null) {
                    localDriverPosition = currentJob.driverPosition;
                }
            }
        }
        else {
            localDriverFullName = currentUser.fullName;
            localDriverEmail = currentUser.email;
            localDriverPosition = isDriver ? currentPosition : null;
        }

        var newJob = {
            jobUUID: this._currentJobUUID != undefined && this._currentJobUUID != '' ?
                this._currentJobUUID : '',
            clientFullName: localClientFullName,
            clientEmail: localClientEmail,
            clientPosition: localClientPosition,
            driverFullName: localDriverFullName,
            driverEmail: localDriverEmail,
            driverPosition: localDriverPosition,
            vehicleDescription: isDriver ?
                this._authService.user().vehicleDescription : '',
            vehicleRegistrationNumber: isDriver ?
                this._authService.user().vehicleRegistrationNumber : '',
            isAssigned: localIsAssigned,
            isCompleted: false
        }

        console.log("handlpushOutJob job");
        console.log(newJob);
        this.makePOSTRequest('job/submit', newJob, self,
            function (jdata, textStatus, jqXHR) {
                self._jobService.clearUserIssuedJob();
                self._jobService.storeUserIssuedJob(newJob);
            });
    }

    createDriverMarker = (
        driver: any,
        event: any): PositionMarker => {

        let localDriverFullName = driver.fullName;
        let localDriverEmail = driver.email;
        let localDriverPosition = new Position(event.latLng.lat(), event.latLng.lng());
        let localVehicleDescription = this._authService.user().vehicleDescription;
        let localVehicleRegistrationNumber = this._authService.user().vehicleRegistrationNumber;
        let currentUserIsDriver = this._authService.isDriver();

        var driverJob = {
            jobUUID: this._currentJobUUID != undefined && this._currentJobUUID != '' ?
                this._currentJobUUID : '',

            driverFullName: localDriverFullName,
            driverEmail: localDriverEmail,
            driverPosition: localDriverPosition,
            vehicleDescription: localVehicleDescription,
            vehicleRegistrationNumber: localVehicleRegistrationNumber,
            isAssigned: false,
            isCompleted: false
        }		

        return new PositionMarker(
            localDriverFullName,
            localDriverPosition,
            localDriverFullName,
            localDriverEmail,
            true,
            currentUserIsDriver,
            driverJob
        );
    }


    
    ratingsDialogOkCallBack = (theRatingScore: number) => {
        console.log('RATINGS OK CLICKED');

        var self = this;
        let currentUser = this._authService.user();
        let isDriver = this._authService.isDriver();
        let currentJob = this._jobService.currentJob();
        var ratingJSON = null;

        if (!isDriver) {
            ratingJSON = {
                fromEmail: this._authService.userEmail(),
                toEmail: currentJob.driverEmail,
                score: theRatingScore
            }
        }
        else {
            ratingJSON = {
                fromEmail: this._authService.userEmail(),
                toEmail: currentJob.clientEmail,
                score: theRatingScore
            }
        }

        this.makePOSTRequest('rating/submit/new', ratingJSON, self,
            function (jdata, textStatus, jqXHR) {
                this._jobService.clearUserIssuedJob();
                this._positionService.clearUserJobPositions();
                this.setState(
                    {
                        okDialogHeaderText: 'Ratings',
                        okDialogBodyText: 'Rating successfully recorded',
                        okDialogOpen: true,
                        okDialogKey: Math.random(),
                        markers: new Array<PositionMarker>(),
                        currentPosition: null,
                        isJobAccepted: false,
                        finalActionHasBeenClicked: true
                    });
            });
    }

   
    makePOSTRequest = (route: string, jsonData: any, context: ViewJob, doneCallback: DoneCallback) => {
        $.ajax({
            type: 'POST',
            url: route,
            data: JSON.stringify(jsonData),
            contentType: "application/json; charset=utf-8",
            dataType: 'json'
        })
        .done(function (jdata, textStatus, jqXHR) {
            doneCallback(jdata, textStatus, jqXHR);
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            const newState = Object.assign({}, context.state, {
                okDialogHeaderText: 'Error',
                okDialogBodyText: jqXHR.responseText,
                okDialogOpen: true,
                okDialogKey: Math.random()
            })
            context.setState(newState)
        });
    }

    jobCancelledCallBack = () => {
        console.log('CANCEL YES CLICKED');
        this._jobService.clearUserIssuedJob();
        this._positionService.clearUserJobPositions();
        this.setState(
            {
                okDialogHeaderText: 'Job Cancellaton',
                okDialogBodyText: 'Job successfully cancelled',
                okDialogOpen: true,
                okDialogKey: Math.random(),
                markers: new Array<PositionMarker>(),
                currentPosition: null,
                isJobAccepted: false,
                finalActionHasBeenClicked: true
            });
    }

    jobNotCancelledCallBack = () => {
        console.log('CANCEL NO CLICKED');
        this.setState(
            {
                okDialogHeaderText: 'Job Cancellaton',
                okDialogBodyText: 'Job remains open',
                okDialogOpen: true,
                okDialogKey: Math.random(),
                finalActionHasBeenClicked: true
            });
    }

    okDialogCallBack = () => {
        console.log('OK on OkDialog CLICKED');
        this.setState(
            {
                okDialogOpen: false
            });
    }
}