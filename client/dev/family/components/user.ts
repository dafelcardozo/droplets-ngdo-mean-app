import {
  Component,
  Inject
} from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: 'family/templates/user.html',
  styleUrls: ['family/styles/user.css']
})
export class User {
  name: string = `yo, I'm your component :D`;
}
