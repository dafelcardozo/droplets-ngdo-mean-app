"use strict";

import * as express from 'express';
import {gisController} from '../controller/gis-controller';

export class gisRoutes {
  static init(router:express.Router) {
    router
      .route('/api/gis')
      .get(gisController.getAll)
      .post(gisController.createNew);

    router
      .route('/api/gis/:id')
      .delete(gisController.removeById);
  }
}
