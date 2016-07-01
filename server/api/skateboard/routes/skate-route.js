"use strict";
var skate_controller_1 = require('../controller/skate-controller');
var skateRoutes = (function () {
    function skateRoutes() {
    }
    skateRoutes.init = function (router) {
        router
            .route('/api/skate')
            .get(skate_controller_1.skateController.getAll)
            .post(skate_controller_1.skateController.createNew);
        router
            .route('/api/skate/:id')
            .delete(skate_controller_1.skateController.remove);
    };
    return skateRoutes;
}());
exports.skateRoutes = skateRoutes;
