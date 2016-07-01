var displayMap = function() {
  console.info("Initiating");
      setTimeout(function() {
        var esrijsonFormat = new ol.format.EsriJSON();
        var view = new ol.View({
          center: [0, 0],
          zoom: 14
        });
        var raster = new ol.layer.Tile({
          source: new ol.source.XYZ({
            attributions: 'Tiles © <a href="http://services.arcgisonline.com/ArcGIS/' +
            'rest/services/World_Topo_Map/MapServer">ArcGIS</a>',
            url: 'http://server.arcgisonline.com/ArcGIS/rest/services/' +
            'World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
          })
        });

        var map = new ol.Map({
          layers: [raster],
          target: document.getElementById('map'),
          view: view
        });

        var displayFeatureInfo = function(pixel) {
          var features = [];
          map.forEachFeatureAtPixel(pixel, function(feature) {
            features.push(feature);
          });
          if (features.length > 0) {
            var info = [];
            var i, ii;
            for (i = 0, ii = features.length; i < ii; ++i) {
              info.push(features[i].get('field_name'));
            }
            map.getTarget().style.cursor = 'pointer';
          } else {
            map.getTarget().style.cursor = '';
          }
        };

        map.on('pointermove', function(evt) {
          if (evt.dragging) {
            return;
          }
          var pixel = map.getEventPixel(evt.originalEvent);
          displayFeatureInfo(pixel);
        });

        map.on('click', function(evt) {
          displayFeatureInfo(evt.pixel);
        });

        var geolocation = new ol.Geolocation({
          projection: view.getProjection()
        });

        function el(id) {
          return document.getElementById(id);
        }
        console.info("Setting  geotracking");
        geolocation.setTracking(true);

        geolocation.on('change', function() {
          var pos = geolocation.getPosition();
          map.getView().setCenter(pos);
        });

        // handle geolocation error.
        geolocation.on('error', function(error) {
          var info = document.getElementById('info');
          info.innerHTML = error.message;
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
        });

        new ol.layer.Vector({
          map: map,
          source: new ol.source.Vector({
            features: [accuracyFeature, positionFeature]
          })
        });
        // Fixes bug in which map appears twice
        $("#map .ol\-viewport:nth-child(2)").remove();
      }, 2000);
}
