const http = require("http");
const fs = require("fs");
const { json } = require("express");

const port = 5000;
const server = http.createServer((req , res)=>{

    if(req.url == "/"){
        res.statusCode = 200;
        res.setHeader("Content-Type","text/html");
        res.end(`<h1>You are in the /(slash) path </h1>`);
        
    }else if (req.url == "/callApi"){
        
        res.statusCode = 200;
        res.setHeader("Content-Type","text/html");
        const data = fs.readFileSync('student_info.json');

        var obj  = JSON.parse(data);  //this is the way to convert/parse the data into object

        console.log(obj.Student_info[0].id);
        console.log(obj.Student_info[0].name);

        res.end("Output is printed in the console");
    }
});

server.listen(port , ()=>{

    console.log(`Server is listening on the port : ${port}`);
    console.log(`http://localhost:${port}`);
})