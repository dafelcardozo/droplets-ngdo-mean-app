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
var core_1 = require("@angular/core");
var locations_1 = require("../../positionning/services/locations");
var donor_1 = require("../../profile-form/services/donor");
var donor_2 = require("../../profile-form/models/donor");
var Gis = (function () {
    function Gis(loc, don) {
        this.loc = loc;
        this.don = don;
        this.donorP = new donor_2.DonorProfile("", "", "", "", "");
        var esrijsonFormat = new ol.format.EsriJSON();
        var view = new ol.View({
            center: [0, 0],
            zoom: 14
        });
        var obj = new ol.Object();
        obj["attributions"] = 'Tiles © <a href="http://services.arcgisonline.com/ArcGIS/' +
            'rest/services/World_Topo_Map/MapServer">ArcGIS</a>';
        obj["url"] = 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}';
        var raster = new ol.layer.Tile({
            source: new ol.source.XYZ(obj)
        });
        this.loadPositions();
        this.map = new ol.Map({
            layers: [raster],
            target: document.getElementById('map'),
            view: view
        });
        var m = this.map;
        var t = this;
        this.map.on('singleclick', function (evt) {
            var pixel = m.getEventPixel(evt.originalEvent);
            m.forEachFeatureAtPixel(pixel, function (feature) {
                t.pp().setPosition(evt.coordinate);
                if (feature["object"]) {
                    var prettyCoord = ol.coordinate.toStringHDMS(ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326'));
                    t.loadDonor(feature["object"]);
                }
            });
        });
        var geolocation = new ol.Geolocation({
            projection: view.getProjection()
        });
        geolocation.setTracking(true);
        geolocation.on('change', function () {
            var pos = geolocation.getPosition();
            m.getView().setCenter(pos);
        });
        geolocation.on('error', function (error) {
            var info = document.getElementById('info');
            info.innerHTML = error["message"];
            info.style.display = '';
        });
        var accuracyFeature = new ol.Feature();
        geolocation.on('change:accuracyGeometry', function () {
            accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
        });
        var positionFeature = new ol.Feature();
        positionFeature.setStyle(new ol.style.Style({
            image: new ol.style.Circle({
                radius: 6,
                fill: new ol.style.Fill({
                    color: '#3399CC'
                }),
                stroke: new ol.style.Stroke({
                    color: '#fff',
                    width: 2
                })
            })
        }));
        geolocation.on('change:position', function () {
            var coordinates = geolocation.getPosition();
            positionFeature.setGeometry(coordinates ? new ol.geom.Point(coordinates) : null);
            $("#position").val(JSON.stringify({ latitude: coordinates[0], longitude: coordinates[1], coordinateSystem: geolocation.getProjection() }));
        });
        new ol.layer.Vector({
            map: this.map,
            source: new ol.source.Vector({
                features: [accuracyFeature, positionFeature]
            })
        });
        this.featuresLayer = new ol.layer.Vector({
            map: this.map,
            source: new ol.source.Vector({})
        });
    }
    Gis.prototype.pp = function () {
        if (!this.popup) {
            this.popup = new ol.Overlay({
                element: document.getElementById('gispopup'),
            });
            this.map.addOverlay(this.popup);
        }
        return this.popup;
    };
    Gis.prototype.ngOnInit = function () {
        this.pp();
    };
    Gis.prototype.loadPositions = function () {
        var _this = this;
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
                feature["object"] = p.object;
                return feature;
            });
            _this.featuresLayer.getSource().addFeatures(features);
        });
    };
    Gis.prototype.loadDonor = function (id) {
        var _this = this;
        this.don.get(id).subscribe(function (d) { return _this.donorP = d; });
    };
    Gis.prototype.closePopup = function () {
        this.pp().setPosition(undefined);
        var closer = document.getElementById('popup-closer');
        closer.blur();
        return false;
    };
    return Gis;
}());
Gis = __decorate([
    core_1.Component({
        selector: 'gis',
        templateUrl: 'map/templates/gis.html',
        styleUrls: ['map/styles/gis.css'],
        providers: [locations_1.LocationService, donor_1.DonorsService]
    }),
    __metadata("design:paramtypes", [locations_1.LocationService, donor_1.DonorsService])
], Gis);
exports.Gis = Gis;
//# sourceMappingURL=gis.js.map