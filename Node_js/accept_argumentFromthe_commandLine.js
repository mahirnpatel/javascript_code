//forEach function is used for the iteration in the express js
process.argv.forEach((val, index) => {
  console.log(`${index} : ${val}`);
});

const arguments = process.argv.slice(2);
console.log(arguments[0]);
console.log(arguments);

