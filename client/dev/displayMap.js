var displayMap = function() {
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
  var popup = new ol.Overlay({
    element:document.getElementById('gispopup'),
  });
  map.addOverlay(popup);

  map.on('singleclick', function(evt) {
    var pixel = map.getEventPixel(evt.originalEvent);
    map.forEachFeatureAtPixel(pixel, function(feature) {
      popup.setPosition(evt.coordinate);
      var prettyCoord = ol.coordinate.toStringHDMS(ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326'), 2);
      $("#popup-content").html("Your position "+prettyCoord);
    });
  });

  var geolocation = new ol.Geolocation({
    projection: view.getProjection()
  });

  function el(id) {
    return document.getElementById(id);
  }
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
    $("#position").val(JSON.stringify( {latitude:coordinates[0], longitude:coordinates[1], coordinateSystem:geolocation.getProjection().getCode()}));
  });

  new ol.layer.Vector({
    map: map,
    source: new ol.source.Vector({
      features: [accuracyFeature, positionFeature]
    })
  });
  // Fixes bug in which map appears twice
  $("#map .ol\-viewport:nth-child(2)").remove();
  ///////////////////////////////////////////
  var dragAndDropInteraction = new ol.interaction.DragAndDrop({
    formatConstructors: [
      ol.format.GPX,
      ol.format.GeoJSON,
      ol.format.IGC,
      ol.format.KML,
      ol.format.TopoJSON
    ]
  });
$("#popup-closer").on("click",  function() {
  var closer = document.getElementById('popup-closer');
  popup.setPosition(undefined);
  closer.blur();
  return false;
});
  dragAndDropInteraction.on('addfeatures', function(event) {
    var vectorSource = new ol.source.Vector({
      features: event.features
    });
    map.addLayer(new ol.layer.Vector({
      source: vectorSource,
      style: styleFunction
    }));
    map.getView().fit(
      vectorSource.getExtent(), /** @type {ol.Size} */ (map.getSize()));
    });
  }
