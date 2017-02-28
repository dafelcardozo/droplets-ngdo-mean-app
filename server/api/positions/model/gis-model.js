"use strict";
var mongoose = require('mongoose');
var _gisSchema = new mongoose.Schema({
    longitude: { type: Number, required: true, trim: true },
    latitude: { type: Number, required: true, trim: true },
    coordinateSystem: { type: String, required: true, trim: true },
    createdAt: { type: Date, default: Date.now },
    object: { type: String, required: true, trim: true }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (_gisSchema);
