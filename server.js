const express = require('express')
const app = express()

//routers
const contact = require('./Router/contact')
const services = require('./Router/services')
const home = require('./Router/home')

app.set("view engine","ejs");

app.engine('ejs', require('ejs').__express);

app.use("/",contact);
app.use("/",services);
app.use("/",home);


app.get("/services",(req,res)=>{
    const date=new Date();
    const hours=date.getHours();
    if(hours>8 && hours<5){
        res.render("open");
    }else
    {
        res.render("clozed");
    }
});

app.get("/contact",(req,res)=>{
    const date=new Date();
    const hours=date.getHours();
    if(hours>8 && hours<20){
        res.render("open");
    }else
    {
        res.render("clozed");
    }
});

app.get("/home",(req,res)=>{
    res.render("home");

})








app.listen(5000)