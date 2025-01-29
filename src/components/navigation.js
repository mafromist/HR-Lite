import {html, css} from 'lit';
import {ParentComponent} from './parent-component';
import '../utils/icon-template.js';
import { translate } from '../utils/translate.js';

import {
  employeeIcon,
  trFlagIcon,
  engFlagIcon,
  ingLogo,
  addIcon,
} from '../utils/svg-template.js';

import {store} from '../store/store.js';

export class Navigation extends ParentComponent {
  static styles = css`
    nav {
      margin: 10px 30px;
      padding: 6px 16px;
      display: flex;
      justify-content: space-between;
      background-color: var(--white);
    }

    .brand-logo {
      display: flex;
      align-items: center;
      gap: 16px;
      text-decoration: none;
      cursor: pointer;
    }

    .brand-logo *,
    .brand-logo:hover,
    .brand-logo:active,
    .brand-logo:focus,
    .brand-logo:visited {
      color: var(--ing-dark-gray);
      line-height: 0;
    }

    .nav-menu {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .nav-links {
      display: flex;
      gap: 10px;
    }

    .nav-link {
      display: flex;
      align-items: center;
      gap: 4px;
      cursor: pointer;
      text-decoration: none;
      padding: 2px 6px;
      border-radius: 3px;
      color: var(--ing-orange);
      fill: var(--ing-orange);
    }

    .nav-link:hover {
      outline: 2px solid var(--ing-orange);
      padding: 2px 6px;
      color: var(--ing-orange);
      fill: var(--ing-orange);
      border-radius: 3px;
    }

    .nav-link:active {
      outline: 2px solid var(--ing-orange);
      padding: 2px 6px;
      color: var(--ing-orange);
      border-radius: 3px;
    }

    .language-switcher{
      background-color: transparent;
      border: none;
      cursor: pointer;
      margin-left: 10px;
      padding-top: 4px;
    }
  `;

  static properties = {
    selectedLanguage: {type: String},
  };

  constructor() {
    super();
    this.selectedLanguage = store.fetchLanguage();
  }

  switchLanguage() {
    this.selectedLanguage === 'tr'
      ? (this.selectedLanguage = 'en')
      : (this.selectedLanguage = 'tr');
    store.setLanguage(this.selectedLanguage);
    this.requestUpdate();
  }

  render() {
    return html`
      <nav>
        <div class="brand">
          <a class="brand-logo" href="/">
            <icon-component .icon="${ingLogo}"></icon-component>
            <p>ING</p>
          </a>
        </div>
        <div class="nav-menu">
          <div class="nav-links">
            <a href="/" class="nav-link home">
              <icon-component .icon="${employeeIcon}"></icon-component
              >${translate('navigation.employees')}</a
            >
            <a href="/add" class="nav-link add">
              <icon-component .icon="${addIcon}"></icon-component>${translate('navigation.addNewEmployee')}</a
            >
          </div>
          <button @click=${this.switchLanguage} class="language-switcher">
            <icon-component
              .icon="${store.state.language === 'tr'
                ? trFlagIcon
                : engFlagIcon}"
            ></icon-component>
          </button>
        </div>
      </nav>
    `;
  }
}

customElements.define('navigation-component', Navigation);
