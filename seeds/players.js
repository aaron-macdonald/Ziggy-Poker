
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Players').del()
    .then(function () {
      // Inserts seed entries
      return knex('Players').insert([
        {id: 100, firstName: 'Aaron', surName: 'Macdonald', knickName: 'Azza', favHand:'6 7 suited',favHeadsUp: 'Wiremu', leastFavHeadsUp: 'Lucky Troy' },
        {id: 101, firstName: 'Leanne', surName: 'Macdonald', knickName: 'Weeanne', favHand:'AA',favHeadsUp: 'Azza', leastFavHeadsUp: 'Ziggy' },
        {id: 102, firstName: 'Caleb', surName: 'Macdonald', knickName: 'Skin & Bones', favHand:'QQ',favHeadsUp: 'Kev', leastFavHeadsUp: 'Lucky Troy' },
      ]);
    });
};
