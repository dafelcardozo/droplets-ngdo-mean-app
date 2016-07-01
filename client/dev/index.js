"use strict";
var forms_1 = require('@angular/forms');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var app_1 = require('./app');
var routes_1 = require('./routes');
platform_browser_dynamic_1.bootstrap(app_1.App, [
    routes_1.APP_ROUTER_PROVIDERS,
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),
    http_1.HTTP_PROVIDERS
]);
