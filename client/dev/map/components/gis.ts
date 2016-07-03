import {
  Component,
  Inject
} from '@angular/core';


declare var displayMap: any;

@Component({
  selector: 'gis',
  templateUrl: 'map/templates/gis.html',
  styleUrls: ['map/styles/gis.css']
})
export class Gis {
//  name: string = `yo, I'm your component :D`;

  constructor() {
    setTimeout(displayMap, 2000);
  }
}
