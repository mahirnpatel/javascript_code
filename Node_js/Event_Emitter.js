const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
// console.log(MyEmitter.);
const myEmitter = new MyEmitter();

myEmitter.on('WaterFull', () => {
  console.log('Please swtich of the motor!!');

  setTimeout(()=>{
    console.log("Gentle reminder again for switching of the motor");
  },3000);
});
myEmitter.emit('WaterFull');

console.log("Script is running ");