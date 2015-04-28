Organizer.ItemController = Ember.ObjectController.extend({
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
  }.property("model.isCompleted")
});


