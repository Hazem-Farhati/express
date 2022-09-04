const express = require('express')
const router = express.Router();

router.get("/contact",(req,res)=>{
    const date=new Date();
    const hours=date.getHours();
    if(hours>8 && hours<20){
        res.render("open");
    }else
    {
        res.render("clozed");
    }
});


module.exports = router;