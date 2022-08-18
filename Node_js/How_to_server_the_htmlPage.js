
const console = require('console');
const fs = require('fs');
const http = require('http');

let port = 3000;

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.statusCode = 200;  //set the status code 
    res.setHeader("Content-Type", "Text/html"); //set the header 

    if (req.url == '/') {

        res.statusCode = 200;
        res.end(`<h1>This is just the try of creating the server and listening on the particular port number </h1>`);  //set the response 

    } else if (req.url == '/about') {

        res.statusCode = 200;
        res.end(`<h1>This is just the try of creating the server and listening on the About URL port number </h1>`);  //set the response 

    } else if (req.url == '/weather') {

        const data = fs.readFileSync('Project/weather_app.html');
        res.end(data.toString());
    } else {

        res.statusCode = 404;
        res.end(`<h1>ERROR : 404 </h1><p>Fucking page not found</p>`);
    }


});

server.listen(port, () => {

    console.log(`${port} number is listening`);
})