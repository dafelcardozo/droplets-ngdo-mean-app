"use strict";

import * as express from 'express';
import {skateController} from '../controller/skate-controller';

export class skateRoutes {
  static init(router:express.Router) {
    router
      .route('/api/skate')
      .get(skateController.getAll)
      .post(skateController.createNew);

    router
      .route('/api/skate/:id')
      .delete(skateController.remove);
  }
}
