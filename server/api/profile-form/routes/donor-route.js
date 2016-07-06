"use strict";
var donor_controller_1 = require('../controller/donor-controller');
var donorRoutes = (function () {
    function donorRoutes() {
    }
    donorRoutes.init = function (router) {
        router
            .route('/api/donor/:id')
            .get(donor_controller_1.donorController.findById);
        ;
        router
            .route('/api/donor')
            .get(donor_controller_1.donorController.getAll)
            .post(donor_controller_1.donorController.createNew);
    };
    return donorRoutes;
}());
exports.donorRoutes = donorRoutes;
//# sourceMappingURL=donor-route.js.map