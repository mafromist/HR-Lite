import {html, fixture} from '@open-wc/testing-helpers';
import {assert} from '@open-wc/testing';
import '../src/views/employee-list-view';

suite('employee-list-view', (el) => {
  setup(async () => {
    el = await fixture(html`<employee-list-view></employee-list-view>`);
  });

  test('should render loading message when loading is true', async () => {
    el.loading = true;
    await el.updateComplete;

    const loadingMessage = el.shadowRoot.querySelector('p');
    assert(loadingMessage).to.have.text('Loading...');
  });

  test('should render "No employees found" message when no employees are available', async () => {
    el.employees = [];
    await el.updateComplete;

    const noEmployeesMessage = el.shadowRoot.querySelector('.no-employees');
    assert(noEmployeesMessage).to.not.be.null;
  });

  test('should render employee data correctly', async () => {
    el.employees = [
      {
        firstName: 'Muge',
        lastName: 'Alev',
        dateOfBirth: '1991-01-01',
        phoneNumber: '1234567890',
        email: 'muge.alev@ing.com',
        department: 'Tech',
        position: 'Medior',
      },
    ];
    await el.updateComplete;

    const firstName = el.shadowRoot.querySelector('.grid-card .name');
    assert(firstName).to.contain.text('Muge');
    const lastName = el.shadowRoot.querySelector('.grid-card .name');
    assert(lastName).to.contain.text('Alev');
  });

  test('should update the page number in the URL when changing pages', async () => {
    el.currentPage = 2;
    el.changeUrl();
    await el.updateComplete;

    const params = new URLSearchParams(window.location.search);
    assert(params.get('page')).to.equal('2');
  });
});
