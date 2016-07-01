import {
  Component,
  Inject
} from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: 'navbar/templates/menu.html',
  styleUrls: ['navbar/styles/menu.css']
})
export class Menu {
  name: string = `yo, I'm your component :D`;
}
