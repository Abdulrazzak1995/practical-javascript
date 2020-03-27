// it should have a function to display todos

var todos = ['item1' , 'item2' , 'item3'];

function displayTodos(){
    console.log(todos);
    displayTodos();
}

// it should have a function to add new todos.

function addTodo(todo){
todos.push(todo);
displayTodos();
}

// add new todos
addTodo('item4');
addTodo('item5');

// it should have s function to change a todo.

function changeTodo(position , newValue){
todos[position] = newValue;
displayTodos(); 
}
// change a todo
changeTodo(0, 'item 1 updated');

// it should have s function to delete todos.

function deleteTodo(position){
todos.splice(position ,1);
displayTodos();

}

// delete a todo
deleteTodo(1);