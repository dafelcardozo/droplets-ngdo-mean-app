"use strict";
var mongoose = require('mongoose');
var Promise = require('bluebird');
var skate_model_1 = require('../model/skate-model');
var _ = require('lodash');
skate_model_1.default.static('getAll', function () {
    return new Promise(function (resolve, reject) {
        var _query = {};
        skate
            .find(_query)
            .exec(function (err, todos) {
            err ? reject(err)
                : resolve(todos);
        });
    });
});
skate_model_1.default.static('createNew', function (skate) {
    return new Promise(function (resolve, reject) {
        if (!_.isObject(skate)) {
            return reject(new TypeError('Todo is not a valid object.'));
        }
        var _something = new skate(skate);
        _something.save(function (err, saved) {
            err ? reject(err)
                : resolve(saved);
        });
    });
});
skate_model_1.default.static('removeById', function (id) {
    return new Promise(function (resolve, reject) {
        if (!_.isString(id)) {
            return reject(new TypeError('Id is not a valid string.'));
        }
        skate
            .findByIdAndRemove(id)
            .exec(function (err, deleted) {
            err ? reject(err)
                : resolve();
        });
    });
});
var skate = mongoose.model('skate', skate_model_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = skate;
