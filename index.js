
const express =require('express')
const mongoose = require('mongoose');
require('dotenv').config()
const cors = require('cors');


const dburl = process.env.MONGOURL;
mongoose.connect(dburl)
const app = express()
const port = process.env.PORT;
app.use(express.json())
app.use(cors())


app.get('/',(req,res)=>{
    res.end("Welcome to Solo Traveller Test Branch")
})




  
app.listen(port,()=>{
    console.log("Working ", port)
})

