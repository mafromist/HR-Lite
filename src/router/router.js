import { Router } from '@vaadin/router';
import '../views/employee-list-view.js';

export const router = new Router();

router.setRoutes([
  {
    path: '/',
    component: 'employee-list',
    action: async () => {
      document.title = 'ING - Çalışan Listesi';
      return undefined;
    }
  },
  {
    path: '/add',
    component: 'employee-add-update',
    action: async () => {
      document.title = 'ING - Çalışan Ekle';
      await import(/* webpackChunkName: "employee-add-update" */ '../views/employee-add-update-view.js');
    }
  },
  {
    path: '/edit/:id',
    component: 'employee-add-update',
    action: async () => {
      document.title = 'ING - Çalışan Düzenle';
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