const mongoose = require("mongoose")

const collection_1_Schema = mongoose.Schema({
    full_name: String,
    email: String,
    number: String,
    city: String,
    url: String,
  },{
    versionKey:false
  });

const Collection1Modal = mongoose.model('collection1', collection_1_Schema);

module.exports = { Collection1Modal }