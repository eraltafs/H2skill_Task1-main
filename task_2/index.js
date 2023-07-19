const express = require("express")
const cors = require("cors")
require("dotenv").config()



const app = express()
app.use(cors())
app.use(express.json())

const Port = process.env.port


const {videoRouter} = require('./routes/video.Routes');
const {searchRouter} = require('./routes/search.Routes');
const {fetchLatestVideos} = require('./routes/fetchVideo.Routes');

const {connection} = require("./config/db")

app.get("/",(req,res)=>{
    res.send("Base API")
})

app.use('/videos', videoRouter);
app.use('/search', searchRouter);

// setInterval(fetchLatestVideos, 10000); // Fetch every 10 seconds

app.listen(Port,async ()=>{
    try {
        await connection
        console.log("db is connected")
    } catch (error) {
        console.log("error.message")
    }
    console.log(`server is running on port ${Port}`)
})
