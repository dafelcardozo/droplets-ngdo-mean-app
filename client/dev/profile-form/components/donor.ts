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


@Component({
  selector: 'donors',
  templateUrl: 'profile-form/templates/donor.html',
  styleUrls: ['profile-form/styles/donor.css'],
  directives: [REACTIVE_FORM_DIRECTIVES],
  providers: [DonorsService]
})
export class Donor implements OnInit {
  title: string = "ng2do";
  form: FormGroup;
    name: string = `yo, I'm your component :D`;

  constructor(fb:FormBuilder, private _todoService: DonorsService) {
    this.form = fb.group({
      "todoMessage": ["", Validators.required]
    });
  }

  ngOnInit() {
  //  this._getAll();
  }
/*
  private _getAll():void {
    this._todoService
        .getAll()
        .subscribe((todos) => {
          this.todos = todos;
        });
  }

  add(message:string):void {
    this._todoService
        .add(message)
        .subscribe((m) => {
          this.todos.push(m);
          (<FormControl>this.todoForm.controls['todoMessage']).updateValue("");
        });
  }
  */

}
