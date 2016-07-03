"use strict";
var Location = (function () {
    function Location(longitude, latitude, coordinatesSystem, user) {
        this.longitude = longitude;
        this.latitude = latitude;
        this.coordinatesSystem = coordinatesSystem;
        this.user = user;
    }
    return Location;
}());
exports.Location = Location;
//# sourceMappingURL=locations.js.map