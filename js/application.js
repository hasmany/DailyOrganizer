// Application instance

(function(){

  window.Todos = Ember.Application.create();

  // Adapters are responsible for communicating with a source of data
  // Typically a web API
  // In this case, an adapter is desinged to load fixture data(sample/test data)
  Todos.ApplicationAdapter = DS.FixtureAdapter.extend();

}());
