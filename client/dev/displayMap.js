var displayMap = function() {
      setTimeout(function() {

             app.Drag = function() {

               ol.interaction.Pointer.call(this, {
                 handleDownEvent: app.Drag.prototype.handleDownEvent,
                 handleDragEvent: app.Drag.prototype.handleDragEvent,
                 handleMoveEvent: app.Drag.prototype.handleMoveEvent,
                 handleUpEvent: app.Drag.prototype.handleUpEvent
               });
               this.coordinate_ = null;
               this.cursor_ = 'pointer';
               this.feature_ = null;
               this.previousCursor_ = undefined;

             };
             ol.inherits(app.Drag, ol.interaction.Pointer);
             app.Drag.prototype.handleDownEvent = function(evt) {
               var map = evt.map;

               var feature = map.forEachFeatureAtPixel(evt.pixel,
                   function(feature) {
                     return feature;
                   });

               if (feature) {
                 this.coordinate_ = evt.coordinate;
                 this.feature_ = feature;
               }

               return !!feature;
             };

             app.Drag.prototype.handleDragEvent = function(evt) {
               var deltaX = evt.coordinate[0] - this.coordinate_[0];
               var deltaY = evt.coordinate[1] - this.coordinate_[1];

               var geometry = /** @type {ol.geom.SimpleGeometry} */
                   (this.feature_.getGeometry());
               geometry.translate(deltaX, deltaY);

               this.coordinate_[0] = evt.coordinate[0];
               this.coordinate_[1] = evt.coordinate[1];
             };
              app.Drag.prototype.handleMoveEvent = function(evt) {
               if (this.cursor_) {
                 var map = evt.map;
                 var feature = map.forEachFeatureAtPixel(evt.pixel,
                     function(feature) {
                       return feature;
                     });
                 var element = evt.map.getTargetElement();
                 if (feature) {
                   if (element.style.cursor != this.cursor_) {
                     this.previousCursor_ = element.style.cursor;
                     element.style.cursor = this.cursor_;
                   }
                 } else if (this.previousCursor_ !== undefined) {
                   element.style.cursor = this.previousCursor_;
                   this.previousCursor_ = undefined;
                 }
               }
             };
             app.Drag.prototype.handleUpEvent = function() {
               this.coordinate_ = null;
               this.feature_ = null;
               return false;
             };
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
