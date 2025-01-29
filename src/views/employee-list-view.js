import {html, css} from 'lit';
import { globalStyles } from '../global-styles.js';
import {ParentComponent} from '../components/parent-component';
import {store} from '../store/store';
import '../components/modal';
import '../components/tooltip-component';
import {tableIcon, gridIcon, deleteIcon, editIcon} from '../utils/svg-template';
import { translate } from '../utils/translate.js';

export class EmployeeListView extends ParentComponent {
  static styles = [globalStyles, css`
    .employee-list {
      padding: 20px 56px;
    }

    .title {
      font-size: 24px;
      color: var(--ing-orange);
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .features {
      gap: 16px;
    }

    .table-view {
      display: table;
      width: 100%;
      border-collapse: collapse;
      background-color: var(--white);
    }

    .table-view th,
    .table-view td {
      padding: 12px 6px;
      font-size: 14px;
      text-align: center;
    }

    .table-view th {
      color: var(--ing-orange);
    }

    .table-view th,
    .table-view tr {
      border-bottom: 1px solid var(--ing-gray);
    }

    .table-view tr:last-of-type {
      border-bottom: none;
    }

    .table-view th:last-of-type,
    .table-view td:last-of-type {
      padding-right: 12px;
      padding-left: 36px;
    }

    .grid-view {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 1rem;
    }

    .grid-card {
      outline: 1px solid var(--ing-orange);
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding: 32px 16px;
      line-height: 0.9em;
      position: relative;
    }

    .grid-card .name {
      font-size: 20px;
      font-weight: bold;
      color: var(--ing-blue);
      text-decoration: underline;
      margin-bottom: 16px;
    }

    .grid-card .category {
      color: var(--ing-blue);
      margin-bottom: 4px;
    }

    .grid-card.selected {
      outline: 4px solid var(--ing-orange);
      background-color: var(--ing-orange-10);
    }

    .grid-view .actions-buttons {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      gap: 12px;
      align-items: flex-end;
    }

    .grid-view .actions-buttons p {
      font-size: 14px;
      color: var(--ing-orange);
      display: flex;
      align-items: center;
      gap: 4px;
      margin: 0;
    }

    .checkbox-select-employee {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .checkbox-select-employee-label {
      position: absolute;
      top: 16px;
      right: 16px;
      cursor: pointer;
      color: var(--ing-blue);
    }

    .checkbox-select-employee-label:hover {
      text-decoration: underline;
    }

    .checkbox-select-employee-label.selected {
      color: var(--ing-orange);
    }

    .grid-card .detail {
      display: flex;
      flex-direction: column;
      margin-bottom: 12px;
    }

    .actions-buttons {
      display: flex;
      justify-content: center;
      gap: 8px;
    }

    .actions-buttons * {
      background-color: transparent;
      border: none;
      fill: var(--ing-orange);
      cursor: pointer;
    }

    .actions-buttons icon-component button svg {
      width: 20px;
      height: 20px;
    }

    .toggle-view-buttons {
      display: flex;
      padding: 2px;
      margin: 0;
      gap: 8px;
    }

    .toggle-view-btn {
      background-color: transparent;
      border: none;
      cursor: pointer;
      fill: var(--ing-blue);
    }

    .toggle-view-btn > svg {
      width: 24px;
      height: 24px;
      fill: var(--ing-blue);
    }

    .toggle-view-btn:hover > svg > path {
      fill: var(--ing-orange);
    }

    .toggle-view-btn:disabled {
      fill: var(--ing-orange);
      color: var(--ing-orange);
    }

    .pagination {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      text-align: center;
    }

    .pagination * {
      font-family: 'INGFont', sans-serif;
    }

    .pagination-btn {
      margin: 0 8px;
      background-color: transparent;
      border: none;
      cursor: pointer;
      color: var(--ing-orange);
      border: 2px solid var(--ing-orange);
      border-radius: 50%;
      font-size: 14px;
    }

    .pagination-btn:hover {
      background-color: var(--ing-orange);
      color: var(--white);
    }

    .page-btn {
      background-color: transparent;
      border: none;
      font-size: 14px;
      cursor: pointer;
      display: inline-block;
      padding: 4px 8px;
      border-radius: 5px;
      margin: 0 4px;
      color: var(--ing-blue);
    }

    .page-btn:hover:not(.active) {
      background-color: transparent;
      outline: 2px solid var(--ing-orange);
      color: var(--ing-orange);
    }

    .page-btn.active {
      margin: 0 5px;
      background-color: var(--ing-orange);
      color: var(--white);
      border: none;
    }

    .page-btn.active:hover {
      background-color: transparent;
      border: 2px solid var(--ing-orange);
      color: var(--ing-blue);
    }

    .features {
      display: flex;
      flex-direction: column-reverse;
      gap: 16px;
      align-items: flex-end;
    }

    .header-actions {
      display: flex;
      flex-direction: column-reverse;
      gap: 8px;
      margin-bottom: 16px;
    }

    .search {
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--ing-blue);
    }

    .search-input {
      border: 2px solid var(--ing-orange);
      border-radius: 4px;
      padding: 4px 6px;
      margin: 0;
      width: 180px;
    }

    input[type='search' i] {
      appearance: none;
    }

    .search-input::-webkit-search-decoration {
      -webkit-appearance: none;
    }

    .search-input::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }

    .search-input:focus {
      opacity: 1;
      padding: 4px 6px;
      border: 2px solid var(--ing-blue);
    }

    .search-input:focus:hover {
      border: 2px solid var(--ing-blue);
      padding: 4px 6px;
      opacity: 1;
    }

    .search-input::placeholder {
      font-size: 14px;
      font-family: 'INGFont', sans-serif;
      color: var(--ing-blue);
      text-align: center;
      margin: 0;
    }

    .no-employees {
      display: grid;
      width: 100%;
      height: 100%;
      place-content: center;
      text-align: center;
    }

    @media only screen and (min-width: 768px) {
      .grid-view .actions-buttons {
        display: flex;
      }

      .header-actions {
        flex-direction: row;
        gap: 16px;
        align-items: center;
        margin-bottom: 0;
      }

      .features {
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
      }
    }
  `];

