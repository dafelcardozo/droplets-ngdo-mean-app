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

import {
  DonorsService
} from '../services/donor';

import {
  DonorProfile
} from '../models/donor';

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
  //++}  firstName: string ;
    field:number=1;

  ///   profile = new DonorProfile("", "", "", "", "");

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
   console.log("p: "+JSON.stringify(p));
     let kaka = this._donorsService.post(p)
     .subscribe((m) => {
       console.info("Responded: "+m);
//      (<FormControl>this.todoForm.controls['todoMessage']).updateValue("");
     });
  }
}
