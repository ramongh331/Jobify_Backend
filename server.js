// dependencies
require("dotenv").config();
const { PORT, NODE_ENV, DATABASE_URL } = process.env;
const express = require("express");
const app = express();
const mongoose = require("./db/conn");
const cors = require("cors");
const morgan = require("morgan");
const corsOptions = require("./config/cors")
const authRouter = require("./controllers/user")
const postRouter = require("./controllers/posts")
const auth = require("./auth/index")



// Register Middleware
app.use(NODE_ENV === "production" ? cors(corsOptions) : cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.static("public"))
app.use(express.urlencoded({extended:false}))






//--------------------------------------
// routes
//--------------------------------------

app.get("/", auth, (req, res) => {
  res.json(req.payload)
})

app.use("/auth", authRouter)

app.use("/posts", postRouter)

// app.get("/", (req, res) => {
//     res.send("hello world");
//   });
  




  // listener
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));