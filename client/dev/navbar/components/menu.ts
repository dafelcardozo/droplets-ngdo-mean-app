import {
  Component,
  Inject
} from '@angular/core';

@Component({
  selector: 'navmenu',
  templateUrl: 'navbar/templates/menu.html',
  styleUrls: ['navbar/styles/menu.css']
})
export class NavMenu {
  name: string = `yo, I'm your component :D`;
}
