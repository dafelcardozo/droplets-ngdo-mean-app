import {
  Component,
  Inject
} from '@angular/core';

@Component({
  selector: 'locations',
  templateUrl: 'positionning/templates/locations.html',
  styleUrls: ['positionning/styles/locations.css']
})
export class Locations {
  name: string = `yo, I'm your component :D`;
}
