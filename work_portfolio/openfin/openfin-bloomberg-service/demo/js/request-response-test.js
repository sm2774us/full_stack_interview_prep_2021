import { Component, html } from './lit-component.js';
import blpApi from '../../client/bloomberg-blpapi-service.js';

let blpClient;
blpApi.getClient().then(client => blpClient = client);

const presets = {
    ' ': {
        serviceUri: '',
        operationName: '',
        requestObject: {

        }
    },
    'ReferenceDataRequest': {
        serviceUri: '//blp/refdata',
        operationName: 'ReferenceDataRequest',
        requestObject: {
            securities: ['IBM US Equity', 'VOD LN Equity'],
            fields: ['PX_LAST', 'DS002', 'EQY_WEIGHTED_AVG_PX'],
            overrides: [
                { fieldId: 'VWAP_START_TIME', value: '9:30' },
                { fieldId: 'VWAP_END_TIME', value: '11:30' }
            ]
        }
    },
    'HistoricalDataRequest': {
        serviceUri: '//blp/refdata',
        operationName: 'HistoricalDataRequest',
        requestObject: {
            securities: ['IBM US Equity', 'MSFT US Equity'],
            fields: ['PX_LAST', 'OPEN'],
            periodicityAdjustment: 'ACTUAL',
            periodicitySelection: 'MONTHLY',
            startDate: '20060101',
            endDate: '20061231',
            maxDataPoints: 100,
            returnEids: true
        }
    },
    'InstrumentListRequest': {
        serviceUri: '//blp/instruments',
        operationName: 'instrumentListRequest',
        requestObject: {
            query: 'IBM',
            maxResults: 10
        }
    },
    'FieldInfoRequest': {
        serviceUri: '//blp/apiflds',
        operationName: 'FieldInfoRequest',
        requestObject: {
            id: ['LAST_PRICE', 'pq005', 'zz002'],
            returnFieldDocumentation: false
        }
    },
    'FieldSearchRequest': {
        serviceUri: '//blp/apiflds',
        operationName: 'FieldSearchRequest',
        requestObject: {
            searchSpec: 'last price',
            exclude: {
                fieldType: 'Static'
            },
            returnFieldDocumentation: false
        }
    }
};

export class RequestResponseTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPreset: ' ',
            requestText: JSON.stringify(presets[' '], null, 2),
            responseText: ''
        };
    }

    loadPreset(e) {
        let state = this.state;
        state.selectedPreset = e.target.value;
        state.requestText = JSON.stringify(presets[state.selectedPreset], null, 2)

        this.setState(state);
    }

    async sendRequest() {
        let state = this.state;
        let { serviceUri, operationName, requestObject } = JSON.parse(this.state.requestText);

        try {
            let response = await blpClient.serviceRequest(serviceUri, operationName, requestObject);
            state.responseText = JSON.stringify(response, null, 2);
        }
        catch(err) {
            state.responseText = err.toString();
        }

        this.setState(state);
    }

    render() {
        return html`
<div>
    <h1>Data Request Test</h1>
    <div>
        <div>
            <h2>Request</h2>
            <select @change=${e => this.loadPreset(e)} value="${this.state.selectedPreset}">
            ${Object.keys(presets).map(p => html`<option value="${p}">${p}</option>`)}
            </select>
            <pre contenteditable="true">${this.state.requestText}</pre>
            <button @click=${() => this.sendRequest()}>Send Request</button>
        </div>
        <div>
            <h2>Response</h2>
            <pre>${this.state.responseText}</pre>
        </div>
    </div>
</div>
        `;
    }
}

customElements.define('request-response-test', RequestResponseTest);