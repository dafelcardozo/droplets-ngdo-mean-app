"use strict";
var donor_controller_1 = require('../controller/donor-controller');
var donorRoutes = (function () {
    function donorRoutes() {
    }
    donorRoutes.init = function (router) {
        router
            .route('/api/donor')
            .get(donor_controller_1.donorController.getAll)
            .post(donor_controller_1.donorController.createNew);
        router
            .route('/api/donor/:id')
            .delete(donor_controller_1.donorController.find);
    };
    return donorRoutes;
}());
exports.donorRoutes = donorRoutes;
