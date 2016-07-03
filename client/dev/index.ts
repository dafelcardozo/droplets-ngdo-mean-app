
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_DIRECTIVES,  Router} from '@angular/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from '@angular/common';
import {Donor} from './profile-form/components/donor';
import {TodoCmp} from './todo/components/todo-cmp';
import {Gis} from './map/components/gis';
import {Chat} from './messaging/components/chat';
import {
  Component,
  Inject,
  OnInit
} from '@angular/core';

import {
  Validators,
  FormBuilder,
  REACTIVE_FORM_DIRECTIVES,
  FormGroup,
  FormControl
} from '@angular/forms';
// import { APP_ROUTER_PROVIDERS } from './routes';

@Component({
  selector: 'app',
    directives: [Donor, Gis, Chat],
  pipes: [],
  template: '<div id="myModal" class="modal fade" role="dialog">\
  <div class="modal-dialog">\
    <!-- Modal content-->\
    <div class="modal-content">\
      <div class="modal-header">\
        <button type="button" class="close" data-dismiss="modal">&times;</button>\
        <h4 class="modal-title">Modal Header</h4>\
      </div>\
      <div class="modal-body">\
        <donors></donors>\
      </div>\
    </div>\
  </div>\
</div>\
<gis></gis>\
<chat></chat>',
  styles: [`
      #main { margin: 10px 0 }
      #main button { margin-bottom: 5px }
      .search * { margin: 10px 0; }
      .no-users { color: red; }
      .container { width: 100% }
      img { max-width: 50px; }
  `]
})

export class App {

  constructor() {}


}

bootstrap(App, [
  ROUTER_DIRECTIVES,
  disableDeprecatedForms(),
  provideForms(),
  HTTP_PROVIDERS
]);
