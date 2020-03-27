// it should sotre the todos array on an object.
var todoList = {

todos :['item 1' ,'item 2' ,'item 3'],

// it should have a function to display todos.

displayTodos: function (){
console.log('My todos:', this.todos);

},

// it should have an addTodo method

addTodo: function(todo){
this.todos.push(todo);
this.displayTodos();
},


// it should have a changeTodo method

changeTodo: function(position , newValue){
this.todos[position] = newValue;
this.displayTodos();

},

// it should have a deleteTodo method

deleteTodo: function(position){
this.todo.splice(position , 1);
this.displayTodos();
},
};
todoList.displayTodos();

// for add new todos

todoList.addTodo('item 4');
todoList.addTodo('item 5');

// for change a todo
todoList.changeTodo(0 , 'item 1 update');

// for delete a todo

todoList.deleteTodo(1);