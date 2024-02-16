const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const session = require('express-session');
const passport = require("passport");
require("./passport")
const cors = require("cors")

//json config
app.use(express.json())
//cors config
app.use(cors())
//bodyParser config
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
//session config
app.use(session({
    secret: 'blog',
    resave: true,
    saveUninitialized: true
}));
//passport config(social media sign up)
app.use(passport.initialize());
app.use(passport.session());

//config database
const connectDB = require("./config/connectDB")
connectDB()
//routes
app.use("/api", require('./routes/userRoutes'))
app.use("/auth", require("./routes/auth"));
app.use("/api/blog", require("./routes/blogRoutes"))

//port config
const port= process.env.PORT || 8081
app.listen(port, (err)=> err ? console.log(err) : console.log("server is running on port :",port))