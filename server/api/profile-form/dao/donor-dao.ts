"use strict";

import * as mongoose from 'mongoose';
import * as Promise from 'bluebird';
import donorSchema from '../model/donor-model';
import * as _ from 'lodash';

donorSchema.static('getAll', () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    Donor
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
      let _something = new Donor(donor);

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

      Donor
      .findByIdAndRemove(id)
      .exec((err, deleted) => {
        err ? reject(err)
        : resolve();
      });
    });
});

let Donor  = mongoose.model('Donor', donorSchema);
let donorDAO = Donor;
//export default donor ;
export default donorDAO ;
