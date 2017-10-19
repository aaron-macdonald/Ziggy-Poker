
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Games').del()
    .then(function () {
      // Inserts seed entries
      return knex('Games').insert([
        {id: 1, date: '7/2/2017', location: 'Ziggys'},
        {id: 2, date: '7/7/2017', location: 'Ziggys'},
        {id: 3, date: '7/14/2017', location: 'Ziggys'},
        {id: 4, date: '7/21/2017', location: 'Ziggys'},
        {id: 5, date: '7/28/2017', location: 'Ziggys'},
        {id: 6, date: '8/4/2017', location: 'Ziggys'},

        ]);
    });
};
