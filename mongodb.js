const mongoose = require('mongoose');
mongoose.connect(process.env.dbUrl,{
    useNewUrlParser : true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('connected to db');
}).catch((err)=>{
    console.log(err);
    console.log(' not connected to db');
})