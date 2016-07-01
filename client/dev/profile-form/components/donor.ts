import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
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

import {DonorsService} from '../services/donor';

import {DonorProfile} from '../models/donor';


@Component({
  selector: 'donors',
  templateUrl: 'profile-form/templates/donor.html',
  styleUrls: ['profile-form/styles/donor.css'],
  directives: [REACTIVE_FORM_DIRECTIVES],
  providers: [DonorsService],
  styles: [`[hidden]:not([broken]) { display: none !important;}`]
})
export class Donor implements OnInit {
  title: string = "ng2do";
  myFormGroup: FormGroup;
  field:number=1;

  constructor(fb:FormBuilder, private _donorsService: DonorsService) {
    this.myFormGroup = fb.group({
      "firstName": ["", Validators.required],
      "lastName": ["", Validators.required],
      "contactNumber": ["", Validators.required],
      "emailAddress": ["", Validators.required],
      "bloodGroup": ["", Validators.required]
    });
  }
  ngOnInit() {
  }
  next() {
    this.field++;
  }
  previous() {
    this.field--;
  }
  sendData(firstName, lastName, contactNumber, emailAddress, bloodGroup) {
   let p = new DonorProfile(firstName, lastName, contactNumber, emailAddress, bloodGroup);
   this._donorsService.post(p)
     .subscribe((m) => {
//       var popo = JSON.stringify(m);//.map(response => {console.info(response.json())})}
       console.info("popo: "+m._id);
//      (<FormControl>this.todoForm.controls['todoMessage']).updateValue("");
     });
  }
}
