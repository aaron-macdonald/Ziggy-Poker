
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Players').del()
    .then(function () {
      // Inserts seed entries
      return knex('Players').insert([
        {id: 100, firstName: 'Aaron', surName: 'Macdonald', knickName: 'Azza', favHand:'6 7 suited',favHeadsUp: 'Wiremu', leastFavHeadsup: 'Lucky Troy' },
        {id: 101, firstName: 'Leanne', surName: 'Macdonald', knickName: 'Weeanne', favHand:'AA',favHeadsUp: 'Azza', leastFavHeadsup: 'Ziggy' },
      ]);
    });
};
