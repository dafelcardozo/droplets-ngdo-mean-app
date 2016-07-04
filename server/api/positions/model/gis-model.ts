"use strict";

import * as mongoose from 'mongoose';

var _gisSchema = new mongoose.Schema({
  longitude: {type: Number, required: true, trim: true},
  latitude: {type: Number, required: true, trim: true},
  coordinateSystem: {type: String, required: true, trim: true},
  createdAt: {type: Date, default: Date.now},
  object:{type: String, required: true, trim: true}
})

export default (_gisSchema);
