import {html, css, LitElement} from 'lit';
import {globalStyles} from '../global-styles.js';

export class NotFoundView extends LitElement {
  static styles = [globalStyles, css`
    .not-found-view {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      font-family: var(--font-family);
    }

  `];
  render() {
    return html`
      <div class="not-found-view">
        <h1>URL not found!</h1>
        <p>Please check your URL.</p>
        <button
          class="btn-primary"
          @click="${() => (window.location.href = '/')}"
        >
          Go to back to Employee List
        </button>
      </div>
    `;
  }
}

customElements.define('not-found-view', NotFoundView);
