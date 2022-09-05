const getCallBack = (req , res) => {

    res.send('Hello from the node js');
}

//when we export the varible than it will import as an object and if we want to acess the function or variable we have to use by the dot operator
module.exports  = {
    getCallBack
}