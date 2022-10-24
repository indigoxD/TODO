
//  writing text to files
/*console.log("hello world")

const fs = require('fs')

fs.appendFile('file.txt','writing to the file system! ',(error)=> {
    console.log(error);
});

console.log('Data has been written to file.txt);
*/

// exporting from otherfiles
/*
console.log('running app.js');
const _ = require('lodash');
const todos = require('./todos.js');

console.log(todos.addTodo());
*/

// getting user input

/*console.log('Running app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const todos = require('./todos.js');

const args = yargs.argv;

console.log(args.todo);

console.log('You ran the command: '+ args._[0]);*/

console.log('running app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const todos = require('./todos.js')

const argv = yargs.argv;
var command = argv._[0];

console.log('Running command: ', command);

if(command === 'addTodo'){
    todos.addTodo(argv.title);
}else if (command == 'deleteTodo'){
    var todoDeleted = todos.deleteTodo(argv.title);
    var message = todoDeleted ? 'Todo was Deleted' : 'Todo not found';
    console.log(message);
}else if (command === 'readTodo'){
    var todo = todos.readTodo(argv.title);
    if(todo){
        console.log('Great the Todo was found.');
        todos.logTodo(todo);
    }else{
        console.log('Whoops! the todo was not found.')
    }
}else if(command === 'listTodos'){
    var allTodos = todos.listTodos();
    console.log(`Printing ${allTodos.length} todo(s).`);
    allTodos.forEach((todo) => todos.logTodo(todo));
}else{
    console.log('invalid command.');
}