  static properties = {
    employees: {type: Array},
    selectedEmployeesIDs: {type: Array},
    viewMode: {type: String},
    currentPage: {type: Number},
    employeesPerPage: {type: Number},
    totalPages: {type: Number},
    loading: {type: Boolean},
    selectedToDeleteID: {type: Number},
    deleteMessage: {type: String},
    isModalActive: {type: Boolean},
    filteredEmployees: {type: Array},
  };

  constructor() {
    super();
    this.employees = [];
    this.selectedEmployeesIDs = [];
    this.viewMode = 'table';
    this.currentPage = 1;
    this.employeesPerPage = 10;
    this.totalPages = 1;
    this.loading = true;
    this.isDelete = false;
    this.selectedToDeleteID = null;
    this.deleteMessage = '';
    this.isModalActive = false;
    this.filteredEmployees = [];

    const params = new URLSearchParams(window.location.search);
    this.currentPage = this.getPageFromUrl() || 1;
    this.searchQuery = params.get('search') || '';

    window.addEventListener('popstate', () => this.checkUrlChange());
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('popstate', () => this.checkUrlChange());
  }

  // Search & URL Page Customising Functionality //

  getPageFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get('page'));
    return !isNaN(page) && page > 0 ? page : 1;
  }

  changePage(page) {
    if (page > 0 && page !== this.currentPage) {
      this.currentPage = page;
      this.changeUrl();
    }
  }

  checkUrlChange() {
    const params = new URLSearchParams(window.location.search);
    this.currentPage = this.getPageFromUrl();
    this.searchQuery = params.get('search') || '';
    this.filterEmployees();
  }

  handleSearch(e) {
    const inputValue = e?.target?.value?.trim() || '';
    this.searchQuery = inputValue;
    this.currentPage = 1;
    this.changeUrl();

    if (!this.searchQuery || this.filteredEmployees.length === 0) {
      this.clearSearch();
    }
  }

  clearSearch() {
    if (!this.searchQuery) {
      this.changeUrl();
    } else {
      this.searchQuery = '';
      this.changeUrl();
    }
  }

  changeUrl() {
    const params = new URLSearchParams(window.location.search);
    params.set('page', this.currentPage);
    params.set('search', this.searchQuery);

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, '', newUrl);

    this.filterEmployees();
  }

  dividedEmployees(employees) {
    const start = (this.currentPage - 1) * this.employeesPerPage;
    const end = start + this.employeesPerPage;
    return employees.slice(start, end);
  }

  filterEmployees() {
    const searchQueryLowerCase = this.searchQuery.toLowerCase();

    if (this.searchQuery) {
      this.filteredEmployees = this.employees.filter((employee) =>
        Object.values(employee)
          .join(' ')
          .toLowerCase()
          .includes(searchQueryLowerCase)
      );
    } else {
      this.filteredEmployees = this.dividedEmployees(this.employees);
    }

    this.totalPages = Math.ceil(
      this.filteredEmployees.length / this.employeesPerPage
    );

    if (this.filteredEmployees.length === 0 && this.searchQuery) {
      this.clearSearch();
    }

    this.requestUpdate();
  }

  async firstUpdated() {
    try {
      this.loading = true;
      const data = await store.fetchEmployees();
      if (Array.isArray(data)) {
        this.employees = data;
      } else {
        console.log('Data is not an array', data);
      }
    } catch (error) {
      console.log('Error fetching employees', error);
    } finally {
      this.loading = false;
      this.filterEmployees();
      this.requestUpdate();
    }

    window.addEventListener('popstate', () => {
      this.currentPage = this.getPageFromUrl();
    });
  }

  //TODO: When user route to another page, this.employees is not updated even the store
  // has the data. Need to find a way to update this.employees when the store is updated.

  render() {
    if (this.loading) {
      return html`<p>${translate('warnings.loading')}</p>`;
    }

    if (!this.filteredEmployees.length) {
      return html`<div class="no-employees">
        <p>${translate('warnings.noEmployees')}</p>
        <button
          class="btn-primary"
          @click="${() => (window.location.href = '/')}"
        >
        ${translate('buttons.homePage')}
        </button>
      </div>`;
    } else {
      return html`
        <section class="employee-list">
          <div class="header">
            <h2 class="title">${translate('title.employeeList')}</h2>

            <div class="features">
              <div class="header-actions">
                <!-- Delete Button for Selected Employees -->
                ${this.selectedEmployeesIDs.length > 0
                  ? html`
                      <button
                        class="btn-primary small"
                        @click="${this.onDeleteSelected}"
                        data-tooltip="Delete All Selected Employees"
                        aria-label="Delete Selected Employees"
                      >
                      ${translate('buttons.deleteSelected')}
                      </button>
                    `
                  : ''}

                <!-- Search on page -->
                <div class="search">
                  <input
                    type="search"
                    id="search"
                    placeholder="${translate('placeholder.search')}"
                    class="search-input"
                    @input=${this.handleSearch}
                    @search=${this.clearSearch}
                    aria-label="Search through site content"
                    autocomplete="off"
                  />
                </div>
              </div>

              <!-- View Mode Toggle Button -->
              <div class="toggle-view-buttons">
                <tooltip-component>
                  <button
                    class="table-view-btn toggle-view-btn"
                    @click="${()=>this.switchViewMode('table')}"
                    ?disabled=${this.viewMode === 'table'}
                    aria-label="${translate('viewMode.table')} Button"
                  >
                    <icon-component .icon=${tableIcon}></icon-component>
                  </button>
                  <div slot="tooltip">${translate('viewMode.table')}</div>
                </tooltip-component>
                <tooltip-component>
                  <button
                    class="grid-view-btn toggle-view-btn"
                    @click="${()=>this.switchViewMode('grid')}"
                    ?disabled=${this.viewMode === 'grid'}
                    aria-label="${translate('viewMode.grid')}"
                  >
                    <icon-component .icon=${gridIcon}></icon-component>
                  </button>
                  <div slot="tooltip">${translate('viewMode.grid')}</div>
                </tooltip-component>
              </div>
            </div>
          </div>

          <!-- Grid View -->
          ${this.viewMode === 'grid'
            ? html` <div class="grid-view" aria-label="${translate('title.employeeList')}">
                ${this.filteredEmployees.map(
                  (employee) => html`
                    <div
                      class="grid-card ${employee.selected ? 'selected' : ''}"
                    >
                      <div class="grid-content">
                        <div class="name" aria-label="Employee Name">
                          <span>${employee.firstName}</span>
                          <span>${employee.lastName}</span>
                        </div>
                        <div
                          class="detail"
                          aria-label="Employee's ${translate('labels.dateOfBirth')}"
                        >
                          <span class="category">${translate('labels.dateOfBirth')}:</span>
                          <span>${employee.dateOfBirth}</span>
                        </div>
                        <div
                          class="detail"
                          aria-label="Employee's Phone Number"
                        >
                          <span class="category">Phone Number:</span>
                          <span>${employee.phoneNumber}</span>
                        </div>
                        <div class="detail" aria-label="Employee's Email">
                          <span class="category">Email: </span>
                          <span>${employee.email}</span>
                        </div>
                        <div
                          class="detail"
                          aria-label="Employee's Department/Position"
                        >
                          <span class="category">Department/Position: </span>
                          <span
                            >${employee.department} / ${employee.position}</span
                          >
                        </div>

                        <div
                          class="detail"
                          aria-label="Employee's ${translate('labels.dateOfEmployment')}"
                        >
                          <span class="category">${translate('labels.dateOfEmployment')}: </span>
                          <span>${employee.dateOfEmployment}</span>
                        </div>
                      </div>

                      <label
                        for="checkbox-${employee.id}"
                        class="checkbox-select-employee-label ${employee.selected
                          ? 'selected'
                          : ''}"
                        aria-label="${employee.selected
                          ? 'Label for Unselect the Employee'
                          : 'Label for Select the Employee'}"
                        >${employee.selected ? 'Unselect' : 'Select'}</label
                      >

                      <input
                        type="checkbox"
                        class="checkbox-select-employee"
                        name="checkbox-${employee.id}"
                        id="checkbox-${employee.id}"
                        ?checked="${employee.selected}"
                        @change="${(e) => this.toggleSelection(e, employee)}"
                        aria-checked="${employee.selected}"
                        aria-label="${employee.selected
                          ? 'Unselect the Employee'
                          : 'Select the Employee'}"
                      />

                      <div class="actions-buttons">
                        <button
                          @click=${() => this.onEdit(employee.id)}
                          aria-label="Edit Employee Details"
                        >
                          <p class="actions-buttons-text">
                            <icon-component .icon=${editIcon}></icon-component
                            >Edit
                          </p>
                        </button>

                        <button
                          @click=${() => this.onDelete(employee.id)}
                          aria-label="Delete Employee"
                        >
                          <p class="actions-buttons-text">
                            <icon-component
                              .icon=${deleteIcon}
                            ></icon-component>
                            Delete
                          </p>
                        </button>
                      </div>
                    </div>
                  `
                )}
              </div>`
            : ''}

          <!-- Table View -->
          ${this.viewMode === 'table'
            ? html` <table
                class="table-view"
                aria-label="Employee List as a Table"
              >
                <thead>
                  <tr>
                    <th>
                      <input
                        type="checkbox"
                        class="checkbox-select-employee"
                        ?checked="${this.selectedEmployeesIDs.length ===
                        this.employees.length}"
                        @change="${this.toggleSelectAll}"
                        aria-checked="${this.selectedEmployeesIDs.length ===
                        this.employees.length}"
                        aria-label="Select All Employees"
                      />
                    </th>
                    <th aria-label="Table Header for Employee's First Name">
                      First Name
                    </th>
                    <th aria-label="Table Header for Employee's Last Name">
                      Last Name
                    </th>
                    <th
                      aria-label="Table Header for Employee's ${translate('labels.dateOfEmployment')}"
                    >
                      ${translate('labels.dateOfEmployment')}
                    </th>
                    <th aria-label="Table Header for Employee's ${translate('labels.dateOfBirth')}">
                      ${translate('labels.dateOfBirth')}
                    </th>
                    <th aria-label="Table Header for Employee's Phone">
                      Phone
                    </th>
                    <th aria-label="Table Header for Employee's Email">
                      Email
                    </th>
                    <th aria-label="Table Header for Employee's Department">
                      Department
                    </th>
                    <th aria-label="Table Header for Employee's Position">
                      Position
                    </th>
                    <th aria-label="Table Header for Employee's Actions">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  ${this.filteredEmployees.map(
                    (employee) => html`
                      <tr>
                        <td class="checkbox-wrapper">
                          <input
                            type="checkbox"
                            class="checkbox"
                            name="checkbox-${employee.id}"
                            id="checkbox-${employee.id}"
                            ?checked="${employee.selected}"
                            @change="${(e) =>
                              this.toggleSelection(e, employee)}"
                            aria-checked="${employee.selected}"
                            aria-label="${employee.selected
                              ? 'Unselect the Employee'
                              : 'Select the Employee'}"
                          />
                        </td>
                        <td aria-label="Employee's First Name" class="name">
                          ${employee.firstName}
                        </td>
                        <td aria-label="Employee's Last Name" class="name">
                          ${employee.lastName}
                        </td>
                        <td aria-label="Employee's ${translate('labels.dateOfEmployment')}">
                          ${employee.dateOfEmployment}
                        </td>
                        <td aria-label="Employee's ${translate('labels.dateOfBirth')}">
                          ${employee.dateOfBirth}
                        </td>
                        <td aria-label="Employee's Phone">
                          ${employee.phoneNumber}
                        </td>
                        <td aria-label="Employee's Email">${employee.email}</td>
                        <td aria-label="Employee's Department">
                          ${employee.department}
                        </td>
                        <td aria-label="Employee's Position">
                          ${employee.position}
                        </td>
                        <td
                          class="actions-buttons"
                          aria-label="Employee's Actions Buttons"
                        >
                          <tooltip-component>
                            <button
                              @click=${() => this.onEdit(employee.id)}
                              aria-label="Edit Employee Details Button"
                            >
                              <icon-component
                                .icon=${editIcon}
                              ></icon-component>
                            </button>
                            <div slot="tooltip">Edit</div>
                          </tooltip-component>
                          <tooltip-component>
                            <button
                              @click=${() => this.onDelete(employee.id)}
                              aria-label="Delete Employee Button"
                            >
                              <icon-component
                                .icon=${deleteIcon}
                              ></icon-component>
                            </button>
                            <div slot="tooltip">Delete</div>
                          </tooltip-component>
                        </td>
                      </tr>
                    `
                  )}
                </tbody>
              </table>`
            : ''}

          <div class="pagination" aria-label="Pagination">
            <button
              ?disabled="${this.currentPage === 1}"
              @click="${() => this.changePage(this.currentPage - 1)}"
              class="pagination-btn prev"
              aria-label="Previous Page Button"
            >
              <
            </button>
            <div>${this.generatePageNumbers()}</div>
            <button
              ?disabled="${this.currentPage ===
              Math.ceil(this.employees.length / this.employeesPerPage)}"
              @click="${() => this.changePage(this.currentPage + 1)}"
              class="pagination-btn next"
              aria-label="Next Page Button"
            >
              >
            </button>
          </div>

          <modal-component
            ?isActive=${this.isModalActive}
            modalTitle="Update Confirmation"
            @confirm=${this.onConfirm}
            @cancel=${this.onCancel}
            aria-label="Modal for Delete Confirmation"
          >
            <div slot="modal-message">
              <p aria-label="Modal's Message">
                Are you sure you want to delete?
              </p>
            </div>
          </modal-component>
        </section>
      `;
    }
  }

  // Pagination //

  // TODO: Pagination is not working properly. Need to fix the issue. 
  // The numbers not showing without clicking the next or previous button.

  setPage = (pageNum) => {
    if (pageNum < 1 || pageNum > this.totalPages) return;
    this.currentPage = pageNum;
    this.changeUrl();
  };

  generatePageNumbers() {
    this.totalPages = Math.ceil(
      this.filteredEmployees.length / this.employeesPerPage
    );

    const pageNumbers = [];

    const generatePageButton = (pageNum) => {
      pageNumbers.push(html`
        <button
          class="page-btn ${this.currentPage === pageNum ? 'active' : ''}"
          @click=${() => this.setPage(pageNum)}
        >
          ${pageNum}
        </button>
      `);
    };

    generatePageButton(1);

    if (this.currentPage > 3) {
      pageNumbers.push(html`<span class="page-dots">...</span>`);
    }

    for (let i = Math.max(2, this.currentPage - 1); i < this.currentPage; i++) {
      generatePageButton(i);
    }

    if (this.currentPage !== 1 && this.currentPage !== this.totalPages) {
      generatePageButton(this.currentPage);
    }

    for (
      let i = this.currentPage + 1;
      i < Math.min(this.totalPages, this.currentPage + 2);
      i++
    ) {
      generatePageButton(i);
    }
    if (this.currentPage < this.totalPages - 2) {
      pageNumbers.push(html`<span class="page-dots">...</span>`);
    }

    if (this.totalPages > 1) {
      generatePageButton(this.totalPages);
    }

    return pageNumbers;
  }

  // End of Pagination //

  // Switch between list and table view //

  switchViewMode(newMode) {
    this.viewMode = newMode
  }

  // End of Switch between list and table view //

  // Edit and Delete Functionality //

  onEdit(employeeID) {
    window.history.pushState({}, '', `/edit/${employeeID}`);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  onDelete(id) {
    const employee = store.fetchEmployee(id);
    this.deleteMessage = `Are you sure you want to delete ${employee.firstName} ${employee.lastName}?`;
    this.selectedToDeleteID = id;
    this.isModalActive = true;
  }

  onDeleteSelected() {
    if (!this.selectedEmployeesIDs.length) return;
    this.isModalActive = true;
  }

  async onConfirm() {
    try {
      if (this.selectedToDeleteID) {
        store.deleteEmployee(this.selectedToDeleteID);
        this.employees = store.fetchEmployees();
        this.selectedToDeleteID = null;
      } else {
        await Promise.all(
          this.selectedEmployeesIDs.map((id) => store.deleteEmployee(id))
        );
        this.employees = store.fetchEmployees();
        this.selectedEmployeesIDs = [];
      }
    } catch (error) {
      console.log('Error deleting employee', error);
    } finally {
      this.removeModal();
    }
  }

  onCancel() {
    this.removeModal();
    this.selectedToDeleteID = null;
  }

  removeModal() {
    this.isModalActive = false;
    document.body.classList.remove('modal-open');
  }

  toggleSelectAll(e) {
    const isSelected = e.target.checked;

    this.employees = this.employees.map((emp) => ({
      ...emp,
      selected: isSelected,
    }));

    this.selectedEmployeesIDs = isSelected
      ? this.employees.map((emp) => emp.id)
      : [];
  }

  toggleSelection(e, employee) {
    e.preventDefault();
    const isSelected = e.target.checked;

    employee.selected = isSelected;

    this.selectedEmployeesIDs = this.employees
      .filter((emp) => emp.selected)
      .map((emp) => emp.id);
  }

  updateEmployees() {
    store.updateEmployees(this.employees);
    this.selectedEmployeesIDs = [];
    this.requestUpdate();
  }

  // End of Edit and Delete Functionality //
}

customElements.define('employee-list-view', EmployeeListView);