"use strict";

import * as mongoose from 'mongoose';

var _donorSchema = new mongoose.Schema({
  created: {
    type: Date,
    default: Date.now
  },
  firstName: {
    type: String,
    default: '',
    trim: true,
    required: 'Please give us your name',
    validate: [v => v.length <= 50, 'name must be 50 chars in length or less']
  },
  lastName: {
    type: String,
    default: '',
    trim: true,
    required: 'Please give us your last name',
    validate: [v => v.length <= 50, 'name must be 50 chars in length or less']
  },
  emailAddress: {
    type: String,
    default: '',
    trim: true,
    required: 'Your email is mandatory'
  },
  contactNumber: {
    type: String,
    default: '',
    trim: true,
    required: 'Yes, we mandatory request your phone contact number',
  },
  bloodGroup: {
    type:String,
    trim:true,
    required:'Your blood group is very important for us'
  }
})

export default (_donorSchema);
