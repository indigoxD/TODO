console.log('running todos.js');

/*module.exports.addTodo = () => {
    return 'new Todo created.';
};*/


console.log('starting todos.js');

const fs = require('fs');

// add a todo item //
var addTodo = (title) => {
    var todos =[];
    var todo ={
        title
    };

    try{
        var todosString = fs.readFileSync('todos-data.json');
        todos = JSON.parse(todosString);
    } catch (e) {

    }

    var duplicatetodos = todos.filter((todo) => todo.title === title);
    if(duplicatetodos.length === 0){
        todos.push(todo);
        fs.writeFileSync('todos-data.json', JSON.stringify(todos));
    }

    
};

// delete a todo item //

var deleteTodo = (title) =>{
    var todos = fetchTodos();
    var filteredtodos = todos.filter((todo) => todo.title !== title);
    saveTodos(filteredtodos);

    return todos.length !== filteredtodos.length;
};

// list all todo items //
var listTodos = () =>{
    return fetchTodos();
};

// utility functions
var fetchTodos = () =>{
    try{
        var todosString = fs.readFileSync('todos-data.json');
        return JSON.parse(todosString);
    }catch(e){
        return[];
    }
};

//read a todo item //
var readTodo = (title) => {
    var todos = fetchTodos();
    var filteredtodos = todos.filter((todo) => todo.title === title);
    return filteredtodos[0];
}

var saveTodos = (todos) => {
    fs.writeFileSync('todos-data.json', JSON.stringify(todos));
};

var logTodo = (todo) =>{
    console.log('------');
    console.log('Its title is: ${todo.title}');
};

module.exports ={
        addTodo,
        deleteTodo,
        fetchTodos,
        readTodo,
        logTodo
        
    };