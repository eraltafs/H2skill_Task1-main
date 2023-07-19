const mongoose=require("mongoose");
require("dotenv").config()

// connecting to mongoose
const connection=mongoose.connect(process.env.mongoUrl)


module.exports={connection}