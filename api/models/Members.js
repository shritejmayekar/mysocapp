const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Member = new Schema({
  person_name: {
    type: String
  },
  occupation_name: {
    type: String
  },
  mobile_number: {
    type: Number
  }
},{
    collection: 'member'
});

module.exports = mongoose.model('Member', Member);