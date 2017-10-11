const path = require('path')
const config = require(path.join(__dirname, '/../../knexfile')).development
const knex = require('knex')(config)

function getPlayers() {
  return knex('Players')
    .select()
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
  editPlayer
}
