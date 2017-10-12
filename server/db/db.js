const path = require('path')
const config = require(path.join(__dirname, '/../../knexfile')).development
const knex = require('knex')(config)

function getPlayers() {
  return knex('Players')
    .select()
}
function getGames() {
  return knex('Games')
    .select()
}

function addPlayer(e) {
  return knex('players')
    .insert({
      firstName: e.firstName,
      surName: e.surName,
      knickName: e.knickName,
      favHand: e.favHand,
      favHeadsUp: e.favHeadsUp,
      leastFavHeadsUp: e.leastFavHeadsUp,
      image: e.image
    })
}

function editPlayer(id, e) {
  return knex('Players')
    .where('id', id)
    .update({
      firstName: e.firstName,
      surName: e.surName,
      knickName: e.knickName,
      favHand: e.favHand,
      favHeadsUp: e.favHeadsUp,
      leastFavHeadsUp: e.leastFavHeadsUp,
      image: e.image
    })
}

module.exports = {
  getPlayers,
  addPlayer,
  editPlayer,
  getGames
}
