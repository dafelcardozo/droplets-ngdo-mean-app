
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {
  Component,
  Inject,
  OnInit,
   Output, ElementRef
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
import {LocationService} from '../../positionning/services/locations';
import Location from '../../positionning/models/locations';

@Component({
  selector: 'donors',
  templateUrl: 'profile-form/templates/donor.html',
  styleUrls: ['profile-form/styles/donor.css'],
  directives: [REACTIVE_FORM_DIRECTIVES],
  providers: [DonorsService, LocationService],
  styles: [`[hidden]:not([broken]) { display: none !important;}`]
})
export class Donor implements OnInit {
  myFormGroup: FormGroup;
  field:number=1;
  active:boolean=true;

  constructor(fb:FormBuilder, private _donorsService: DonorsService, private el: ElementRef, private locationService:LocationService) {
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
    let ls = this.locationService;
   this._donorsService.post(new DonorProfile(firstName, lastName, contactNumber, emailAddress, bloodGroup))
     .subscribe(m => {
       this.field = 1;
       this.active = false;
       io().emit('chat message', firstName+' '+lastName+' has registered as a donor');
       setTimeout(() => this.active = true, 100);
       $("#myModal")["modal"]('hide');

       let position:Location = JSON.parse($("#position")["val"]());
       position.object = m['_id'];
       ls.setLocation(position)
       .subscribe(n => console.info("n: "+n));
     });
  }
}
