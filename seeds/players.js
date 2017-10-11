
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Players').del()
    .then(function () {
      // Inserts seed entries
      return knex('Players').insert([
        {id: 100, firstName: 'Aaron', surName: 'Macdonald', knickName: 'Azza', favHand:'6 7 suited',favHeadsUp: 'Wiremu', leastFavHeadsUp: 'Lucky Troy', image:'/images/aaron_001.jpg' },
        {id: 101, firstName: 'Bayley', surName: 'Legget', knickName: 'Bayles', favHand:'AA',favHeadsUp: 'Ashley', leastFavHeadsUp: 'Nick', image:'/images/bayley_001.jpg' },
        {id: 102, firstName: 'Nick', surName: 'Evans', knickName: 'Nig', favHand:'QQ',favHeadsUp: 'Kev', leastFavHeadsUp: 'Andrew', image:'/images/nick_001.jpg' },
      ]);
    });
};
