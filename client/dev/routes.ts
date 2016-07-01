import { provideRouter, RouterConfig } from '@angular/router';
import {Donor} from './profile-form/components/donor';
import {TodoCmp} from './todo/components/todo-cmp';
import {Gis} from './map/components/gis';

export const routes: RouterConfig = [
  { path: 'donors', component: Donor },
  { path: 'todos', component: TodoCmp },
  { path: 'gis', component: Gis },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
