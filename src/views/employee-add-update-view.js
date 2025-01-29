import {html, css} from 'lit';
import {ParentComponent} from '../components/parent-component.js';
import '../components/employee-form.js';

export class EmployeeAddUpdate extends ParentComponent {
  static styles = css`
    :host {
      display: block;
      padding: 20px 56px;
    }
    .page-title {
      text-align: center;
      color: var(--ing-orange);
    }
  `;
  static properties = {
    id: {type: Number},
  };

  constructor() {
    super();
    const urlParts = window.location.pathname.split('/');
    const lastPartOfURL = urlParts[urlParts.length - 1];
    this.id = lastPartOfURL;
  }

  render() {
    return html`
      ${this.id
        ? html`<h1
            class="page-title"
            aria-label="Page title for Update Employee"
          >
            Update Employee
          </h1>`
        : html`<h1
            class="page-title"
            aria-label="Page title for Add New Employee"
          >
            Add Employee
          </h1>`}
      <employee-form .employeeID="${this.id}"></employee-form>
    `;
  }
}

customElements.define('employee-add-update', EmployeeAddUpdate);
