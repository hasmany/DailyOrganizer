// Routes

// At '/' or root url, render the todos template
Organizer.Router.map(function(){
  this.resource('todos', {path: "/"});
});

// Ember.js proivded a route with teh default behavior of rendering
// a matching template, (see nameing convention)
Organizer.TodosRoute = Ember.Route.extend({
  model: function() {
    // find ( // name of model, in this case fixture data)
    return this.store.find('item');
  }
})
