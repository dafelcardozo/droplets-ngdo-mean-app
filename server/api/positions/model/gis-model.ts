"use strict";

import * as mongoose from 'mongoose';

var _gisSchema = new mongoose.Schema({
  somethingSomething: {type: String, required: true, trim: true},
  createdAt: {type: Date, default: Date.now}
})

export default (_gisSchema);
