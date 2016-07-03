"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var forms_1 = require('@angular/forms');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var donor_1 = require('./profile-form/components/donor');
var gis_1 = require('./map/components/gis');
var chat_1 = require('./messaging/components/chat');
var core_1 = require('@angular/core');
var App = (function () {
    function App() {
    }
    App = __decorate([
        core_1.Component({
            selector: 'app',
            directives: [donor_1.Donor, gis_1.Gis, chat_1.Chat],
            pipes: [],
            template: '<div id="myModal" class="modal fade" role="dialog">\
  <div class="modal-dialog">\
    <!-- Modal content-->\
    <div class="modal-content">\
      <div class="modal-header">\
        <button type="button" class="close" data-dismiss="modal">&times;</button>\
        <h4 class="modal-title">Modal Header</h4>\
      </div>\
      <div class="modal-body">\
        <donors></donors>\
      </div>\
    </div>\
  </div>\
</div>\
<gis></gis>\
<chat></chat>',
            styles: ["\n      #main { margin: 10px 0 }\n      #main button { margin-bottom: 5px }\n      .search * { margin: 10px 0; }\n      .no-users { color: red; }\n      .container { width: 100% }\n      img { max-width: 50px; }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
}());
exports.App = App;
platform_browser_dynamic_1.bootstrap(App, [
    router_1.ROUTER_DIRECTIVES,
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),
    http_1.HTTP_PROVIDERS
]);
//# sourceMappingURL=index.js.map