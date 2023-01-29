require("dotenv").config()
const mongoose = require("mongoose")
const config = {useNewUrlParser: true, useUnifiedTopology: true}
const {DATABASE_URL} = process.env

//////////////////////
/// connect to mongo
/////////////////////
mongoose.connect(DATABASE_URL, config);

////////////////////
/// Events
///////////////////
mongoose.connection
  .on("open", () => console.log("Your are connected to mongoose"))
  .on("close", () => console.log("Your are disconnected from mongoose"))
  .on("error", (error) => console.log(error));

  module.export = mongoose