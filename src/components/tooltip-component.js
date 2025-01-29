import {html, css, LitElement} from 'lit';

class TooltipComponent extends LitElement {
  static styles = css`
    :host {
      position: relative;
      display: inline-block;
    }

    .tooltip-text {
      visibility: hidden;
      width:max-content;
      background-color: var(--ing-blue);
      color: var(--white);
      text-align: center;
      border-radius: 6px;
      padding: 6px 16px;
      position: absolute;
      z-index: 1;
      bottom: 125%;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
      transition: all 150ms cubic-bezier(0.25, 0.8, 0.25, 1);
      font-size: 12px;
    }

    :host(:hover) .tooltip-text {
      visibility: visible;
      opacity: 1;
    }

    :host(:hover) .tooltip-text::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      /* margin-left: -5px; */
      border-width: 5px;
      border-style: solid;
      border-color: var(--ing-blue) transparent transparent transparent;
    }
  `;

  render() {
    return html`
      <slot></slot>
      <div class="tooltip-text">
        <slot name="tooltip"></slot>
      </div>
    `;
  }
}

customElements.define('tooltip-component', TooltipComponent);
