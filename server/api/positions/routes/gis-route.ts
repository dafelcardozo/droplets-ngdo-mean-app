"use strict";

import * as express from 'express';
import {gisController} from '../controller/gis-controller';

export class gisRoutes {
  static init(router:express.Router) {
    router
      .route('/api/positions')
      .get(gisController.getAll)
      .post(gisController.createNew);

    router
      .route('/api/positions/:id')
      .delete(gisController.removeById);
  }

}
