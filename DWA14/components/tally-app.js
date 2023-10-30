import { LitElement, html, css } from "../lib/lit-html.js";

export class TallyApp extends LitElement {
  static properties = {
    count: { type: Number },
    MAX: { type: Number },
    MIN: { type: Number },
  };

  static styles = css`
    .container {
      background-color: var(--sl-color-black-300);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
      font-family: var(--sl-font-sans);
      padding-bottom: 30px;
    }

    .counter-card {
      width: 70%;
    }

    .counter-content {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 300px;
      font-size: 8em;
    }

    sl-card::part(base) {
      background-color: var(--sl-color-gray-50);
    }

    sl-card::part(footer) {
      padding: 0;
    }

    .button {
      height: 100px;
      background-color: var(--sl-color-red-700);
      cursor: pointer;
    }

    .red:active {
      background-color: var(--sl-color-red-600);
    }
    .green:active {
      background-color: var(--sl-color-green-600);
    }

    .green {
      border: green 1px solid;
      background-color: var(--sl-color-green-50);
    }

    .red {
      border: red 1px solid;
      background-color: var(--sl-color-red-50);
    }

    .green sl-button::part(base) {
      color: green;
      font-size: 35px;
    }

    .red sl-button::part(base) {
      color: red;
      font-size: 35px;
    }

    #resetButton {
      float: right;
      padding: 20px;
    }

    sl-split-panel::part(divider) {
      background-color: transparent;
    }

    sl-button.purple::part(base) {
      background-color: var(--sl-color-rose-600);
    }

    sl-button.purple::part(base):hover {
      border: none;
      background-color: var(--sl-color-rose-700);
    }
  `;

  constructor() {
    super();
    this.count = 0;
    this.MAX = 10;
    this.MIN = -10;
  }

  addOne() {
    if (this.count === this.MAX) {
      alert("You have reached the maximum count!");
      return;
    }

    this.count++;
  }

  subtractOne() {
    if (this.count === this.MIN) {
      alert("You have reached the minimum count!");
      return;
    }

    this.count--;
  }

  reset() {
    this.count = 0;
    alert("Count will be set to zero!");
  }

  render() {
    return html` <h1>Tally Count</h1>
      <div class="container">
        <sl-card class="counter-card">
          <div class="counter-content" id="counter">${this.count}</div>

          <div slot="footer">
            <sl-split-panel>
              <div
                @click="${this.subtractOne}"
                slot="start"
                class="container button red"
                id="subtractButton"
              >
                <sl-button variant="text" size="large">-</sl-button>
              </div>
              <div
                @click="${this.addOne}"
                slot="end"
                class="container button green"
                id="addButton"
              >
                <sl-button class="button-text" variant="text" size="large"
                  >+</sl-button
                >
              </div>
            </sl-split-panel>
            <sl-button
              class="purple"
              size="large"
              id="resetButton"
              @click=${this.reset}
              >Reset</sl-button
            >
          </div>
        </sl-card>
      </div>`;
  }
}

customElements.define("tally-app", TallyApp);
