
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Games').del()
    .then(function () {
      // Inserts seed entries
      return knex('Games').insert([
        {id: 1, date: '6/20/2017', location: 'Ziggys'},
        {id: 2, date: '7/30/2017', location: 'Redwood'}
      ]);
    });
};
