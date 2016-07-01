"use strict";
var DonorProfile = (function () {
    function DonorProfile(firstName, lastName, contactNumber, emailAddress, bloodGroup) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.contactNumber = contactNumber;
        this.emailAddress = emailAddress;
        this.bloodGroup = bloodGroup;
    }
    return DonorProfile;
}());
exports.DonorProfile = DonorProfile;
