const Post = require("../models/contactModel");

const createForm=async(req,res)=>{
const {email,name,message}=req.body

    try {
         const form=await Post.create({
             name,email,message
         })
         res.json(form)
    } catch (error) {
        res.json('error')
    }
}

module.exports={createForm}