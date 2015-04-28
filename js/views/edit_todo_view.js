Organizer.EditItemView = Ember.TextField.extend({
  // Gets called when element is inserted into the screen
  didInsertElement: function() {
    this.$().focus();
  }
});

// calls focus when edit-item is inserted into the DOm automically
Ember.Handlebars.helper('edit-item', Organizer.EditItemView);


