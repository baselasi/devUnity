const express = require('express')
const app = express()
const mongoose = require("mongoose")
const bodyParse = require("body-parser")
const cookiesParser = require("cookie-parser")
require('dotenv').config();
const morgan = require("morgan")
const cors = require("cors")


app.use((morgan("dev")))
app.use(bodyParse.json())
app.use(cookiesParser())
//connect to database
mongoose.connect("mongodb+srv://bassel:basseltestapp@test.nhj585q.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("sucess to connect to mongodb"))
.catch((err)=>console.log(err))

const userRouter = require("./routes/user") 

const port = 3000

app.use("/api",userRouter)

app.listen(port, () => {
  console.log(`hello  ${port}`)
})

