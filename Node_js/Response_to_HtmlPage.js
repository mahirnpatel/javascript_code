const http = require("http");
const express = require("express");

const app = express();

const port = 4000;
app.get("/", (req, res) => {
    // console.log(req.query);
  res.statusCode = 200;
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Content-Type", "text/html");
  res.send("Mahir Narendrabhai Patel");
});


app.listen(port, () => {
  console.log(`server is listening on port number : ${port}`);
});
