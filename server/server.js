const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser());
app.use(cors());

dotenv.config();

mongoose.connect(process.env.MONGO_DATABASE_URL)
.then((res)=>{
    console.log("we are connected to dataBase");
})
.catch((err) =>{
    console.log(err);
})



app.listen(5000, () =>{
    console.log("We are on our Server");
})
