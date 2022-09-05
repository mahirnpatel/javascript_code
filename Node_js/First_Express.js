const express = require('express');

const app = express();
const port = 3000;

app.get('/' , (req , res)=>{

    res.send('Hello world');
});

app.get('/about' , (req , res)=>{
    
    res.send('This is the about webpage');
});

app.listen(port , ()=>{

    console.log(`For Going to that page click here , http://localhost:${port}`);
})