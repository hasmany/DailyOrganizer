
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
  }
});
