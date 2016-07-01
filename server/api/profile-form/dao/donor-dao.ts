"use strict";

import * as mongoose from 'mongoose';
import * as Promise from 'bluebird';
import donorSchema from '../model/donor-model';
import * as _ from 'lodash';

donorSchema.static('getAll', () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    donor
    .find(_query)
    .exec((err, donors) => {
      err ? reject(err)
      : resolve(donors);
    });
  });
});

donorSchema.static('createNew', (donor) => {
  return new Promise((resolve, reject) => {
      if (!_.isObject(donor)) {
        return reject(new TypeError('Todo is not a valid object.'));
      }

      let _something = new donor(donor);

      _something.save((err, saved) => {
        err ? reject(err)
        : resolve(saved);
      });
  });
});

donorSchema.static('removeById', (id) => {
  return new Promise((resolve, reject) => {
      if (!_.isString(id)) {
        return reject(new TypeError('Id is not a valid string.'));
      }

      donor
      .findByIdAndRemove(id)
      .exec((err, deleted) => {
        err ? reject(err)
        : resolve();
      });
    });
});

let donor  = mongoose.model('donor', donorSchema);
let donorDAO = donor;
//export default donor ;
export default donorDAO ;
