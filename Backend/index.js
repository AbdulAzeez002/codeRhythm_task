const express=require('express')
const router = require('./routes/contactRoute')
const app=express()
const connectDB=require('./db/db')
const dotenv=require('dotenv')

// middleware
app.use(express.json())

app.use('/api/formSubmit',router)
console.log('hyy')


app.listen(5000,console.log('server running on port 5000'))