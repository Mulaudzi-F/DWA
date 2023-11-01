import { LitElement, html, css } from "./litelement.js";

class TallyApp extends LitElement {
  MAX_NUMBER = 15;
  MIN_NUMBER = -5;
  static styles = css`
    sl-button {
      padding: 50px;
      position: relative;
      top: 90px;
      font-size: 100px;
    }
    h1 {
      text-align: center;
      color: hsl(158, 60%, 48%);
    }
    sl-input {
      width: 100vw;
      position: relative;
      top: 40px;
      padding: 3% 10%;
      font-size: 50px;
    }
  `;
  static properties = {
    count: { type: Number },
  };

  constructor() {
    super();
    this.count = 0;
  }

  render() {
    return html`
      <h1 class="head">Tally Count</h1>
      <sl-input class="counter__value" data-key="number" readonly size="large"
        >${this.count}</sl-input
      ><br />
      <sl-button
        @click=${this._addHandler}
        size="large"
        disabled=${this.count >= this.MAX_NUMBER}
        variant="primary"
        >+</sl-button
      >
      <sl-button
        @click=${this._subtractHandler}
        size="large"
        disabled=${this.count <= this.MIN_NUMBER}
        variant="primary"
        >-</sl-button
      >
    `;
  }

  _subtractHandler() {
    this.count--;
  }

  _addHandler() {
    this.count++;
  }
}

customElements.define("tally-app", TallyApp);
console.log(TallyApp);
