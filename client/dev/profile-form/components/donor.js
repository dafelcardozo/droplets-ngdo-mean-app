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
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/map");
require("rxjs/Rx");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var donor_1 = require("../services/donor");
var donor_2 = require("../models/donor");
var locations_1 = require("../../positionning/services/locations");
var Donor = (function () {
    function Donor(fb, _donorsService, el, locationService) {
        this._donorsService = _donorsService;
        this.el = el;
        this.locationService = locationService;
        this.field = 1;
        this.active = true;
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
        var _this = this;
        var ls = this.locationService;
        this._donorsService.post(new donor_2.DonorProfile(firstName, lastName, contactNumber, emailAddress, bloodGroup))
            .subscribe(function (m) {
            _this.field = 1;
            _this.active = false;
            io().emit('chat message', firstName + ' ' + lastName + ' has registered as a donor');
            setTimeout(function () { return _this.active = true; }, 100);
            $("#myModal")["modal"]('hide');
            var position = JSON.parse($("#position")["val"]());
            position.object = m['_id'];
            ls.setLocation(position)
                .subscribe(function (n) { return console.info("n: " + n); });
        });
    };
    return Donor;
}());
Donor = __decorate([
    core_1.Component({
        selector: 'donors',
        templateUrl: 'profile-form/templates/donor.html',
        styleUrls: ['profile-form/styles/donor.css'],
        directives: [forms_1.REACTIVE_FORM_DIRECTIVES],
        providers: [donor_1.DonorsService, locations_1.LocationService],
        styles: ["[hidden]:not([broken]) { display: none !important;}"]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, donor_1.DonorsService, core_1.ElementRef, locations_1.LocationService])
], Donor);
exports.Donor = Donor;
//# sourceMappingURL=donor.js.map