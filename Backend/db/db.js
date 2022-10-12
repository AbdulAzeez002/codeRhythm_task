const mongoose=require('mongoose')
require('dotenv').config();
const mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
   
}).then(()=>{
    console.log('db connected');
}).catch((e)=>{
    console.log('db not connected');
})