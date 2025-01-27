import {html, css, LitElement} from 'lit';
import {svgIcon} from '../utils/svg-template.js';

export class IconComponent extends LitElement {
  static properties = {
    icon: {type: Object}
  };

  static styles = css`
    :host {
      display: inline-block;
      width: 24px;
      height: 24px;
    }

    svg {
      width: 100%;
      height: 100%;
    }

    svg:hover {
      fill: var(--ing-orange);
    }
  `;

  render() {
    return html`${svgIcon(this.icon)}`;
  }
}

customElements.define('icon-component', IconComponent);