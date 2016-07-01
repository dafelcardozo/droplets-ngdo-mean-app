"use strict";
var router_1 = require('@angular/router');
var donor_1 = require('./profile-form/components/donor');
var todo_cmp_1 = require('./todo/components/todo-cmp');
exports.routes = [
    { path: 'donors', component: donor_1.Donor },
    { path: 'todos', component: todo_cmp_1.TodoCmp },
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
