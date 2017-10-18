
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Gamedata').del()
    .then(function () {
      // Inserts seed entries
      return knex('Gamedata').insert([
        {id: 1, game_id: 1, player_id: 100, buyin: 20, rebuys: 40, addons: 0, position: 5, prizemoney: 0},
        {id: 2, game_id: 1, player_id: 102, buyin: 20, rebuys: 0, addons: 0, position: 3, prizemoney: 0},
        {id: 3, game_id: 1, player_id: 107, buyin: 20, rebuys: 0, addons: 0, position: 6, prizemoney: 0},
        {id: 4, game_id: 1, player_id: 101, buyin: 20, rebuys: 0, addons: 0, position: 1, prizemoney: 100},
        {id: 5, game_id: 1, player_id: 112, buyin: 20, rebuys: 0, addons: 0, position: 2, prizemoney: 80},
        {id: 6, game_id: 1, player_id: 104, buyin: 20, rebuys: 0, addons: 0, position: 4, prizemoney: 0},

        {id: 7, game_id: 2, player_id: 101, buyin: 20, rebuys: 20, addons: 20, position: 6, prizemoney: 0},
        {id: 8, game_id: 2, player_id: 104, buyin: 20, rebuys: 0, addons: 0, position: 5, prizemoney: 0},
        {id: 9, game_id: 2, player_id: 102, buyin: 20, rebuys: 20, addons: 0, position: 3, prizemoney: 40},
        {id: 10, game_id: 2, player_id: 112, buyin: 20, rebuys: 20, addons: 0, position: 9, prizemoney: 0},
        {id: 11, game_id: 2, player_id: 100, buyin: 20, rebuys: 0, addons: 20, position: 1, prizemoney: 180},
        {id: 12, game_id: 2, player_id: 107, buyin: 20, rebuys: 0, addons: 0, position: 4, prizemoney: 0},
        {id: 13, game_id: 2, player_id: 108, buyin: 20, rebuys: 0, addons: 0, position: 8, prizemoney: 0},
        {id: 14, game_id: 2, player_id: 111, buyin: 20, rebuys: 0, addons: 0, position: 10, prizemoney: 0},
        {id: 15, game_id: 2, player_id: 106, buyin: 20, rebuys: 0, addons: 0, position: 7, prizemoney: 0},
        {id: 16, game_id: 2, player_id: 105, buyin: 20, rebuys: 0, addons: 20, position: 2, prizemoney: 140},
        {id: 17, game_id: 2, player_id: 109, buyin: 20, rebuys: 0, addons: 0, position: 11, prizemoney: 0},

        {id: 18, game_id: 3, player_id: 112, buyin: 20, rebuys: 20, addons: 0, position: 5, prizemoney: 0},
        {id: 19, game_id: 3, player_id: 106, buyin: 20, rebuys: 0, addons: 20, position: 7, prizemoney: 0},
        {id: 20, game_id: 3, player_id: 101, buyin: 20, rebuys: 60, addons: 0, position: 9, prizemoney: 0},
        {id: 21, game_id: 3, player_id: 103, buyin: 20, rebuys: 0, addons: 20, position: 1, prizemoney: 180},
        {id: 22, game_id: 3, player_id: 102, buyin: 20, rebuys: 0, addons: 20, position: 6, prizemoney: 0},
        {id: 23, game_id: 3, player_id: 105, buyin: 20, rebuys: 20, addons: 20, position: 4, prizemoney: 0},
        {id: 24, game_id: 3, player_id: 104, buyin: 20, rebuys: 20, addons: 0, position: 3, prizemoney: 80},
        {id: 25, game_id: 3, player_id: 100, buyin: 20, rebuys: 0, addons: 20, position: 2, prizemoney: 160},
        {id: 26, game_id: 3, player_id: 107, buyin: 20, rebuys: 20, addons: 0, position: 8, prizemoney: 0},

        {id: 27, game_id: 4, player_id: 103, buyin: 20, rebuys: 20, addons: 20, position: 4, prizemoney: 0},
        {id: 28, game_id: 4, player_id: 104, buyin: 20, rebuys: 20, addons: 0, position: 3, prizemoney: 0},
        {id: 29, game_id: 4, player_id: 109, buyin: 20, rebuys: 0, addons: 0, position: 6, prizemoney: 0},
        {id: 30, game_id: 4, player_id: 100, buyin: 20, rebuys: 80, addons: 0, position: 5, prizemoney: 0},
        {id: 31, game_id: 4, player_id: 101, buyin: 20, rebuys: 0, addons: 0, position: 1, prizemoney: 140},
        {id: 32, game_id: 4, player_id: 106, buyin: 20, rebuys: 0, addons: 0, position: 2, prizemoney: 120},

        {id: 33, game_id: 5, player_id: 104, buyin: 20, rebuys: 20, addons: 0, position: 6, prizemoney: 0},
        {id: 34, game_id: 5, player_id: 106, buyin: 20, rebuys: 20, addons: 20, position: 8, prizemoney: 0},
        {id: 35, game_id: 5, player_id: 101, buyin: 20, rebuys: 20, addons: 0, position: 1, prizemoney: 180},
        {id: 36, game_id: 5, player_id: 102, buyin: 20, rebuys: 20, addons: 0, position: 7, prizemoney: 0},
        {id: 37, game_id: 5, player_id: 108, buyin: 20, rebuys: 0, addons: 0, position: 2, prizemoney: 120},
        {id: 38, game_id: 5, player_id: 109, buyin: 20, rebuys: 20, addons: 0, position: 9, prizemoney: 0},
        {id: 39, game_id: 5, player_id: 103, buyin: 20, rebuys: 0, addons: 0, position: 3, prizemoney: 60},
        {id: 40, game_id: 5, player_id: 105, buyin: 20, rebuys: 0, addons: 20, position: 4, prizemoney: 0},
        {id: 41, game_id: 5, player_id: 100, buyin: 20, rebuys: 40, addons: 0, position: 5, prizemoney: 0},

        {id: 42, game_id: 6, player_id: 104, buyin: 20, rebuys: 0, addons: 0, position: 5, prizemoney: 0},
        {id: 43, game_id: 6, player_id: 111, buyin: 20, rebuys: 0, addons: 0, position: 1, prizemoney: 140},
        {id: 44, game_id: 6, player_id: 101, buyin: 20, rebuys: 0, addons: 20, position: 2, prizemoney: 140},
        {id: 45, game_id: 6, player_id: 109, buyin: 20, rebuys: 0, addons: 0, position: 9, prizemoney: 0},
        {id: 46, game_id: 6, player_id: 100, buyin: 20, rebuys: 60, addons: 0, position: 3, prizemoney: 50},
        {id: 47, game_id: 6, player_id: 102, buyin: 20, rebuys: 20, addons: 10, position: 7, prizemoney: 0},
        {id: 48, game_id: 6, player_id: 110, buyin: 20, rebuys: 0, addons: 0, position: 6, prizemoney: 0},
        {id: 49, game_id: 6, player_id: 103, buyin: 20, rebuys: 0, addons: 20, position: 8, prizemoney: 0},
        {id: 50, game_id: 6, player_id: 107, buyin: 20, rebuys: 20, addons: 0, position: 4, prizemoney: 0},

      ])
    })
}
