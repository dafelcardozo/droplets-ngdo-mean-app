"use strict";
var gis_dao_1 = require('../dao/gis-dao');
var gisController = (function () {
    function gisController() {
    }
    gisController.getAll = function (req, res) {
        gis_dao_1.default['getAll']()
            .then(function (gis) { return res.status(200).json(gis); })
            .catch(function (error) { console.info("error: " + error); res.status(400).json(error); });
    };
    gisController.createNew = function (req, res) {
        var _gis = req.body;
        gis_dao_1.default['createNew'](_gis)
            .then(function (gis) { return res.status(201).json(gis); })
            .catch(function (error) { console.info("error: " + error); res.status(400).json(error); });
    };
    gisController.removeById = function (req, res) {
        var _id = req.params.id;
        gis_dao_1.default['removeById'](_id)
            .then(function () { return res.status(200).end(); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    return gisController;
}());
exports.gisController = gisController;
