"use strict";

import * as mongoose from 'mongoose';
import * as Promise from 'bluebird';
import skateSchema from '../model/skate-model' ;
import * as _ from 'lodash';

skateSchema.static('getAll', () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    skate
    .find(_query)
    .exec((err, todos) => {
      err ? reject(err)
      : resolve(todos);
    });
  });
});

skateSchema.static('createNew', (skate) => {
  return new Promise((resolve, reject) => {
      if (!_.isObject(skate)) {
        return reject(new TypeError('Todo is not a valid object.'));
      }

      let _something = new skate(skate);

      _something.save((err, saved) => {
        err ? reject(err)
        : resolve(saved);
      });
  });
});

skateSchema.static('removeById', (id) => {
  return new Promise((resolve, reject) => {
      if (!_.isString(id)) {
        return reject(new TypeError('Id is not a valid string.'));
      }

      skate
      .findByIdAndRemove(id)
      .exec((err, deleted) => {
        err ? reject(err)
        : resolve();
      });
    });
});

let skate = mongoose.model('skate', skateSchema);

export default skate;
