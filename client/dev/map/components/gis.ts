import {
  Component,  OnInit,
  Inject
} from '@angular/core';
import {LocationService} from '../../positionning/services/locations';
import {DonorsService} from '../../profile-form/services/donor';
import {DonorProfile} from '../../profile-form/models/donor';

@Component({
  selector: 'gis',
  templateUrl: 'map/templates/gis.html',
  styleUrls: ['map/styles/gis.css'],
  providers:[LocationService, DonorsService]
})
export class Gis implements OnInit   {
  donorP:DonorProfile= new DonorProfile("", "", "", "", "");
  featuresLayer:ol.layer.Vector;
  popup:ol.Overlay;
  map :ol.Map;
  constructor( private loc:LocationService, private don:DonorsService
  ) {
    var esrijsonFormat = new ol.format.EsriJSON();
    var view = new ol.View({
      center: [0, 0],
      zoom: 14
    });

    var obj = <ol.Object>new ol.Object();
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
    let m = this.map;
    let t = this;
    this.map.on('singleclick', function(evt) {
      var pixel = m.getEventPixel(evt.originalEvent);
      m.forEachFeatureAtPixel(pixel, function(feature) {
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

    geolocation.on('change', function() {
      var pos = geolocation.getPosition();
      m.getView().setCenter(pos);
    });
    geolocation.on('error', function(error) {
      var info = document.getElementById('info');
      info.innerHTML = error["message"];
      info.style.display = '';
    });

    var accuracyFeature = new ol.Feature();
    
    geolocation.on('change:accuracyGeometry', function() {
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

    geolocation.on('change:position', function() {
      var coordinates = geolocation.getPosition();
      positionFeature.setGeometry(coordinates ?new ol.geom.Point(coordinates) : null);
      $("#position").val(JSON.stringify( {latitude:coordinates[0], longitude:coordinates[1], coordinateSystem:geolocation.getProjection() }));
    });

    new ol.layer.Vector(<olx.layer.VectorOptions>{
      map:this. map,
      source: new ol.source.Vector({
        features: [accuracyFeature, positionFeature]
      })
    });
    this.featuresLayer = new ol.layer.Vector(<olx.layer.VectorOptions>{
      map: this.map,
      source: new ol.source.Vector({
      })
    });
  }

  pp():ol.Overlay {
    if (!this.popup) {
      this.popup = new ol.Overlay({
        element:document.getElementById('gispopup'),
      });
      this.map.addOverlay(this.popup);
    }
    return this.popup;
  }

  ngOnInit() {
    this.pp();
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
          feature["object"] = p.object;
          return feature;
        });
        this.featuresLayer.getSource().addFeatures(features);
      }
    );
  }
  loadDonor(id){
    this.don.get(id).subscribe(d => this.donorP = d);
  }
  closePopup() {
    this.pp().setPosition(undefined);
    var closer = document.getElementById('popup-closer');
    closer.blur();
    return false;
  }
}
