"use strict";

import * as mongoose from 'mongoose';
import * as Promise from 'bluebird';
import gisSchema from '../model/gis-model';
import * as _ from 'lodash';

gisSchema.static('getAll', () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    gis
    .find(_query)
    .exec((err, todos) => {
      err ? reject(err)
      : resolve(todos);
    });
  });
});

gisSchema.static('createNew', (gis) => {
  return new Promise((resolve, reject) => {
      if (!_.isObject(gis)) {
        return reject(new TypeError('Todo is not a valid object.'));
      }

      let _something = new gis(gis);

      _something.save((err, saved) => {
        err ? reject(err)
        : resolve(saved);
      });
  });
});

gisSchema.static('removeById', (id) => {
  return new Promise((resolve, reject) => {
      if (!_.isString(id)) {
        return reject(new TypeError('Id is not a valid string.'));
      }

      gis
      .findByIdAndRemove(id)
      .exec((err, deleted) => {
        err ? reject(err)
        : resolve();
      });
    });
});

let gisModel = mongoose.model('gis', gisSchema);

export default gisModel;
