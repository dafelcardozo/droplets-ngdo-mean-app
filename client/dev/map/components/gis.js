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
var locations_1 = require('../../positionning/services/locations');
var Gis = (function () {
    function Gis(loc) {
        this.loc = loc;
        displayMap();
        this.loadPositions();
    }
    Gis.prototype.ngOnInit = function () {
    };
    Gis.prototype.loadPositions = function () {
        var style = new ol.style.Style({
            image: new ol.style.Circle({
                radius: 6,
                fill: new ol.style.Fill({
                    color: '#ff0000'
                }),
                stroke: new ol.style.Stroke({
                    color: '#f00',
                    width: 2
                })
            })
        });
        this.loc.getLocations().subscribe(function (positions) {
            var features = positions.map(function (p) {
                var feature = new ol.Feature();
                feature.setStyle(style);
                feature.setGeometry(new ol.geom.Point([p.latitude, p.longitude]));
                return feature;
            });
            featuresLayer.getSource().addFeatures(features);
        });
    };
    Gis = __decorate([
        core_1.Component({
            selector: 'gis',
            templateUrl: 'map/templates/gis.html',
            styleUrls: ['map/styles/gis.css'],
            providers: [locations_1.LocationService]
        }), 
        __metadata('design:paramtypes', [locations_1.LocationService])
    ], Gis);
    return Gis;
}());
exports.Gis = Gis;
//# sourceMappingURL=gis.js.map