"use strict";
var router_1 = require('@angular/router');
var donor_1 = require('./profile-form/components/donor');
var todo_cmp_1 = require('./todo/components/todo-cmp');
var gis_1 = require('./map/components/gis');
exports.routes = [
    { path: 'donors', component: donor_1.Donor },
    { path: 'todos', component: todo_cmp_1.TodoCmp },
    { path: 'gis', component: gis_1.Gis },
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
