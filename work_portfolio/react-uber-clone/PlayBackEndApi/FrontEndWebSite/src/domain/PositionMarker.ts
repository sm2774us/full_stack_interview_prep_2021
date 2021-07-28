﻿import { Position } from "./Position";

export class PositionMarker {

    key: string;
    position: Position;
    name: string;
    email: string;
    icon: string;
    isDriverIcon: boolean;
    currentUserIsDriver: boolean;
    jobForMarker: any;

    constructor(
        key: string,
        position: Position,
        name: string,
        email: string,
        isDriverIcon: boolean,
        currentUserIsDriver: boolean,
        jobForMarker: any) {

        this.key = key;
        this.position = position;
        this.name = name;
        this.email = email;
        this.icon = this.createIcon(isDriverIcon);
        this.isDriverIcon = isDriverIcon;
        this.currentUserIsDriver = currentUserIsDriver;
        this.jobForMarker = jobForMarker;

    }

    createIcon = (isDriverIcon: boolean): string => {
        return isDriverIcon ? '/assets/images/driver.png' : '/assets/images/passenger.png';
    }
}