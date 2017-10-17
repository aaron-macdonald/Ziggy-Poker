
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Gamedata').del()
    .then(function () {
      // Inserts seed entries
      return knex('Gamedata').insert([
        {id: 1, game_id: 1, player_id: 100, buyin: 20, rebuys: 20, addons: 20, position: 1, prizemoney: 120  },
        {id: 2, game_id: 1, player_id: 101, buyin: 20, rebuys: 40, addons: 0, position: 2, prizemoney: 40  },
        {id: 3, game_id: 1, player_id: 102, buyin: 20, rebuys: 80, addons: 0, position: 3, prizemoney: 60  },
        {id: 4, game_id: 2, player_id: 100, buyin: 20, rebuys: 40, addons: 0, position: 3, prizemoney: 0  },
        {id: 5, game_id: 2, player_id: 101, buyin: 20, rebuys: 40, addons: 0, position: 2, prizemoney: 80  },
        {id: 6, game_id: 2, player_id: 102, buyin: 20, rebuys: 100, addons: 0, position: 1, prizemoney: 160  }
      ])
    })
}
