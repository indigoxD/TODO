console.log("hello world")

const fs = require('fs')

fs.appendFile('file.txt','writing to the file system! ',(error)=> {
    console.log(error);
});

console.log('Data has been written to file.txt');