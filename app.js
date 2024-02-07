const express = require('express');
const app = express();
require('dotenv').config();
require('./mongodb');
const portNo = 4123

//appliaction middle ware
app.use(express.json());
app.use(express.urlencoded({extended :true}))

//import cors
const cors = require('cors');
app.use(cors());

const studentroute = require('./routes/studentRoute');
app.use('/student',studentroute);

app.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'Page not found',
    })
})

app.listen(portNo,()=>{
    console.log(`server is listen at ${portNo}`)
})
