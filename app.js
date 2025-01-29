import {LitElement, html} from 'lit';
import {router} from './src/router/router.js';
import './src/components/navigation.js';
import {store} from './src/store/store.js';
import { translate } from './src/utils/translate'; 

export class App extends LitElement {
  //Added ING Font and ING Icon Fonts
  //provided by this github repo:
  //https://github.com/eugev/auction/tree/master/2291ec1c83a719fce7602b9c1605fc_payment_3de88732a94a7c578/2e9800f81ab50b4fd1_payments_ae9037ed66f85923/ing/fonts/app

  connectedCallback() {
    super.connectedCallback();
    if (!document.querySelector('#global-ing-fonts')) {
      const globalStyle = document.createElement('style');
      globalStyle.textContent = `

      :root{
      --ing-orange: #ff6200;
      --ing-blue: #052868;
      --ing-gray: #f5f5f5;
      --ing-dark-gray: #333333;
      --black: #000000;
      --white: #ffffff;
      --ing-orange-10: #ff620010;
      }

      @font-face {
        font-family: 'INGFont';
        src: url('./assets/fonts/INGMeWeb-Regular.woff2') format('woff2'),
             url('./assets/fonts/INGMeWeb-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
      }

      html {
        background-color: #f5f5f5;
      }
        
      body {
        font-family: 'INGFont', sans-serif;
      }

      .modal-open {
        position: fixed;
        top: 0;
        left: 0;
        overflow: hidden;
        width: 100%;
      }
    `;

      document.head.appendChild(globalStyle);
    }
  }

  constructor() {
    super();
    this.router = router;
    this.checkLanguage(); // Check if language is initialized
    // this.isLoading = true;
  }

  checkLanguage() {
    const currentLanguage = store.fetchLanguage();
    if (currentLanguage) {
      this.loading = false;  
      this.requestUpdate();  
    } else {
      store.setLanguage('en');
      this.loading = false;
      this.requestUpdate();
    }
  }

  firstUpdated() {
    const outlet = this.shadowRoot.querySelector('#outlet');
    if (outlet) {
      this.router.setOutlet(outlet);
    }
  }

  render() {
    const currentLanguage = store.fetchLanguage();
    console.log(currentLanguage);

    if (this.isLoading || !currentLanguage) {
      return html`<div>${translate('warnings.loading')}</div>`;  // Translate loading text
    }

    return html`
      <navigation-component></navigation-component>
      <main>
        <div id="outlet"></div>
      </main>
    `;
  }
}

window.customElements.define('app-root', App);
