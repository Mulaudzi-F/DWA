import { LitElement, html } from "./litelement";

class TallyApp extends LitElement {
  static style = `
  body{
        background-color: black
    }`;

  static properties = {
    state: { value: 0 },
  };

  constructor() {
    super();
  }

  render() {
    return html`
      <sl-input
        class="counter__value"
        data-key="number"
        readonly
        value="0"
      ></sl-input>
      <sl-button variant="Default">+</sl-button>
      <sl-button variant="Default">-</sl-button>
      <sl-button variant="Default">Reset</sl-button>
    `;
  }
}

customElements.define("tally-app", TallyApp);
