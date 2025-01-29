import {LitElement, html, css} from 'lit';
import '../utils/icon-template';
import {closeIcon} from '../utils/svg-template';

export class Modal extends LitElement {
  static properties = {
    message: {type: String},
    isActive: {type: Boolean},
    modalTitle: {type: String},
  };

  constructor() {
    super();
    this.message = '';
    this.isActive = false;
  }

  updated(changedProperties) {
    if (changedProperties.has('isActive')) {
      this.dispatchEvent(
        new CustomEvent('modal-closed', {
          detail: {isActive: this.isActive},
          bubbles: true,
          composed: true,
        })
      );
    }
  }

  static styles = css`
    :host {
      --white: #ffffff;
      --ing-orange: #ff6200;
      --ing-blue: #052868;
    }

    .modal {
      z-index: 1;
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      scroll-behavior: none;
      display: none;
    }

    .modal.active {
      display: grid;
      place-items: center;
    }

    .modal-content {
      display: block;
      position: absolute;
      overflow: auto;
      background-color: var(--white);
      border-radius: 5px;
      padding: 8px 16px;
      min-width: 250px;
      max-width: 400px;
      max-height: 300px;
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      background: white;
      color: var(--ing-orange);
      font-size: 18px;
      line-height: 0;
    }

    .modal-open {
      overflow-y: hidden;
    }

    .modal-body {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .modal-actions {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;
      width: 100%;
    }

    .btn {
      display: inline-block;
      padding: 10px 20px;
      margin: 4px 0;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-family: 'INGFont', sans-serif;
      font-size: 16px;
    }

    .btn-close {
      background-color: transparent;
      border: none;
      cursor: pointer;
      color: var(--ing-orange);
      padding: 0;
      margin: 0;
    }

    .btn-confirm {
      background-color: var(--ing-orange);
      color: var(--white);
    }
    .btn-cancel {
      outline: 2px solid var(--ing-blue);
      color: var(--ing-blue);
    }
  `;

  render() {
    return html`
      <div class="modal ${this.isActive ? 'active' : ''}">
        <div class="modal-content">
          <div class="modal-header">
            <p>${this.modalTitle}</p>
            <button @click=${this.closeModal} class="btn-close">
              <icon-component .icon=${closeIcon}></icon-component>
            </button>
          </div>
          <div class="modal-body">
            <slot name="modal-message" class="modal-message"></slot>
            <div name="modal-actions" class="modal-actions">
              <button class="btn btn-confirm" @click="${this.handleConfirm}">
                Confirm
              </button>
              <button class="btn btn-cancel" @click="${this.handleCancel}">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  handleConfirm() {
    this.dispatchEvent(new CustomEvent('confirm'));
  }

  handleCancel() {
    this.dispatchEvent(new CustomEvent('cancel'));
  }

  closeModal() {
    console.log('close modal');
    this.isActive = false;
  }
}

customElements.define('modal-component', Modal);
