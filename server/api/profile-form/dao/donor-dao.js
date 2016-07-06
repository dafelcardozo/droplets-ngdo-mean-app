"use strict";
var mongoose = require('mongoose');
var Promise = require('bluebird');
var donor_model_1 = require('../model/donor-model');
var _ = require('lodash');
donor_model_1.default.static('getAll', function () {
    return new Promise(function (resolve, reject) {
        var _query = {};
        Donor
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
        var _something = new Donor(donor);
        _something.save(function (err, saved) {
            err ? reject(err)
                : resolve(saved);
        });
    });
});
var Donor = mongoose.model('Donor', donor_model_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Donor;
//# sourceMappingURL=donor-dao.js.map