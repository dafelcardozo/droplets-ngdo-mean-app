import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';

import {App} from './app';
import { APP_ROUTER_PROVIDERS } from './routes';

bootstrap(App, [
  APP_ROUTER_PROVIDERS,
  disableDeprecatedForms(),
  provideForms(),
  HTTP_PROVIDERS
]);
