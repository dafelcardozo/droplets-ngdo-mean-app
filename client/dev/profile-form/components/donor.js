"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var donor_1 = require('../services/donor');
var donor_2 = require('../models/donor');
var Donor = (function () {
    ///   profile = new DonorProfile("", "", "", "", "");
    function Donor(fb, _donorsService) {
        this._donorsService = _donorsService;
        this.title = "ng2do";
        //++}  firstName: string ;
        this.field = 1;
        this.myFormGroup = fb.group({
            "firstName": ["", forms_1.Validators.required],
            "lastName": ["", forms_1.Validators.required],
            "contactNumber": ["", forms_1.Validators.required],
            "emailAddress": ["", forms_1.Validators.required],
            "bloodGroup": ["", forms_1.Validators.required]
        });
    }
    Donor.prototype.ngOnInit = function () {
    };
    Donor.prototype.next = function () {
        this.field++;
    };
    Donor.prototype.previous = function () {
        this.field--;
    };
    Donor.prototype.sendData = function (firstName, lastName, contactNumber, emailAddress, bloodGroup) {
        var p = new donor_2.DonorProfile(firstName, lastName, contactNumber, emailAddress, bloodGroup);
        console.log("p: " + JSON.stringify(p));
        var kaka = this._donorsService.post(p)
            .subscribe(function (m) {
            console.info("Responded: " + m);
            //      (<FormControl>this.todoForm.controls['todoMessage']).updateValue("");
        });
    };
    Donor = __decorate([
        core_1.Component({
            selector: 'donors',
            templateUrl: 'profile-form/templates/donor.html',
            styleUrls: ['profile-form/styles/donor.css'],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES],
            providers: [donor_1.DonorsService],
            styles: ["[hidden]:not([broken]) { display: none !important;}"]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, donor_1.DonorsService])
    ], Donor);
    return Donor;
}());
exports.Donor = Donor;
