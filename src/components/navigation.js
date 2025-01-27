import {html, css} from 'lit';
import {ParentComponent} from './parent-component';
import '../utils/icon-template.js';
import {
  employeeIcon,
  deleteIcon,
  trFlagIcon,
  engFlagIcon,
  userIcon,
  ingLogo,
  addIcon,
} from '../utils/svg-template.js';
import {store} from '../store/store.js';

export class Navigation extends ParentComponent {
  static styles = css`
    :host {
      --ing-orange: #ff6200;
      --ing-gray: #dddada;
      --ing-dark-gray: #333333;
      --white: #ffffff;
    }

    nav {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .brand-logo {
      display: flex;
      align-items: center;
      gap: 8px;
      text-decoration: none;
      cursor: pointer;
    }

    .brand-logo:hover,
    .brand-logo:active,
    .brand-logo:focus,
    .brand-logo:visited {
      color: var(--ing-dark-gray);
    }

    .nav-menu {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .nav-links {
      display: flex;
      gap: 20px;
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
      outline: 2px solid var(--ing-dark-gray);
      padding: 2px 6px;
      color: var(--ing-dark-gray);
      fill: var(--ing-dark-gray);
      border-radius: 3px;
    }

    .nav-link:active {
      outline: 2px solid var(--ing-dark-gray);
      padding: 2px 6px;
      color: var(--ing-dark-gray);
      border-radius: 3px;
    }

    .language-switcher{
      background-color: transparent;
      border: none;
      margin:0;
      cursor: pointer;
    }
  `;

  static properties = {
    selectedLanguage: {type: String},
  };

  constructor() {
    super();
    this.selectedLanguage = '';
  }

  switchLanguage() {
    this.selectedLanguage === 'tr'
      ? (this.selectedLanguage = 'en')
      : (this.selectedLanguage = 'tr');
    store.updateLanguage(this.selectedLanguage);
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
              >Employees</a
            >
            <a href="/add" class="nav-link add">
              <icon-component .icon="${addIcon}"></icon-component>Add New
              Employee</a
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

customElements.define('navigation-area', Navigation);
