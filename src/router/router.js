import { Router } from '@vaadin/router';
import '../views/employee-list-view.js';

export const router = new Router();

router.setRoutes([
  {
    path: '/',
    component: 'employee-list-view',
    action: async () => {
      document.title = 'HR-Lite | Employee List';
      return undefined;
    }
  },
  {
    path: '/add',
    component: 'employee-add-update',
    action: async () => {
      document.title = 'HR-Lite | Add New Employee';
      await import(/* webpackChunkName: "employee-add-update" */ '../views/employee-add-update-view.js');
    }
  },
  {
    path: '/edit/:id',
    component: 'employee-add-update',
    action: async () => {
      document.title = 'HR-Lite | Update Employee';
      await import(/* webpackChunkName: "employee-add-update" */ '../views/employee-add-update-view.js');
    }
  },
  {
    path: '(.*)',
    component: 'not-found-view',
    action: () =>
      import(/* webpackChunkName: "not-found-view" */ '../views/not-found-view.js')
  }
]); 

// TODO: add localisation and translate the titles