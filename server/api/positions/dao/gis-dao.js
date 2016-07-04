"use strict";
var mongoose = require('mongoose');
var Promise = require('bluebird');
var gis_model_1 = require('../model/gis-model');
var _ = require('lodash');
gis_model_1.default.static('getAll', function () {
    return new Promise(function (resolve, reject) {
        var _query = {};
        Gis
            .find(_query)
            .exec(function (err, todos) {
            err ? reject(err)
                : resolve(todos);
        });
    });
});
gis_model_1.default.static('createNew', function (gis) {
    return new Promise(function (resolve, reject) {
        if (!_.isObject(gis)) {
            return reject(new TypeError('Todo is not a valid object.'));
        }
        var _something = new Gis(gis);
        _something.save(function (err, saved) {
            err ? reject(err)
                : resolve(saved);
        });
    });
});
gis_model_1.default.static('removeById', function (id) {
    return new Promise(function (resolve, reject) {
        if (!_.isString(id)) {
            return reject(new TypeError('Id is not a valid string.'));
        }
        Gis
            .findByIdAndRemove(id)
            .exec(function (err, deleted) {
            err ? reject(err)
                : resolve();
        });
    });
});
var Gis = mongoose.model('Gis', gis_model_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Gis;
//# sourceMappingURL=gis-dao.js.map