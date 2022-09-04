const express = require('express')
const router = express.Router();



router.get("/services",(req,res)=>{
    const date=new Date();
    const hours=date.getHours();
    if(hours>8 && hours<5){
        res.render("open");
    }else
    {
        res.render("clozed");
    }
});



module.exports = router;