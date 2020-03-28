// todo liste
var todoList = {
todos :[],
displayTodos : function() {
    console.log('I need to:', this.todos);
},
// add todo

addTodo : function(todoText){
this.todos.push({
todoText: todoText,
completed : false
});
this.displayTodos();
},

// change todo

changeTodo: function(position , todoText){
this.todo[position].todoText = todoText;
this.displayTodos();
},
// delete todo

deleteTodo : function(position){
this.todos.splice(position ,1);
this.displayTodos();
},

toggleCompleted: function(position){
var todo = this.todos[position];
todo.completed = ! todo.completed;
this.displayTodos();
}
};

todoList.displayTodos();
todoList.addTodo('Boolean testing');
todoList.toggleCompleted(0);