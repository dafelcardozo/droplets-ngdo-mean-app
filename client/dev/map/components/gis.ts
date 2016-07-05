import {
  Component,  OnInit,
  Inject
} from '@angular/core';
import {LocationService} from '../../positionning/services/locations';
declare var displayMap: any;
declare var map;
declare var featuresLayer:ol.layer.Vector;

@Component({
  selector: 'gis',
  templateUrl: 'map/templates/gis.html',
  styleUrls: ['map/styles/gis.css'],
  providers:[LocationService]
})
export class Gis implements OnInit   {
  constructor( private loc:LocationService
  ) {
    displayMap();
    this.loadPositions();
  }
  ngOnInit() {
  }
  loadPositions() {
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
    this.loc.getLocations().subscribe(
      positions => {
        var features = positions.map(p => {
          var feature = new ol.Feature();
          feature.setStyle(style);
          feature.setGeometry(new ol.geom.Point([p.latitude, p.longitude]));
          return feature;
        });
        featuresLayer.getSource().addFeatures(features);
      }
    );
  }
}
