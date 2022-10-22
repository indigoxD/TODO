console.log("hello world")

const fs = require('fs')

fs.appendFile('file.txt','writing to the file system! ',(error)=> {
    console.log(error);
});

console.log('running app.js');

const fs = require('fs');

const todos = require('./todos.js');

console.log(todos.addTodo());