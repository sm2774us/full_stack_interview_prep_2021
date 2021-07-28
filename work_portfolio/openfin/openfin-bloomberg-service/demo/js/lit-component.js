import { html as litHtml, render } from '../lit-html/lit-html.js';

export class Component extends HTMLElement {
    constructor(props) {
        super();
        this.props = props;
    }

    connectedCallback() {
        render(this.render(), this);
    }

    setState() {
        render(this.render(), this);
    }
}

export const html = litHtml;