import { html } from 'lit-element';
import { ParentComponent } from '../components/parent-component.js';

class NotFoundView extends ParentComponent {
  render() {
    return html`
      <h1>View not found!</h1>
      <p>
        Please check your URL.
      </p>
    `;
  }
}

customElements.define('not-found-view', NotFoundView);