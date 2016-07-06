"use strict";

import * as express from 'express';
import {donorController} from '../controller/donor-controller';

export class donorRoutes {
  static init(router:express.Router) {
    router
      .route('/api/donor/:id')
      .get(donorController.findById);
      //.delete(donorController.find)
      ;
    router
      .route('/api/donor')
      .get(donorController.getAll)
      .post(donorController.createNew);


  }
}
