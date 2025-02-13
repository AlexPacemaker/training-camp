"use sctrict";

export class CustomLoader extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = `
        <style>
          span {
            color: black;
            font-size: 24px;
            background: lightgray;
            padding: 10px;
            border-radius: 5px;
          }
        </style>
        <span>Загрузка...</span>
      `;
  }
}

customElements.define("custom-loader", CustomLoader);
