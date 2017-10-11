exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('Gamedata', function(table) {
    table.increments().primary('id')
    table.integer('game_id')
    table.integer('player_id')
    table.integer('buyin')
    table.integer('rebuys')
    table.integer('addons')
    table.integer('position')
    table.integer('prizemoney')
  })
}

exports.down = function(knex, Promise) {
  return knex.scema.dropTableIfExists('Gamedata')
}
