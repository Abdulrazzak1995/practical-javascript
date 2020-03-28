// todo liste
var todoList = {
    todos :[],
    displayTodos : function() {
        // displayTodos shouild show todoText 
        console.log('I need to:', this.todos);
        // displayTodos should tell you if todos is empty
        if(this.todos.length === 0){
            console.log('Your todo liste is empty');
        }else{
            console.log('My todos :');
            for(var i=0 ; i<this.todos.length ; i++){
                // displayTodos should show completed
  if(this.todos[i].completed ===true){
      console.log('(x)' , this.todos[i].todoText);
  }else{
      console.log('()' , this.todos[i].todoText);
     }
            }
        }
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
    todoList.addTodo('item 1');
    todoList.addTodo('item 2');
    todoList.addTodo('item 3');
    todoList.addTodo('item 4');
    todoList.toggleCompleted(0);
    todoList.toggleCompleted(1);