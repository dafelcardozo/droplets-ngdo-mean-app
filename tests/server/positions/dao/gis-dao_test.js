var mongoose = require('mongoose');
var gisDAO = require(process.cwd() + '/server/api/positions/dao/gis-dao');
var expect = require('chai').expect;
var setupMongoose = require('../../_helpers/db').setupMongoose;

describe('gisDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    gisDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})
