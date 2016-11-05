console.log('Creating database for ToDo....');
// Load mongoose package
var mongoose = require('mongoose');
// Connect to MongoDB and create/use database called todoAppTest
mongoose.connect('mongodb://localhost/todo-api');
console.log('Created database !');
console.log('Creating Schema ... ')
// Create a schema
var TodoSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
  note: String,
  updated_at: { type: Date, default: Date.now },
});
// Create a model based on the schema
var Todo = mongoose.model('Todo', TodoSchema);
console.log('Creating toDo Object in memory ...')
// Create a todo in memory
var todo = new Todo({name: 'Java Complete Reference', completed: false, note: 'Getting there...'});
// Save it to database
todo.save(function(err){
  if(err)
    console.log(err);
  else
    console.log(todo);
});
