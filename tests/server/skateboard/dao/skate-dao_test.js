var mongoose = require('mongoose');
var skateDAO = require(process.cwd() + '/server/api/skateboard/dao/skate-dao');
var expect = require('chai').expect;
var setupMongoose = require('../../_helpers/db').setupMongoose;

describe('skateDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    skateDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})
