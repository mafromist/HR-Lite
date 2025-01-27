import { Router } from '@vaadin/router';
import '../components/employee-list.js';

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
    component: 'employee-form',
    action: async () => {
      document.title = 'ING - Çalışan Ekle';
      await import('../components/employee-form.js');
    }
  },
  {
    path: '/edit/:id',
    component: 'employee-form',
    action: async () => {
      document.title = 'ING - Çalışan Düzenle';
      await import('../components/employee-form.js');
    }
  },
]); 

// TODO: add localisation and translate the titles