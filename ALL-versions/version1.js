//  it should have a place to store todos.
var todos = ['item1' , 'item2' , 'item3' ];

// it should have a place to display todos.
console.log('Mytodos :', todos );

// it should have a place to add new todos
todos.push('item4');
console.log(todos);

todos.push('item5');
console.log(todos);

// it have a place to change a todo.
todos[0] = 'item 1 update';
console.log(todos);

// it should have a place to delete a todo.
todos.splice(1,2);
console.log(todos);
