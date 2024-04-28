const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const cors = require("cors")

const authRoutes = require("./routes/auth")

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

// Routes
app.use("/auth",authRoutes)


  
// mongose setup 
const PORT = 4000
mongoose.connect(process.env.MONGO_URL,{
    dbName:"home_rentail"
}) 
.then(()=>{
    app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
    })
})
.catch((error)=>{console.log(`${error} did not connect`)})