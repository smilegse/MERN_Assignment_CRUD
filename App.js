const express =require('express');
const app= new express();
const router =require('./src/route/api');
const rateLimit =require('express-rate-limit');
const helmet =require('helmet');
const hpp =require('hpp');
const cors =require('cors');
const cookieParser = require('cookie-parser');
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require('dotenv').config()

//console.log(dotenv.parsed);

app.use(cookieParser());
app.use(cors())
app.use(helmet())
app.use(hpp())

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

const limiter= rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)


// Database Connection



//process.dotenv.URI

// Database connection comes from .env file
let OPTION = {user: process.env.DB_USER, pass: process.env.DB_PASS, autoIndex: true};
mongoose.connect(process.env.MONGODB_URI+process.env.DB_NAME, OPTION).then((res)=>{
    console.log('DB Connection Success');
}).catch((err)=>{
    console.log(err);
})


app.set('etag', false);

app.use("/api",router)

app.use(express.static('client/dist'));
// Add React Front End Routing
app.get('*',function (req,res) {
    res.sendFile(path.resolve(__dirname,'client','dist','index.html'))
})


module.exports=app;