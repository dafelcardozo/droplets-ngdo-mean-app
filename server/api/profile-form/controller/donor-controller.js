"use strict";
var donor_dao_1 = require('../dao/donor-dao');
var donorController = (function () {
    function donorController() {
    }
    donorController.getAll = function (req, res) {
        donor_dao_1.default['getAll']()
            .then(function (donor) { return res.status(200).json(donor); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    donorController.createNew = function (req, res) {
        var _donor = req.body;
        donor_dao_1.default['createNew'](_donor)
            .then(function (donor) { return res.status(201).json(donor); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    donorController.remove = function (req, res) {
        var _id = req.params.id;
        donor_dao_1.default['removeById'](_id)
            .then(function () { return res.status(200).end(); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    donorController.find = function (req, res) {
        var _id = req.params.id;
        donor_dao_1.default['removeById'](_id)
            .then(function () { return res.status(200).end(); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    return donorController;
}());
exports.donorController = donorController;
