const path = require('path')
const config = require(path.join(__dirname, '/../../knexfile')).development
const knex = require('knex')(config)

function getPlayers(){
  return knex('Players')
}

function addPlayer (player) {
  return knex('players').insert(player)
    .then((result) => knex('players').where({ id: result[0]}))
}

module.exports = {
  getPlayers,
  addPlayer
}
