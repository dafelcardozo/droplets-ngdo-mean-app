import {ROUTER_DIRECTIVES,  Router} from '@angular/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from '@angular/common';
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

@Component({
  selector: 'app',
    directives: [REACTIVE_FORM_DIRECTIVES, ROUTER_DIRECTIVES],
  pipes: [],
  template: `
    <router-outlet></router-outlet>
  `,
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
