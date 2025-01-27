import {html, css} from 'lit';
import { ParentComponent } from './parent-component';
import {store} from '../store/store';
import { Router } from '@vaadin/router';

export class EmployeeForm extends ParentComponent {
  static properties = {
    formData: {type: Object},
  };

  constructor() {
    super();
    this.formData = {};
  }

  onInput(event) {
    const {name, value} = event.target;
    this.formData = {...this.formData, [name]: value};
  }

  onSubmit(event) {
    event.preventDefault();
    console.log('Processed Form Data:', this.formData);
    store.addEmployee(this.formData);
    alert('Form submitted successfully!');
    Router.go(`/`);
  }

  //TODO: Implement the form validation logic here
  //TODO: Implement the form submission logic here
  //TODO: Implement a modal to display the form submission status

  render() {
    return html`
      <form @submit=${this.onSubmit}>
        <div>
          <label for="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            @input=${this.onInput}
            required
          />
        </div>
        <div>
          <label for="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            @input=${this.onInput}
            required
          />
        </div>
        <div>
          <label for="phoneNumber">Phone Number</label>
          <small>Format: +901234567890 </small>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            @input=${this.onInput}
            required
          />
        </div>
        <div>
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            @input=${this.onInput}
            required
          />
        </div>
        <div>
          <label for="dateOfBirth">Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            placeholder="Date of Birth"
            @input=${this.onInput}
            required
          />
        </div>
        <div>
          <label for="dateOfEmployment">Date of Employment</label>
          <input
            type="date"
            name="dateOfEmployment"
            placeholder="Date of Employment"
            @input=${this.onInput}
            required
          />
        </div>
        <fieldset>
          <legend>
            Please select the department
            <div>
              <input
                type="radio"
                id="tech"
                name="department"
                value="Tech"
                @input=${this.onInput}
                required
              />
              <label for="tech">Tech</label>
              <input
                type="radio"
                id="analytics"
                name="department"
                value="Analytics"
                @input=${this.onInput}
                required
              />
              <label for="analytics">Analytics</label>
            </div>
          </legend>
        </fieldset>
        <div>
          <label for="position">Position</label>
          <select name="position" @input=${this.onInput} required>
            <option value="">Please choose the position</option>
            <option value="Junior">Junior</option>
            <option value="Medior">Medior</option>
            <option value="Senior">Senior</option>
          </select>
        </div>
        <button type="submit">Confirm</button>
      </form>
    `;
  }
}

customElements.define('employee-form', EmployeeForm);
