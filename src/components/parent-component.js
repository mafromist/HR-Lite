import {LitElement} from 'lit';
import {store} from '../store/store';
import {observeState} from 'lit-element-state';

export class ParentComponent extends observeState(LitElement) {
  static properties = {
    employees: {type: Array},
  };

  constructor() {
    super();
    this.employees = [];

    this.employees = store.employees;
    this.requestUpdate();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.employees = [];
  }
}

// TODO: I need to add language localization to the application via parent component 
// so that all the child components can access it.
