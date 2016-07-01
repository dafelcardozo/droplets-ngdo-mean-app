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
var Donor = (function () {
    function Donor(fb, _todoService) {
        this._todoService = _todoService;
        this.title = "ng2do";
        this.name = "yo, I'm your component :D";
        this.form = fb.group({
            "todoMessage": ["", forms_1.Validators.required]
        });
    }
    Donor.prototype.ngOnInit = function () {
        //  this._getAll();
    };
    Donor = __decorate([
        core_1.Component({
            selector: 'donors',
            templateUrl: 'profile-form/templates/donor.html',
            styleUrls: ['profile-form/styles/donor.css'],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES],
            providers: [donor_1.DonorsService]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, donor_1.DonorsService])
    ], Donor);
    return Donor;
}());
exports.Donor = Donor;
