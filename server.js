const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const dotenv = require("dotenv")
dotenv.config()


require("./passport")
const cors = require("cors")

//json config
app.use(express.json())
//cors config
app.use(cors())


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