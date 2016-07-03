"use strict";

import * as express from 'express';
import {gisDAO} from '../dao/gis-dao';

export class gisController {
  static getAll(req:express.Request, res:express.Response) {
    gisDAO
      ['getAll']()
      .then(gis => res.status(200).json(giss))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req:express.Request, res:express.Response) {
    let _gis = req.body;

    gisDAO
      ['createNew'](_gis)
      .then(gis => res.status(201).json(gis))
      .catch(error => res.status(400).json(error));
  }

  static remove(req:express.Request, res:express.Response) {
    let _id = req.params.id;

    gisDAO
      ['removeById'](_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
