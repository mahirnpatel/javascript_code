//THIS IS HOW TO EXTRACT THE ONLY METHOD WHICH WE NEED TO USE FROM THE OBJECT 
let { add } = require("./function");

let result  = add(4,5);

console.log("The result is : ",result);