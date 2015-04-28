Organizer.ItemController = Ember.ObjectController.extend({
  actions: {
    editItem: function () {
      this.set('isEditing', true);
    },
    acceptChanges: function() {
      this.set('isEditing', false);
      if (Ember.isEmpty(this.get('model.title'))) {
        this.send('removeItem');
      } else {
        this.get('model').save();
      }
    },
    removeItem: function() {
      var todo = this.get('model');
      todo.deleteRecord();
      todo.save();
    }
  },

  isEditing: false,
  isCompleted: function(key,value) {
    // Gets the model from the iteration
    var model = this.get('model');
    if (value === undefined) {
      // property being used as a getter
      return model.get('isCompleted');
    } else {
      // Property being used as a setter
      model.set('isCompleted',value);
      model.save();
      return value;
    }
  }.property("model.isCompleted"),
});


