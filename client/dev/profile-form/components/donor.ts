import {
  Component,
  Inject
} from '@angular/core';

@Component({
  selector: 'donor',
  templateUrl: 'profile-form/templates/donor.html',
  styleUrls: ['profile-form/styles/donor.css']
})
export class Donor {
  name: string = `yo, I'm your component :D`;
}
