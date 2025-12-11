const fs = require('fs');

console.log("1");

//sync
const result = fs.readFileSync('file.txt', 'utf8');
console.log(result);

console.log("2");


// ...............................................


console.log("1");

//async
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err); 
  }
  else {
    console.log("File read successfully");
  }
    console.log(data);
});

console.log("2");

