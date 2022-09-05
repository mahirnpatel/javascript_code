const express = require('express');

const app = express();

const getModule = require('./routes_or_callbackFunction_module');
app.get("/", getModule.getCallBack );

const port  = 3000;

app.listen(port , ()=>{

    console.log("Port is Running");
})