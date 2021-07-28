import { Subject, Observable } from 'rxjs';

export interface IEventMessager
{
    publish(message: IMessage): void;
    observe(): Observable<IMessage>;
}


export interface IMessage {
    
}

export class ShowInfoInSidePanel implements IMessage {

    private _itemClicked: string;

    public constructor(itemClicked: string) {
        this._itemClicked = itemClicked;
    }

    get itemClicked(): string {
        return this._itemClicked;
    }
}


export class EventMessager implements IEventMessager {

    private subject = new Subject<IMessage>();

    publish(message: IMessage) {
        this.subject.next(message);
    }

    observe(): Observable<IMessage> {
        return this.subject.asObservable();
    }
}