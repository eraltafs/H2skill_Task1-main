const express=require("express")
const cors=require("cors")

const app=express()

require("dotenv").config()

const {connection}=require("./config/db")
const { teamRouter } = require("./routes/team.Routes")

app.use(cors())
app.use(express.json())


// base api
app.get("/",(req,res)=>{
    res.send("Base Api")
})
// get data base api
app.use("/getdata",teamRouter)


app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log("Connected to DB")
    } catch (error) {
        console.log(error)
        console.log("Something wrong with data base")
    }
    console.log(`Server is running on ${process.env.port}`)
})