const mongoose = require("mongoose")

const collection_2_Schema = mongoose.Schema({
    full_name: String,
    email: String,
    team_name: String,
  });
const Collection2Modal = mongoose.model('collection2', collection_2_Schema);  


module.exports = { Collection2Modal }