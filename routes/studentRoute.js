const express = require('express');
const router = express.Router();
const studentController = require('../controller/studentController');

//  router.get('/',(req,res,next)=>{
//     // res.send('hello students')
//     res.status(200).json({
//         message : 'reading the route ',
//         eroor:false,
//         status : 200,
//     })
//  })

 router.post('/register',studentController)


 module.exports = router
