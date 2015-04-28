// Model class to describe items in our organizer

// Properties

// title : string
// isCompleted: boolean


Organizer.Item = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

