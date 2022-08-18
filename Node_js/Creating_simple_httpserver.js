const http = require('http');

let port = 3000;

const server = http.createServer((req , res)=>{
    res.statusCode = 200;  //set the status code 
    res.setHeader("Content-Type","Text/html"); //set the header 
    res.end(`<h1>This is just the try of creating the server and listening on the particular port number </h1>`);  //set the response 
})

//we have to call the listen function which take the port and the call back as an argument in which callback runs when the listen function runs successfully without getting error
server.listen(port , ()=>{

    console.log(`server is listening on the port number ${port}`);
})