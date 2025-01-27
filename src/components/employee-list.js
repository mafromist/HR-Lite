import {html, css} from 'lit';
import {ParentComponent} from './parent-component';
import {store} from '../store/store';

class EmployeeListComponent extends ParentComponent {
  static properties = {
    employees: {type: Array},
    selectedEmployeesIDs: {type: Array},
    viewMode: {type: String},
    currentPage: {type: Number},
    employeesPerPage: {type: Number},
    totalPages: {type: Number},
    loading: {type: Boolean},
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
  }

  //TODO: Add styling for the table and grid view

  static styles = css`
    :host {
      --ing-orange: #ff6200;
      --ing-gray: #dddada;
      --ing-dark-gray: #333333;
      --white: #ffffff;
    }

    .header,
    .features {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .features {
      gap: 16px;
    }

    .btn,
    .view-toggle-btn {
      background-color: var(--ing-orange);
      color: var(--white);
      border: none;
      cursor: pointer;
      padding: 5px 10px;
      border-radius: 3px;
    }

    .btn:hover,
    .view-toggle-btn:hover {
      background-color: transparent;
      color: var(--ing-orange);
      outline: 3px solid var(--ing-orange);
    }

    .table-view {
      display: table;
      width: 100%;
      border-collapse: collapse;
    }

    .table-view th,
    .table-view td {
      padding: 10px;
      border: 1px solid var(--ing-gray);
    }

    .list-view {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: space-between;
    }

    .list-view ul {
      box-sizing: border-box;
      width: 200px;
      height: 200px;
      border: 1px solid var(--ing-gray);
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      list-style-type: none;
    }

    .pagination {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 14px;
    }

    .pagination * {
      font-family: 'INGFont', sans-serif;
    }

    .pagination-btn {
      margin: 0 5px;
      background-color: transparent;
      border: none;
    }

    .page-btn {
      background-color: transparent;
      border: none;
      font-size: 14px;
      cursor: pointer;
    }

    .page-btn.active {
      margin: 0 5px;
      background-color: var(--ing-orange);
      color: var(--white);
      border: none;
      border-radius: 5px;
      padding: 7px 10px;
      margin: 0;
    }
  `;

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
      this.requestUpdate();
    }
  }

  get dividedEmployees() {
    const start = (this.currentPage - 1) * this.employeesPerPage;
    const end = start + this.employeesPerPage;
    return this.employees.slice(start, end);
  }

  generatePageNumbers() {
    this.totalPages = Math.ceil(this.employees.length / this.employeesPerPage);
    const pageNumbers = [];

    const setPage = (page) => {
      if (page !== this.currentPage) {
        this.currentPage = page;
        this._updateUrl();
      }
    };
    const generatePageButton = (pageNum) => {
      pageNumbers.push(html`
        <button
          class="page-btn ${this.currentPage === pageNum ? 'active' : ''}"
          @click=${() => setPage(pageNum)}
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

  //TODO: When user route to another page, this.employees is not updated even the store
  // has the data. Need to find a way to update this.employees when the store is updated.

  render() {
    if (this.loading) {
      return html`<p>Loading...</p>`;
    }

    if (!this.dividedEmployees.length) {
      return html`<p>No employees found</p>`;
    } else {
      return html`
        <section class="employee-list">
          <div class="header">
            <h2 class="title">Employee List</h2>

            <!-- Delete Button for Selected Employees -->
            ${this.selectedEmployeesIDs.length > 0
              ? html`
                  <button
                    class="btn btn-delete-all"
                    @click="${this.deleteSelectedEmployees}"
                  >
                    Delete Selected Employees
                  </button>
                `
              : ''}

            <div class="features">
              <!-- Search on page -->
              <div>
                <label for="search">Search:</label>
                <input type="text" placeholder="Search..." />
              </div>

              <!-- View Mode Toggle Button -->
              <button class="view-toggle-btn" @click="${this.switchViewMode}">
                Toggle View
              </button>
            </div>
          </div>

          <!-- List View (200px x 200px Box) -->
          ${this.viewMode === 'list'
            ? html` <div class="list-view">
                ${this.dividedEmployees.map(
                  (employee) => html`
                    <ul>
                      <input
                        type="checkbox"
                        name="checkbox-${employee.id}"
                        id="checkbox-${employee.id}"
                        ?checked="${employee.selected}"
                        @change="${(e) => this.toggleSelection(e, employee)}"
                        aria-checked="${employee.selected}"
                      />
                      <li class="name">${employee.firstName}</li>
                      <li class="name">${employee.lastName}</li>
                      <li>${employee.dateOfEmployment}</li>
                      <li>${employee.dateOfBirth}</li>
                      <li>${employee.phoneNumber}</li>
                      <li>${employee.email}</li>
                      <li>${employee.department}</li>
                      <li>${employee.position}</li>
                    </ul>

                    <div class="actions">
                      <button
                        class="btn"
                        @click=${() => this.onEdit(employee.id)}
                      >
                        <p>edit</p>
                      </button>
                      <button
                        class="btn"
                        @click=${() => this.onDelete(employee.id)}
                      >
                        <p>delete</p>
                      </button>
                    </div>
                  `
                )}
              </div>`
            : ''}

          <!-- Table View -->
          ${this.viewMode === 'table'
            ? html` <table class="table-view">
                <thead>
                  <tr>
                    <th>
                      <input
                        type="checkbox"
                        ?checked="${this.selectedEmployeesIDs.length ===
                        this.employees.length}"
                        @change="${this.toggleSelectAll}"
                        aria-checked="${this.selectedEmployeesIDs.length ===
                        this.employees.length}"
                      />
                    </th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Date of Employment</th>
                    <th>Date of Birth</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>Position</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  ${this.dividedEmployees.map(
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
                          />
                        </td>
                        <td class="name">${employee.firstName}</td>
                        <td class="name">${employee.lastName}</td>
                        <td>${employee.dateOfEmployment}</td>
                        <td>${employee.dateOfBirth}</td>
                        <td>${employee.phoneNumber}</td>
                        <td>${employee.email}</td>
                        <td>${employee.department}</td>
                        <td>${employee.position}</td>
                        <td class="actions">
                          <button
                            class="btn"
                            @click=${() => this.onEdit(employee.id)}
                          >
                            <p>edit</p>
                          </button>
                          <button
                            class="btn"
                            @click=${() => this.onDelete(employee.id)}
                          >
                            <p>delete</p>
                          </button>
                        </td>
                      </tr>
                    `
                  )}
                </tbody>
              </table>`
            : ''}

          <div class="pagination">
            <button
              ?disabled="${this.currentPage === 1}"
              @click="${() => this.changePage(this.currentPage - 1)}"
              class="pagination-btn prev"
            >
              <
            </button>
            <div>${this.generatePageNumbers()}</div>
            <button
              ?disabled="${this.currentPage ===
              Math.ceil(this.employees.length / this.employeesPerPage)}"
              @click="${() => this.changePage(this.currentPage + 1)}"
              class="pagination-btn next"
            >
              >
            </button>
          </div>
        </section>
      `;
    }
  }

  changePage(page) {
    if (
      page > 0 &&
      page <= Math.ceil(this.employees.length / this.employeesPerPage)
    ) {
      this.currentPage = page;
    }
  }

  switchViewMode() {
    this.viewMode = this.viewMode === 'list' ? 'table' : 'list';
  }

  onEdit(employee) {
    store.updateEmployee(employee);
    this.employees = store.fetchEmployees();
  }

  onDelete(id) {
    store.deleteEmployee(id);
    this.employees = store.fetchEmployees();
  }

  //TODO: Implement edit functionality for existing users with edit button

  deleteSelectedEmployees() {
    this.selectedEmployeesIDs.forEach((id) => {
      store.deleteEmployee(id);
    });

    this.employees = store.fetchEmployees();
  }

  toggleSelectAll(e) {
    const isChecked = e.target.checked;

    this.employees = this.employees.map((emp) => ({
      ...emp,
      selected: isChecked,
    }));

    this.selectedEmployeesIDs = isChecked
      ? this.employees.map((emp) => emp.id)
      : [];
  }

  toggleSelection(e, employee) {
    e.preventDefault();
    const isSelected = e.target.checked;
    console.log(isSelected, 'isSelected');

    employee.selected = isSelected;

    this.selectedEmployeesIDs = this.employees
      .filter((emp) => emp.selected)
      .map((emp) => emp.id);
  }

  connectedCallback() {
    super.connectedCallback();
    const storedEmployees = JSON.parse(localStorage.getItem('employees'));
    if (storedEmployees) {
      this.employees = storedEmployees;
    }
  }

  updateEmployees() {
    store.updateEmployees(this.employees);
    this.selectedEmployeesIDs = [];
    this.requestUpdate();
  }
}

customElements.define('employee-list', EmployeeListComponent);

// TODO: Add search fuctionality to filter the employees based on the search query
