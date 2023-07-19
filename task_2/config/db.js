const mongoose = require("mongoose")
require("dotenv").config()

// connecting to db of mongoose
const connection = mongoose.connect(process.env.mongoURL)

module.exports = {connection}