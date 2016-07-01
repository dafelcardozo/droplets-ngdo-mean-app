var mongoose = require('mongoose');
var donorDAO = require(process.cwd() + '/server/api/profile-form/dao/donor-dao');
var expect = require('chai').expect;
var setupMongoose = require('../../_helpers/db').setupMongoose;

describe('donorDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    donorDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})
