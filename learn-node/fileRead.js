var fs=require("fs");
// Read File with call back function for non blocking I/O
fs.readFile('file/input.txt',function(err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});
console.log("My first program for Non Blocking I/O");
