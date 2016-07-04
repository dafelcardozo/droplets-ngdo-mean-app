"use strict";
var gis_controller_1 = require('../controller/gis-controller');
var gisRoutes = (function () {
    function gisRoutes() {
    }
    gisRoutes.init = function (router) {
        router
            .route('/api/positions')
            .get(gis_controller_1.gisController.getAll)
            .post(gis_controller_1.gisController.createNew);
        router
            .route('/api/positions/:id')
            .delete(gis_controller_1.gisController.removeById);
    };
    return gisRoutes;
}());
exports.gisRoutes = gisRoutes;
//# sourceMappingURL=gis-route.js.map