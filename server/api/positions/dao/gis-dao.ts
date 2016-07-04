"use strict";

import * as mongoose from 'mongoose';
import * as Promise from 'bluebird';
import gisSchema from '../model/gis-model';
import * as _ from 'lodash';

gisSchema.static('getAll', () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    Gis
    .find(_query)
    .exec((err, todos) => {
      err ? reject(err)
      : resolve(todos);
    });
  });
});

gisSchema.static('createNew', gis => {
  return new Promise((resolve, reject) => {
      if (!_.isObject(gis)) {
        return reject(new TypeError('Todo is not a valid object.'));
      }

      let _something = new Gis(gis);

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

      Gis
      .findByIdAndRemove(id)
      .exec((err, deleted) => {
        err ? reject(err)
        : resolve();
      });
    });
});

let Gis = mongoose.model('Gis', gisSchema);

export default Gis;
