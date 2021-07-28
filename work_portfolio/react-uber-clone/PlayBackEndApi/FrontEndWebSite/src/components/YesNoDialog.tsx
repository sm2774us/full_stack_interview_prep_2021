﻿import * as React from "react";
import * as ReactDOM from "react-dom";
import * as _ from "lodash";
import 'bootstrap/dist/css/bootstrap.css';
import
{
    Button, 
    Modal
} from "react-bootstrap";


export interface YesNoDialogProps {
    headerText: string;
    theId: string;
    actionPerformed: boolean;
    launchButtonText: string;
    yesCallBack(): void;
    noCallBack(): void;
}

export interface YesNoDialogState {
    showModal: boolean;
}

const GetButtonCss = (actionPerformed: boolean): string => {

    if (!actionPerformed) {
        return "displayBlock";
    }
    else {
        return "displayNone";
    }
}

export class YesNoDialog extends React.Component<YesNoDialogProps, YesNoDialogState> {

    constructor(props) {
        super(props);
        console.log(this.props);
        //set initial state
        this.state = {
            showModal: false
        };
    }

    yesClicked = () => {
        this.setState({ showModal: false });
        this.props.yesCallBack();
    }

    noClicked = () => {
        this.setState({ showModal: false });
        this.props.noCallBack();
    }

    close = () => {
        this.setState({ showModal: false });
    }

    open = () => {
        this.setState({ showModal: true });
    }

    render() {
        return (
            <div className="leftFloat">

                <Button
                    id={this.props.theId}
                    type='button'
                    bsSize='small'
                    bsStyle='primary'
                    className={GetButtonCss(this.props.actionPerformed)}
                    onClick={this.open}>{this.props.launchButtonText}</Button>

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>{ this.props.headerText }</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Are you sure?</h4>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            type='button'
                            bsSize='small'
                            bsStyle='primary'
                            onClick={this.yesClicked}>Yes</Button>
                        <Button
                            type='button'
                            bsSize='small'
                            bsStyle='danger'
                            onClick={this.noClicked}>Cancel</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}