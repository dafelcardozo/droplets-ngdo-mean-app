/// <reference path="../../bower_components/jquery/dist/jquery.d.ts" />
/// <reference path="../../bower_components\socket.io-client\socket.io-client.d.ts" />
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

@Component({
  selector: 'donors',
  templateUrl: 'profile-form/templates/donor.html',
  styleUrls: ['profile-form/styles/donor.css'],
  directives: [REACTIVE_FORM_DIRECTIVES],
  providers: [DonorsService],
  styles: [`[hidden]:not([broken]) { display: none !important;}`]
})
export class Donor implements OnInit {
  myFormGroup: FormGroup;
  field:number=1;
  active:boolean=true;

  constructor(fb:FormBuilder, private _donorsService: DonorsService, private el: ElementRef) {
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
       this.field = 1;
       this.active = false;
       io().emit('chat message', firstName+' '+lastName+' has registered as a donor');
       setTimeout(() => this.active = true, 100);
       $("#myModal")["modal"]('hide');
     });
  }
}
