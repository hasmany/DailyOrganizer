// Routes

// At '/' or root url, render the todos template
Organizer.Router.map(function(){
  this.resource('todos', {path: "/"});
});
