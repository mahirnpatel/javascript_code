//WATCH FUNCTION CHECKS THE ANY FILE AND IF IT CHANGE THAN IT WILL GIVE THE REPONSE IN THE CONSOLE USING THE CALLACK FUNCTION 

//IMPORTING THE FILE MODULE
const fs = require('fs');
const fileName = 'testFile.txt';

fs.watch(fileName , () => console.log("File is updated"));