const os = require('os');  //importing the os modules
const path  = require('path');  //IMPORTING THE PATH MODULES

let freeMem = os.freemem();  //this will show the free memory of your computer
let homeDirr = os.homedir('/home/mahir/Desktop/JAVASCRIPT/javascript_code');  //THIS WILL RETRUN THE HOME DIRECTOERY OF THE GIVEN FILE
let host = os.hostname();  //THIS WILL RETRUN THE HOST OF THE OS
let  type = os.type();  //THIS WILL RETURNS THE TYPE OF THE OS 

let path_baseName = path.basename('/home/mahir/Desktop/JAVASCRIPT/javascript_code');  //RETRURNS THE 

console.log(type);
console.log(host);
console.log(homeDirr);
console.log(freeMem)

console.log(path_baseName);