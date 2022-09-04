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


app.listen(5000)