// Requirement of the code:
// 1. The store should have the following properties
// - employees: an array of employees
// 2. The store should have the following methods
// - fetchEmployees: returns all employees
// - fetchEmployee: returns a single employee by id
// - addEmployee: adds a new employee
// - updateEmployee: updates an employee
// - deleteEmployee: deletes an employee

import {LitState} from 'lit-element-state';

import {generateMockEmployees} from '../utils/mock-api';

class Store extends LitState {
  constructor() {
    super();
    this.storageKey = 'store';
    const storedData = localStorage.getItem(this.storageKey);
    if (!storedData) {
      const mockData = generateMockEmployees(100);
      localStorage.setItem(this.storageKey, JSON.stringify(mockData));
    }
    this.state = {
      employees: JSON.parse(localStorage.getItem(this.storageKey) || '[]'),
      language: localStorage.setItem('language', 'en'),
    };
  }

  fetchLanguage() {
    return this.state.language;
  }

  updateLanguage(language) {
    this.state = {
      language: language,
    };
    localStorage.setItem('language', language);
  }

  fetchEmployees() {
    return this.state.employees;
  }

  fetchEmployee(id) {
    return this.state.employees.find((emp) => emp.id === id);
  }

  addEmployee(employee) {
    const newId =
      Math.max(...this.state.employees.map((emp) => parseInt(emp.id)), 0) + 1;
    const newEmployee = {id: newId.toString(), ...employee, selected: false};
    this.state = {
      employees: [...this.state.employees, newEmployee],
    };
    localStorage.setItem(this.storageKey, JSON.stringify(this.state.employees));
    return newEmployee;
  }

  updateEmployee(employee) {
    const index = this.state.employees.findIndex(
      (emp) => emp.id === employee.id
    );
    if (index !== -1) {
      this.state.employees[index] = employee;
      this.state = {
        employees: [...this.state.employees],
      };
      localStorage.setItem(
        this.storageKey,
        JSON.stringify(this.state.employees)
      );
    }
    return employee;
  }

  deleteEmployee(id) {
    console.log(this.state.employees);
    this.state = {
      employees: this.state.employees.filter((emp) => emp.id !== id),
    };
    localStorage.setItem(this.storageKey, JSON.stringify(this.state.employees));
  }
}

export const store = new Store();
