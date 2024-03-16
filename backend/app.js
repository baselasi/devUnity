const express = require('express')
const app = express()
const mongoose = require("mongoose")
const bodyParse = require("body-parser")
const cookiesParser = require("cookie-parser")
require('dotenv').config();
const morgan = require("morgan")
const cors = require("cors")
const Project =require("./models/projects/projectModle")

app.use((morgan("dev")))
app.use(bodyParse.json())
app.use(cookiesParser())
//connect to database
mongoose.connect("mongodb+srv://bassel:basseltestapp@test.nhj585q.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("sucess to connect to mongodb"))
.catch((err)=>console.log(err))





const userRouter = require("./routes/user") 
const taskRouter = require("./routes/tasksRouters/taskRouter")
const columnRouter = require("./routes/tasksRouters/columnRouter")
const projectRouter = require("./routes/projectRoutes/projectRoute")

const port = 4000
app.use(cors())



app.use("/api",userRouter)

const {checkAuthentication} = require("./utility/checkAuthentication")

//*PROCTED ROUTES*//
app.use(checkAuthentication)
app.use("/api",projectRouter)
app.use("/api",taskRouter)
app.use("/api",columnRouter)

app.listen(port, () => {
  console.log(`hello  ${port}`)
})

