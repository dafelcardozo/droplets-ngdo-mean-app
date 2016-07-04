"use strict";

import * as express from 'express';
import GisDAO from '../dao/gis-dao';

export class gisController {
  static getAll(req:express.Request, res:express.Response) {
    GisDAO
      ['getAll']()
      .then(gis => res.status(200).json(gis))
      .catch(error => {console.info("error: "+error);res.status(400).json(error)});
  }

  static createNew(req:express.Request, res:express.Response) {
    let _gis = req.body;

    GisDAO
      ['createNew'](_gis)
      .then(gis => res.status(201).json(gis))
      .catch(error => {console.info("error: "+error);res.status(400).json(error)});
  }

  static removeById(req:express.Request, res:express.Response) {
    let _id = req.params.id;

    GisDAO
      ['removeById'](_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
