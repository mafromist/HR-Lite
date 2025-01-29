import {EmployeeForm} from '../src/components/employee-form.js';
import {fixture, assert, expect} from '@open-wc/testing';
import {html} from 'lit';
import {store} from '../src/store/store.js';

suite('employee-form', () => {
  setup(() => {
    store.employees = [];
  });

  test('is defined', () => {
    const el = document.createElement('employee-form');
    assert.instanceOf(el, EmployeeForm);
  });

  test('invalid form submission', async () => {
    const el = await fixture(html`<employee-form></employee-form>`);
    const submitButton = el.shadowRoot.querySelector('button[type="submit"]');
    submitButton.click();
    await el.updateComplete;

    expect(el.shadowRoot.querySelector('.error-message')).to.not.be.null;
  });

  test('renders add form correctly', async () => {
    const el = await fixture(html`<employee-form></employee-form>`);
    assert.shadowDom.equal(
      el,
      `
      <form @submit=${this.onSubmit} class="employee-form">
        <div>
          <label for="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
            aria-label="Input for First Name"
            class="name-input first"
          />
        </div>
        <div>
          <label for="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
            aria-label="Input for Last Name"
            class="name-input last"
          />
        </div>
        <div>
          <label for="phoneNumber"
            >Phone Number <small>Format: +901234567890 </small></label
          >
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            required
            aria-label="Input for Phone Number"
            class="phone-input"
          />
        </div>
        <div>
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            aria-label="Input for Email"
            class="email-input"
          />
        </div>
        <div>
          <label for="dateOfBirth">${translate('labels.dateOfBirth')}</label>
          <input
            type="date"
            name="dateOfBirth"
            placeholder="${translate('labels.dateOfBirth')}"
            required
            aria-label="Input for ${translate('labels.dateOfBirth')}"
            class="date-input date-of-birth"
          />
        </div>
        <div>
          <label for="dateOfEmployment">Date of Employment</label>
          <input
            type="date"
            name="dateOfEmployment"
            placeholder="Date of Employment"
            required
            aria-label="Input for Date of Employment"
            class="date-input date-of-employment"
          />
        </div>
        <div>
          <label for="department">Department</label>
          <div class="department-radio-group">
            <input
              type="radio"
              id="tech"
              name="department"
              value="Tech"
              required
              aria-label="Input for Tech Department"
              class="department-radio-option"
            />
            <label for="tech">Tech</label>
            <input
              type="radio"
              id="analytics"
              name="department"
              value="Analytics"
              required
              aria-label="Input for Analytics Department"
              class="department-radio-option"
            />
            <label for="analytics">Analytics</label>
          </div>
        </div>
        <div class="position-select">
          <label for="position">Position</label>
          <select
            name="position"
            required
            aria-label="Select the position"
          >
            <option value="">Please choose the position</option>
            <option
              value="Junior"
              aria-label="Select the Junior position"
            >
              Junior
            </option>
            <option
              value="Medior"
              aria-label="Select the Medior position"
            >
              Medior
            </option>
            <option
              value="Senior"
              aria-label="Select the Senior position"
            >
              Senior
            </option>
          </select>
        </div>
        <button type="submit" aria-label="Submit the form" class="submit-btn">
          Submit
        </button>
      </form>
    `
    );
  });

  test('submits new employee', async () => {
    const el = await fixture(html`<employee-form></employee-form>`);

    el.shadowRoot.querySelector('#firstName').value = 'Muge';
    el.shadowRoot.querySelector('#lastName').value = 'Alev';
    el.shadowRoot.querySelector('#employmentDate').value = '2025-02-01';
    el.shadowRoot.querySelector('#birthDate').value = '1990-01-01';
    el.shadowRoot.querySelector('#phoneNumber').value = '123-456-7890';
    el.shadowRoot.querySelector('#email').value = 'muge.alev@ing.com';
    el.shadowRoot.querySelector('#department').value = 'Tech';
    el.shadowRoot.querySelector('#position').value = 'Medior';

    const submitButton = el.shadowRoot.querySelector('button[type="submit"]');
    submitButton.click();

    await el.updateComplete;

    assert.lengthOf(store.employees, 1, 'Employee should be added to store');
  });

  test('renders edit form correctly', async () => {
    const employee = {
      id: 101,
      firstName: 'Muge',
      lastName: 'Alev',
      employmentDate: '2025-02-01',
      birthDate: '1990-02-01',
      phoneNumber: '123-456-7890',
      email: 'muge.alev@ing.com',
      department: 'Tech',
      position: 'Medior',
    };
    store.addEmployee(employee);

    const el = await fixture(html`<employee-form></employee-form>`);

    el.getIdFromUrl = () => employee.id;
    await el.firstUpdated();

    expect(el.shadowRoot.querySelector('h2')).dom.to.equal(
      '<h1>Update Employee</h1>'
    );
    expect(
      el.shadowRoot.querySelector('form input#firstName')
    ).dom.to.have.value('Muge');
  });

  test('submits updated employee', async () => {
    const employee = {
      id: 101,
      firstName: 'Ayse',
      lastName: 'Alev',
      employmentDate: '2025-02-01',
      birthDate: '1990-02-01',
      phoneNumber: '123-456-7890',
      email: 'muge.alev@ing.com',
      department: 'Tech',
      position: 'Medior',
    };
    store.addEmployee(employee);

    const el = await fixture(html`<employee-form></employee-form>`);
    el.getIdFromUrl = () => employee.id;
    await el.firstUpdated();

    el.shadowRoot.querySelector('#firstName').value = 'Ayse Updated';
    const submitButton = el.shadowRoot.querySelector('button[type="submit"]');
    submitButton.click();

    await el.updateComplete;

    assert.equal(
      store.employees[0].firstName,
      'Ayse Updated',
      'Employee first name should be updated'
    );
  });
});
