"use strict";

import * as express from 'express';
import {skateDAO} from '../dao/skate-dao';

export class skateController {
  static getAll(req:express.Request, res:express.Response) {
    skateDAO
      ['getAll']()
      .then(skate => res.status(200).json(skates))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req:express.Request, res:express.Response) {
    let _skate = req.body;

    skateDAO
      ['createNew'](_skate)
      .then(skate => res.status(201).json(skate))
      .catch(error => res.status(400).json(error));
  }

  static remove(req:express.Request, res:express.Response) {
    let _id = req.params.id;

    skateDAO
      ['removeById'](_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
