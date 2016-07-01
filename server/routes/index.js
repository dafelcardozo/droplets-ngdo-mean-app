"use strict";
var todo_routes_1 = require('../api/todo/routes/todo-routes');
var donor_route_1 = require('../api/profile-form/routes/donor-route');
var index_1 = require('../commons/static/index');
var Routes = (function () {
    function Routes() {
    }
    Routes.init = function (app, router) {
        todo_routes_1.TodoRoutes.init(router);
        donor_route_1.donorRoutes.init(router);
        router
            .route('*')
            .get(index_1.StaticDispatcher.sendIndex);
        app.use('/', router);
    };
    return Routes;
}());
exports.Routes = Routes;
