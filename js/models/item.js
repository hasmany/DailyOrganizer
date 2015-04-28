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
    title: "Write Daily tasks",
    isCompleted: true
  },
  {
    id: 2,
    title: "...",
    isCompleted: false
  },
  {
    id: 3,
    title: "Be Organized",
    isCompleted: false
  }
];



