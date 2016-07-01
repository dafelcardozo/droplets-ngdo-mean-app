"use strict";

import * as express from 'express';
import donorDAO from '../dao/donor-dao';

export class donorController {
  static getAll(req:express.Request, res:express.Response) {
    donorDAO
      ['getAll']()
      .then(donor => res.status(200).json(donor))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req:express.Request, res:express.Response) {
    let _donor = req.body;

    donorDAO
      ['createNew'](_donor)
      .then(donor => res.status(201).json(donor))
      .catch(error => {
        res.status(401).json(error);
        console.log("Error: "+error);
      });
  }

  static remove(req:express.Request, res:express.Response) {
    let _id = req.params.id;

    donorDAO
      ['removeById'](_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
  static find(req:express.Request, res:express.Response) {
    let _id = req.params.id;

    donorDAO
      ['removeById'](_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
