const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const cons=require('consolidate');
const dust=require('dustjs-helpers'); //Using dust for server side rendering
const pg=require('pg');
require("dotenv").config();

const app=express();


app.engine('dust',cons.dust);
app.set('view engine','dust');
app.set('views',__dirname + '/views');

app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Setting up the routers
var router=require('./routes/members.js');
var otherroutes=require('./routes/others.js');

app.use(router);
app.use(otherroutes);



app.listen(process.env.PORT, function(err){
    if (err) console.log("Error in server setup", err)
    console.log("Server listening on Port", process.env.PORT);
})

