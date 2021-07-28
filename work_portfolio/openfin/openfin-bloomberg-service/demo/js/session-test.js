import { Component, html } from './lit-component.js';
import blpApi from '../../client/bloomberg-blpapi-service.js';

let blpClient;

export class SessionTestElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clientReady: false,
            connectionState: 'Disconnected'
        };

        blpApi.getClient().then(client => {
            let state = this.state;
            state.clientReady = true;

            blpClient = client;

            this.setState(state);
        });
    }

    async connect() {
        let state = this.state;
        state.connectionState = 'Connecting';
        this.setState(state);
        let sessionStarted = await blpClient.startSession();

        if (sessionStarted) {
            state.connectionState = 'Connected';
        }
        else {
            state.connectionState = 'Failed';
        }

        this.setState(state);
    }

    async disconnect() {
        this.setState(Object.assign(this.state, { connectionState: 'Disconnected' }));
    }

    render() {
        return html`
<div>
    <h1>Session Test</h1>
    <div>Client Ready: ${this.state.clientReady}</div>
    <div>
        <button @click=${() => this.connect()}>Connect</button>
        <button @click=${() => this.disconnect()}>Disconnect</button>
        <div><span>Status: </span><span>${this.state.connectionState}</span></div>
    </div>
</div>
        `;
    }
}

customElements.define('session-test', SessionTestElement);