const fs = require('fs');

//THIS FUNCTION IS USED TO READ THE EXISITING FILE AND IT IS NOT CREATE THE FILE
//IT TAKES THE CALLBACK FUNCTION WHICH CONTAINS THE ERROR AND DATA IF THERE WILL ANY ERROR THAN IT PRINTS ERROR OR ELSE IT WILL PRINT null

fs.readFile('file.txt' , 'utf-8' , (err , data)=>{

    console.log(err , data);
})

//THIS IS ALSO USED TO READ THE CONTENT OF THE FILE
let a = fs.readFileSync('file3.txt');
console.log(a.toString());   


//THIS IS THE Asynchronous FUNCTION USED FOR WRITE INTO THE FILE
fs.writeFile("test2.txt","I am writing into the test name file",()=>{

    console.log("Written succesfully");
});

//SYNCHRONOUS FUNCTION USED FOR WRITE INTO THE FILE
const b = fs.writeFileSync("text2","I am writing again");
console.log(b);
