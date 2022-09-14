const express=require('express');
const otherroutes=express.Router();

otherroutes.get('/*',(req,res)=>{
    res.send('There is no such route in this application');
})

module.exports=otherroutes;