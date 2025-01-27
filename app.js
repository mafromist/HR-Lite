/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html} from 'lit';
import {router} from './src/router/router.js';
import './src/components/employee-list.js';
import './src/components/navigation.js';

export class App extends LitElement {
  //Added ING Font and ING Icon Fonts
  //provided by this github repo:
  //https://github.com/eugev/auction/tree/master/2291ec1c83a719fce7602b9c1605fc_payment_3de88732a94a7c578/2e9800f81ab50b4fd1_payments_ae9037ed66f85923/ing/fonts/app

  connectedCallback() {
    super.connectedCallback();
    if (!document.querySelector('#global-ing-fonts')) {
      const globalStyle = document.createElement('style');
      globalStyle.textContent = `
      @font-face {
        font-family: 'INGFont';
        src: url('./assets/fonts/INGMeWeb-Regular.woff2') format('woff2'),
             url('./assets/fonts/INGMeWeb-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
      }
        
      body {
        font-family: 'INGFont', sans-serif;
      }
    `;

      document.head.appendChild(globalStyle);
    }
  }

  constructor() {
    super();
    this.router = router;
  }

  firstUpdated() {
    const outlet = this.shadowRoot.querySelector('#outlet');
    if (outlet) {
      this.router.setOutlet(outlet);
    }
  }

  render() {
    return html`
      <navigation-area></navigation-area>
      <main>
        <div id="outlet"></div>
      </main>
    `;
  }
}

window.customElements.define('app-root', App);
