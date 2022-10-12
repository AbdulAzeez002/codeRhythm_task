const express=require('express');
const { createForm } = require('../controllers/contactController');
const router=express.Router()

router.post('/',createForm)


module.exports=router;