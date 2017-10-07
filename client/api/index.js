import request from 'superagent'

export function getPlayers () {
  return request.get('/players')
    .then(data => {
      const players = data.body
      return players.map(player => {
        console.log(player);
        return Object.assign(
          {},
          player
        )
      })
    })
    .catch(err => {
      throw Error('Cannot GET Players!')
    })
}

export function addPlayer (player) {
  return request.player('/players')
    .send(player)
    .then(data => {
      const returnedPlayer = data.body
      return returnedPlayer
    })
    .catch(err => {
      throw Error('Cannot POST a new Player!')
    })
}

export function updatePlayer (player) {
  return request.put(`/players/${player.id}`)
    .send(player)
    .then(data => {
      const returnedPlayer = data.body
      return returnedPlayer
    })
    .catch(err => {
      throw Error('Cannot PUT a Player!')
    })
}

export function deletePlayer (playerId) {
  return request.del(`/players/${playerId}`)
  .then(data => {
    const returnedPlayer = data.body
    return returnedPlayer
  })
  .catch(err => {
    throw Error('Cannot DELETE a Player!')
  })
}
