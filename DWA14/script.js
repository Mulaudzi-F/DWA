import { LitElement, html, css } from "./litelement.js";

class TallyApp extends LitElement {
  MAX_NUMBER = 15;
  MIN_NUMBER = -5;

  static properties = {
    count: { type: Number },
  };

  constructor() {
    super();
    this.count = 0;
  }

  render() {
    return html`
      <style>
        .counter__value{

          height:400px
          weight: 400px   }

          .head{
            text-margin: center;
          }
      </style>
      <h1 class="head">Tally Count</h1>
      <sl-input
        class="counter__value"
        data-key="number"
        readonly
        value=${this.count}
        size="large"
        >${this.count}</sl-input
      >
      <sl-button
        @click=${this._addHandler}
        size="large"
        disabled=${this.count === this.MAX_NUMBER}
        variant="Primary"
        >+</sl-button
      >
      <sl-button
        @click=${this._subtractHandler}
        size="large"
        disabled=${this.count === this.MIN_NUMBER}
        variant="Primary"
        >-</sl-button
      >
    `;
  }

  _subtractHandler() {
    this.count--;
    this.count === this.MAX_NUMBER
      ? console.log("Add button must be disabled")
      : console.log(this.count);
  }

  _addHandler() {
    this.count++;
    this.count === this.MAX_NUMBER
      ? console.log("Add button must be disabled")
      : console.log(this.count);
  }
}

customElements.define("tally-app", TallyApp);
console.log(TallyApp);
