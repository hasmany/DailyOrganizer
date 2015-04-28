Organizer.ItemsController = Ember.ArrayController.extend({
  actions: {
    createItem: function() {
      // Get the item title by the "New Item: text field
      var title = this.get('newTitle');
      if (!title.trim()) { return; }

      // Create the new Item model
      var item = this.store.createRecord('item',{
        title: title,
        isCompleted: false
      });

      // Clear the "new Todo " text filed, model will update automatically
      this.set('newTitle', "");

      item.save();
    }
  },
  remaining: function() {
    return this.filterBy('isCompleted',false).get('length');
  }.property('@each.isCompleted'),

  inflection: function() {
    // Changes string plural based on number of remaining items
    var remaining = this.get('remaining');
    return remaining === 1 ? 'item' : 'items';
  }.property('remaining')
});
