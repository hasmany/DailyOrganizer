// Model class to describe items in our organizer

// Properties

// title : string
// isCompleted: boolean

Organizer.Item = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

// Fixture data
Organizer.Item.FIXTURES = [
  {
    id: 1,
    title: "Learn Ember.js",
    isCompleted: true
  },
  {
    id: 2,
    title: "...",
    isCompleted: false
  },
  {
    id: 3,
    title: "Profit",
    isCompleted: false
  }
];



