"use strict";
var skate_dao_1 = require('../dao/skate-dao');
var skateController = (function () {
    function skateController() {
    }
    skateController.getAll = function (req, res) {
        skate_dao_1.skateDAO['getAll']()
            .then(function (skate) { return res.status(200).json(skates); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    skateController.createNew = function (req, res) {
        var _skate = req.body;
        skate_dao_1.skateDAO['createNew'](_skate)
            .then(function (skate) { return res.status(201).json(skate); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    skateController.remove = function (req, res) {
        var _id = req.params.id;
        skate_dao_1.skateDAO['removeById'](_id)
            .then(function () { return res.status(200).end(); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    return skateController;
}());
exports.skateController = skateController;
