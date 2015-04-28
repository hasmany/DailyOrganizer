// Routes

// At '/' or root url, render the todos template
Organizer.Router.map(function(){
  this.resource('items', {path: "/"}, function(){
    // additonal child routes will go here
    this.route('active');
    this.route('completed');
  });
});

// Ember.js proivded a route with teh default behavior of rendering
// a matching template, (see nameing convention)
Organizer.ItemsRoute = Ember.Route.extend({
  model: function() {
    // find ( // name of model, in this case fixture data)
    return this.store.find('item');
  }
});

// Route for Items, uses the model for the parent template, or items
Organizer.ItemsIndexRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('items');
  }
});

// Route for all items that are not complete
Organizer.ItemsActiveRoute = Ember.Route.extend({
  model: function() {
    return this.store.filter('item',function(item) {
      return !item.get('isCompleted');
    });
  },
  renderTemplate: function(controller) {
    this.render('items/index', {controller: controller})
  }
});

// Route for all items that are Completed
Organizer.ItemsCompletedRoute = Ember.Route.extend({
  model: function() {
    return this.store.filter('item',function(item) {
      return item.get('isCompleted');
    });
  },
  renderTemplate: function(controller) {
    this.render('items/index', {controller: controller});
  }
});


