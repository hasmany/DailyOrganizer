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

      // Clear the "new item " text filed, model will update automatically
      this.set('newTitle', "");

      item.save();
    },
    clearCompleted: function() {
      // Get all items that are completed, and delete
      var completed = this.filterBy('isCompleted',true);
      completed.invoke('deleteRecord');
      completed.invoke('save');
    }
  },
  hasCompleted: function() {
    // Return true of there is at least 1 completed item
    return this.get('completed') > 0;
  }.property('completed'),
  completed: function() {
    // Get number of completed items
    return this.filterBy('isCompleted',true).get('length');
  }.property('@each.isCompleted'),
  remaining: function() {
    // Return number of items that are not complete
    return this.filterBy('isCompleted',false).get('length');
  }.property('@each.isCompleted'),

  inflection: function() {
    // Changes string plural based on number of remaining items
    var remaining = this.get('remaining');
    return remaining === 1 ? 'item' : 'items';
  }.property('remaining'),

  allAreDone: function(key,value) {
    if (value === undefined) {
      // Checks length and isCompelted property, if lenght is not zero, and every
      // item is Completed, return true
      return !!this.get('length') && this.isEvery('isCompleted',true);
    } else {
      // Set each item to be true
      this.setEach('isCompleted',value);
      this.invoke('save');
      return value;
    }

  }.property('@each.isCompleted')
});
