"use strict";
var mongoose = require('mongoose');
var Promise = require('bluebird');
var donor_model_1 = require('../model/donor-model');
var _ = require('lodash');
donor_model_1.default.static('getAll', function () {
    return new Promise(function (resolve, reject) {
        var _query = {};
        donor
            .find(_query)
            .exec(function (err, donors) {
            err ? reject(err)
                : resolve(donors);
        });
    });
});
donor_model_1.default.static('createNew', function (donor) {
    return new Promise(function (resolve, reject) {
        if (!_.isObject(donor)) {
            return reject(new TypeError('Todo is not a valid object.'));
        }
        var _something = new donor(donor);
        _something.save(function (err, saved) {
            err ? reject(err)
                : resolve(saved);
        });
    });
});
donor_model_1.default.static('removeById', function (id) {
    return new Promise(function (resolve, reject) {
        if (!_.isString(id)) {
            return reject(new TypeError('Id is not a valid string.'));
        }
        donor
            .findByIdAndRemove(id)
            .exec(function (err, deleted) {
            err ? reject(err)
                : resolve();
        });
    });
});
var donor = mongoose.model('donor', donor_model_1.default);
var donorDAO = donor;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = donorDAO;
