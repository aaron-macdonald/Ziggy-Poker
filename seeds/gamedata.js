
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Gamedata').del()
    .then(function () {
      // Inserts seed entries
      return knex('Gamedata').insert([
        {id: 1, game_id: 1, player_id: 1, buyin: 20, rebuys: 20, addons: 20, position: 1, prizemoney: 120  },
        {id: 2, game_id: 1, player_id: 2, buyin: 20, rebuys: 40, addons: 0, position: 2, prizemoney: 40  },
        {id: 3, game_id: 1, player_id: 3, buyin: 20, rebuys: 80, addons: 0, position: 3, prizemoney: 60  }
      ])
    })
}
